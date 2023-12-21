# Title
 Blog App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Frontend](#frontend)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Blog App is a full-fledged web application designed to provide users with a platform for creating, managing, and sharing blog posts. The app includes user authentication, rich text editing, comments, and a responsive frontend for an optimal user experience.

## Features

- **User Authentication:**
  - Sign up, login, and logout functionalities.
  - Password hashing for enhanced security.

- **Blog Management:**
  - Create, read, update, and delete blog posts.
  - Rich text editing support for content creation.

- **Comment System:**
  - Users can leave comments on blog posts.
  - Moderation features to manage comments.

- **Responsive Design:**
  - Mobile-friendly design for seamless user experience on various devices.

## Technologies Used

- **Backend:**
  - FastAPI: A modern, fast web framework for building APIs with Python.
  - SQLAlchemy: SQL toolkit and Object-Relational Mapping (ORM) for database operations.
  - Pydantic: Data validation and parsing using Python type annotations.

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - Chakra UI: A simple, modular component library for React.

- **Database:**
  - PostgreSQL: An open-source relational database system.

- **Development Tools:**
  - Docker: Optional containerization for easy deployment.
  - ...

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- Python (version x.x.x)
- Node.js (version x.x.x)
- PostgreSQL (version x.x.x)
- Docker (optional, for containerization)
- ...

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app

# Install backend dependencies:
pip install -r requirements.txt

# Install frontend dependencies:
cd frontend
npm install


# Configuration
# Set up environment variables:

Create a .env file in the project root and define the necessary environment variables.

DATABASE_URL=postgresql://username:password@localhost/blog_app_db
SECRET_KEY=your_secret_key
Update username, password, and your_secret_key accordingly.

## Configure the database connection:

Edit config.py to set up the database connection and other configurations.

DATABASE_URL = "postgresql://username:password@localhost/blog_app_db"
Update username and password accordingly.

...

# Usage
Run the backend server:
uvicorn main:app --reload


# Run the frontend development server:
cd frontend
npm start
Open your browser and visit http://localhost:3000.

# Author
Caroline Akinyi Opiyo ("https://github.com/Budabos") Email: opiyocaroline20@gmail.com

# Collaborators
Nelson Murithi ("https://github.com/NellieMK65")

# License
License (" MIT License")

...