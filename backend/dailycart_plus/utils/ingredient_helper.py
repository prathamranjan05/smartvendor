import csv

def load_ingredients():
    ingredients = {}
    try:
        with open('data/ingredients.csv', 'r') as f:
            reader = csv.DictReader(f)
            for row in reader:
                ingredients[row['name']] = float(row['price'])
    except Exception as e:
        print("Ingredient CSV load error:", e)
    return ingredients
