from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_pymongo import PyMongo
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder='static')

# Configure MongoDB
app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://localhost:27017/portfolio")
mongo = PyMongo(app)

@app.route('/')
def index():
    """Render the main portfolio page"""
    return render_template('index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    """Serve static files"""
    return send_from_directory('static', path)

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.json
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if field not in data or not data[field].strip():
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Create message document
        message = {
            'name': data['name'],
            'email': data['email'],
            'message': data['message'],
            'created_at': datetime.utcnow()
        }
        
        # Save to MongoDB
        mongo.db.messages.insert_one(message)
        
        return jsonify({"success": True, "message": "Message sent successfully"}), 200
    
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": "An error occurred while processing your request"}), 500

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get all projects from the database"""
    try:
        projects = list(mongo.db.projects.find({}, {'_id': 0}))
        return jsonify(projects), 200
    
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": "An error occurred while fetching projects"}), 500

@app.route('/api/skills', methods=['GET'])
def get_skills():
    """Get all skills from the database"""
    try:
        skills = list(mongo.db.skills.find({}, {'_id': 0}))
        return jsonify(skills), 200
    
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": "An error occurred while fetching skills"}), 500

if __name__ == '__main__':
    app.run(debug=True)

