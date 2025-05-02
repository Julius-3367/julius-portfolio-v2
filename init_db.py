from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Connect to MongoDB
mongo_uri = os.getenv("MONGO_URI", "mongodb://localhost:27017/portfolio")
client = MongoClient(mongo_uri)
db = client.get_database()

# Initialize projects collection
projects = [
    {
        "title": "AirBnB Clone",
        "description": "A full-stack web application that replicates core AirBnB functionality with property listings, user authentication, and booking features.",
        "techStack": ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"],
        "githubLink": "https://github.com/Julius-3367/AirBnB_clone"
    },
    {
        "title": "Personal Blog",
        "description": "A responsive blog platform with content management system, user comments, and category filtering.",
        "techStack": ["JavaScript", "HTML", "CSS", "Flask", "MySQL"],
        "githubLink": "https://github.com/Julius-3367/blog-platform"
    },
    {
        "title": "Inventory Management System",
        "description": "A web-based inventory tracking system with real-time updates, reporting, and user role management.",
        "techStack": ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"],
        "githubLink": "https://github.com/Julius-3367/inventory-system"
    }
]

# Initialize skills collection
skills = [
    {"name": "Python"},
    {"name": "Flask"},
    {"name": "MySQL"},
    {"name": "JavaScript"},
    {"name": "HTML"},
    {"name": "CSS"},
    {"name": "Git"},
    {"name": "GitHub"},
    {"name": "AI tools"}
]

# Drop existing collections
db.projects.drop()
db.skills.drop()

# Insert data
db.projects.insert_many(projects)
db.skills.insert_many(skills)

print("Database initialized successfully!")

