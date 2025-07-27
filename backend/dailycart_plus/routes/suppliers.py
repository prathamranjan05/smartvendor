from flask import Blueprint, render_template, request, redirect, url_for
import csv
import os
from collections import defaultdict

supplier_bp = Blueprint('supplier', __name__)

# ---- In-memory storage ----
SUPPLIERS_CSV = os.path.join('data', 'suppliers.csv')
INGREDIENTS_CSV = os.path.join('data', 'ingredients.csv')
RATINGS = defaultdict(list)  # {supplier_id: [list of ratings]}

# ---- Utility: Load Supplier Data ----
def load_suppliers():
    suppliers = []
    supplier_ingredients = defaultdict(list)

    # Load supplier -> ingredients mapping
    with open(INGREDIENTS_CSV, newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            supplier = row['Supplier'].strip()
            ingredient = row['Ingredient'].strip()
            supplier_ingredients[supplier].append(ingredient)

    # Load supplier data
    with open(SUPPLIERS_CSV, newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            supplier_id = int(row['ID'])
            name = row['Name']
            location = row['Location']
            ingredients = supplier_ingredients.get(name, [])
            ratings = RATINGS[supplier_id]
            trust_score = round(sum(ratings) / len(ratings), 1) if ratings else 'Not rated'

            suppliers.append({
                'id': supplier_id,
                'name': name,
                'location': location,
                'ingredients': ingredients,
                'trust_score': trust_score
            })
    return suppliers

# ---- Route: View all suppliers ----
@supplier_bp.route('/suppliers/<int:vendor_id>', methods=['GET'])
def list_suppliers(vendor_id):
    suppliers = load_suppliers()
    return render_template('suppliers.html', suppliers=suppliers, vendor_id=vendor_id, message=None)

# ---- Route: Rate a supplier ----
@supplier_bp.route('/suppliers/<int:vendor_id>/rate/<int:supplier_id>', methods=['POST'])
def rate_supplier(vendor_id, supplier_id):
    rating = int(request.form.get('rating'))
    if rating and 1 <= rating <= 5:
        RATINGS[supplier_id].append(rating)
        message = "Thank you for rating this supplier! ✅"
    else:
        message = "Invalid rating. Please select a value from 1 to 5."

    suppliers = load_suppliers()
    return render_template('suppliers.html', suppliers=suppliers, vendor_id=vendor_id, message=message)
