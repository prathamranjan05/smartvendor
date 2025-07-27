from flask import Blueprint, request, render_template, redirect, url_for, session, flash
from datetime import date, datetime, timedelta
import csv
import os

vendor_bp = Blueprint('vendor', __name__)

# ------------ Load Ingredient Prices ------------
def load_ingredient_prices():
    prices = {}
    base_dir = os.path.dirname(os.path.abspath(__file__))
    csv_path = os.path.join(base_dir, '../data/ingredients.csv')

    if not os.path.exists(csv_path):
        print(f"[ERROR] File not found: {csv_path}")
        return prices

    with open(csv_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            name = row['Ingredient'].strip()
            price = float(row['Price'])
            prices[name] = price
    return prices

# ------------ Basket & Subscription Helpers ------------
def calculate_basket(basket, price_map):
    total = 0
    items = []
    for name, qty in basket.items():
        price_per_kg = price_map.get(name, 0)
        item_total = round(price_per_kg * qty, 2)
        total += item_total
        items.append({
            'name': name,
            'quantity': qty,
            'price_per_kg': price_per_kg,
            'total': item_total
        })
    return items, round(total, 2)

def should_deliver_today(subscription):
    freq = subscription.get('frequency')
    sub_date = datetime.strptime(subscription.get('subscribed_on'), '%Y-%m-%d').date()
    today = date.today()

    if freq == 'daily':
        return True
    elif freq == 'weekly':
        return (today - sub_date).days % 7 == 0
    elif freq == 'alternate':
        return (today - sub_date).days % 2 == 0
    elif freq == 'custom':
        days = subscription.get('custom_days', [])
        return today.strftime('%A') in days
    return False

# ------------ Basket Routes ------------
@vendor_bp.route('/<int:vendor_id>/basket', methods=['GET'])
def show_basket(vendor_id):
    session['current_vendor'] = vendor_id
    today = str(date.today())
    basket_key = f'basket_{vendor_id}'
    delivery_key = f'delivery_{vendor_id}_{today}'
    price_map = load_ingredient_prices()

    basket = session.get(basket_key, {})

    if basket and delivery_key not in session:
        items, grand_total = calculate_basket(basket, price_map)
        session[delivery_key] = {
            'items': items,
            'total': grand_total
        }

    ingredients = price_map.keys()
    basket_items, grand_total = calculate_basket(basket, price_map)
    message = session.pop('basket_message', None)

    return render_template('basket.html',
                           vendor_id=vendor_id,
                           ingredients=ingredients,
                           basket=basket_items,
                           grand_total=grand_total,
                           message=message)

@vendor_bp.route('/<int:vendor_id>/basket', methods=['POST'])
def add_to_basket(vendor_id):
    item = request.form.get('item')
    quantity = float(request.form.get('quantity'))
    key = f'basket_{vendor_id}'

    basket = session.get(key, {})
    basket[item] = basket.get(item, 0) + quantity
    session[key] = basket

    return redirect(url_for('vendor.show_basket', vendor_id=vendor_id))

@vendor_bp.route('/<int:vendor_id>/basket/remove', methods=['POST'])
def remove_from_basket(vendor_id):
    item = request.form.get('item')
    key = f'basket_{vendor_id}'

    basket = session.get(key, {})
    if item in basket:
        del basket[item]
        session[key] = basket

    return redirect(url_for('vendor.show_basket', vendor_id=vendor_id))

# ------------ Subscription Routes ------------
@vendor_bp.route('/<int:vendor_id>/subscribe', methods=['POST'])
def subscribe_basket(vendor_id):
    frequency = request.form.get('frequency') or 'daily'
    custom_days = request.form.getlist('custom_days')
    basket_key = f'basket_{vendor_id}'
    subs_key = f'subscriptions_{vendor_id}'

    basket = session.get(basket_key, {})
    if not basket:
        return redirect(url_for('vendor.show_basket', vendor_id=vendor_id))

    subscriptions = session.get(subs_key, [])
    new_subscription = {
        'basket': basket,
        'frequency': frequency,
        'custom_days': custom_days,
        'subscribed_on': str(date.today())
    }
    subscriptions.append(new_subscription)
    session[subs_key] = subscriptions

    # Save today's delivery
    sub_index = len(subscriptions) - 1
    today_str = str(date.today())
    delivery_key = f'delivery_{vendor_id}_sub{sub_index}_{today_str}'

    price_map = load_ingredient_prices()
    items, total = calculate_basket(basket, price_map)
    session[delivery_key] = {
        'items': items,
        'total': total
    }

    session.pop(basket_key, None)
    session['basket_message'] = 'Subscribed successfully!'
    return redirect(url_for('vendor.show_basket', vendor_id=vendor_id))

@vendor_bp.route('/<int:vendor_id>/subscriptions', methods=['GET'])
def view_subscriptions(vendor_id):
    subs_key = f'subscriptions_{vendor_id}'
    subscriptions = session.get(subs_key, [])

    display_subs = []
    for i, sub in enumerate(subscriptions):
        display_subs.append({
            'index': i,
            'basket': sub['basket'],
            'frequency': sub['frequency'],
            'custom_days': sub.get('custom_days', []),
            'subscribed_on': sub['subscribed_on']
        })

    return render_template('subscriptions.html', vendor_id=vendor_id, subscriptions=display_subs)

@vendor_bp.route('/<int:vendor_id>/subscriptions/delete/<int:index>', methods=['POST'])
def delete_subscription(vendor_id, index):
    subs_key = f'subscriptions_{vendor_id}'
    subscriptions = session.get(subs_key, [])
    if 0 <= index < len(subscriptions):
        subscriptions.pop(index)
        session[subs_key] = subscriptions
    return redirect(url_for('vendor.view_subscriptions', vendor_id=vendor_id))

@vendor_bp.route('/<int:vendor_id>/subscriptions/modify/<int:index>', methods=['POST'])
def modify_subscription(vendor_id, index):
    subs_key = f'subscriptions_{vendor_id}'
    subscriptions = session.get(subs_key, [])
    if 0 <= index < len(subscriptions):
        new_freq = request.form.get('frequency')
        custom_days = request.form.getlist('custom_days')
        start_date = request.form.get('start_date') or str(date.today())

        subscriptions[index]['frequency'] = new_freq
        subscriptions[index]['custom_days'] = custom_days
        subscriptions[index]['subscribed_on'] = start_date

        session[subs_key] = subscriptions
    return redirect(url_for('vendor.view_subscriptions', vendor_id=vendor_id))

@vendor_bp.route('/<int:vendor_id>/subscriptions/skip/<int:index>', methods=['POST'])
def skip_subscription_day(vendor_id, index):
    subs_key = f'subscriptions_{vendor_id}'
    subscriptions = session.get(subs_key, [])

    if 0 <= index < len(subscriptions):
        tomorrow = date.today() + timedelta(days=1)
        skip_key = f'skip_{vendor_id}_{index}_{tomorrow}'
        session[skip_key] = True

        session[f'delivery_{vendor_id}_sub{index}_{tomorrow}'] = {
            'items': [],
            'total': 0,
            'skipped': True
        }

        sub = subscriptions[index]
        freq = sub.get('frequency')
        next_date = tomorrow

        if freq == 'daily':
            next_date += timedelta(days=1)
        elif freq == 'weekly':
            next_date += timedelta(weeks=1)
        elif freq == 'alternate':
            next_date += timedelta(days=2)
        elif freq == 'custom':
            custom_days = sub.get('custom_days', [])
            for i in range(1, 8):
                candidate = tomorrow + timedelta(days=i)
                if candidate.strftime('%A') in custom_days:
                    next_date = candidate
                    break

        subscriptions[index]['subscribed_on'] = next_date.isoformat()
        session[subs_key] = subscriptions

        flash('Delivery skipped for tomorrow!', 'success')

    return redirect(url_for('vendor.view_subscriptions', vendor_id=vendor_id))

# ------------ Delivery Auto Logic ------------
@vendor_bp.before_app_request
def record_subscribed_deliveries():
    if not request.path.startswith('/'):
        return

    vendor_id = session.get('current_vendor')
    if not vendor_id:
        return

    today = str(date.today())
    price_map = load_ingredient_prices()
    subs_key = f'subscriptions_{vendor_id}'

    subscriptions = session.get(subs_key, [])
    for i, sub in enumerate(subscriptions):
        delivery_key = f'delivery_{vendor_id}_sub{i}_{today}'
        skip_key = f'skip_{vendor_id}_{i}_{today}'

        if delivery_key in session or session.get(skip_key):
            continue

        if should_deliver_today(sub):
            items, total = calculate_basket(sub['basket'], price_map)
            session[delivery_key] = {
                'items': items,
                'total': total
            }

# ------------ History Route ------------
@vendor_bp.route('/<int:vendor_id>/history')
def view_history(vendor_id):
    today = date.today()
    subs_key = f'subscriptions_{vendor_id}'
    subscriptions = session.get(subs_key, [])
    price_map = load_ingredient_prices()

    history = {}

    for index, sub in enumerate(subscriptions):
        start_date = datetime.strptime(sub['subscribed_on'], "%Y-%m-%d").date()
        freq = sub.get('frequency')
        custom_days = sub.get('custom_days', [])
        basket = sub['basket']

        current_date = start_date
        while current_date <= today:
            skip_key = f'skip_{vendor_id}_{index}_{current_date}'
            if session.get(skip_key):
                current_date += timedelta(days=1)
                continue

            deliver = False
            if freq == 'daily':
                deliver = True
            elif freq == 'weekly' and current_date.weekday() == start_date.weekday():
                deliver = True
            elif freq == 'alternate' and (current_date - start_date).days % 2 == 0:
                deliver = True
            elif freq == 'custom' and current_date.strftime('%A') in custom_days:
                deliver = True

            if deliver:
                items, total = calculate_basket(basket, price_map)
                date_str = current_date.isoformat()
                if date_str not in history:
                    history[date_str] = {'items': [], 'total': 0}

                history[date_str]['items'].extend(items)
                history[date_str]['total'] += total

            current_date += timedelta(days=1)

    history_list = [{
        'date': d,
        'items': history[d]['items'],
        'total': round(history[d]['total'], 2)
    } for d in sorted(history.keys(), reverse=True)]

    return render_template('history.html', vendor_id=vendor_id, history=history_list)
