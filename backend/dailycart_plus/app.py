from flask import Flask, render_template
from flask_cors import CORS
from routes.vendor import vendor_bp
from routes.suppliers import supplier_bp  # ✅ Import supplier blueprint

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Enable CORS for the app
app.secret_key = 'your-secret-key'

# Register blueprints
app.register_blueprint(vendor_bp, url_prefix='/vendor')
app.register_blueprint(supplier_bp, url_prefix='/supplier')  # ✅ Register supplier

# Homepage
@app.route('/')
def index():
    vendor_id = 1  
    return render_template('index.html', vendor_id=vendor_id)
from flask import Flask, request, jsonify


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    result = {"prediction": "some result"}  # Replace with model logic
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True,port=5000)  # ✅ Ensure the port is set correctly
