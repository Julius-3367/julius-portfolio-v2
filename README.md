# Julius K. Korir Portfolio

A personal portfolio website for Julius K. Korir, built with HTML, CSS, JavaScript, Tailwind CSS, Flask, and MongoDB.

## Features

- Responsive design that works on all devices
- Clean, modern UI with a teal color scheme
- Dynamic project and skills loading
- Contact form with MongoDB storage
- Flask backend API

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
- **Backend**: Flask (Python)
- **Database**: MongoDB
- **Icons**: Feather Icons

## Setup Instructions

### Prerequisites

- Python 3.8+
- MongoDB

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/Julius-3367/portfolio.git
   cd portfolio
   \`\`\`

2. Create and activate a virtual environment:
   \`\`\`
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   \`\`\`

3. Install dependencies:
   \`\`\`
   pip install -r requirements.txt
   \`\`\`

4. Create a `.env` file with your MongoDB connection string:
   \`\`\`
   MONGO_URI=mongodb://localhost:27017/portfolio
   FLASK_APP=app.py
   FLASK_ENV=development
   \`\`\`

5. Initialize the database:
   \`\`\`
   python init_db.py
   \`\`\`

6. Run the application:
   \`\`\`
   flask run
   \`\`\`

7. Open your browser and navigate to `http://localhost:5000`

## Project Structure

\`\`\`
portfolio/
├── app.py                 # Flask application
├── init_db.py             # Database initialization script
├── requirements.txt       # Python dependencies
├── .env                   # Environment variables
├── static/                # Static assets
│   ├── css/
│   │   └── styles.css     # Custom CSS styles
│   └── js/
│       └── main.js        # JavaScript functionality
└── templates/             # HTML templates
    └── index.html         # Main portfolio page
\`\`\`

## Deployment

This application can be deployed to any platform that supports Python applications, such as:

- Heroku
- PythonAnywhere
- AWS Elastic Beanstalk
- DigitalOcean App Platform

Remember to set up your MongoDB connection string as an environment variable in your deployment environment.

## License

This project is open source and available under the [MIT License](LICENSE).
\`\`\`

## How to Run the Portfolio Website

1. **Set up the environment**:
   - Install Python 3.8+ and MongoDB
   - Create a virtual environment: `python -m venv venv`
   - Activate it: `source venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Windows)

2. **Install dependencies**:
   - Run: `pip install -r requirements.txt`

3. **Configure MongoDB**:
   - Make sure MongoDB is running locally or update the `.env` file with your MongoDB connection string
   - Run the database initialization script: `python init_db.py`

4. **Start the Flask application**:
   - Run: `flask run`
   - Access the website at: http://localhost:5000

5. **Project Structure**:
   - `app.py`: Flask application with routes for serving the website and API endpoints
   - `static/`: Contains CSS and JavaScript files
   - `templates/`: Contains the HTML template
   - `init_db.py`: Script to initialize the MongoDB database with projects and skills

The portfolio features:
- Responsive design with Tailwind CSS
- Soft teal color scheme with white backgrounds
- Dynamic loading of projects and skills from MongoDB
- Contact form that saves messages to the database
- Smooth scrolling and mobile-friendly navigation

This implementation maintains all the design elements you requested while converting to a traditional tech stack with Flask and MongoDB.

<Actions>
  <Action name="Add blog functionality" description="Add a blog section with Flask and MongoDB" />
  <Action name="Implement user authentication" description="Add admin login to manage content" />
  <Action name="Create a project details page" description="Add individual pages for each project" />
  <Action name="Add image gallery" description="Create a portfolio gallery section" />
  <Action name="Implement dark mode" description="Add a dark mode toggle with teal accents" />
</Actions>

\`\`\`

</CodeProject>



