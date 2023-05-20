# Auth State Management Project

This project is an example of Auth (Authentication) management developed using Pinia and Vue 3 Composition API. It allows users to register, log in, and log out.

## Project Purpose

The purpose of this project is to learn the principles of user session management in Vue.js using Pinia. The project aims to explore the concepts and best practices of managing user authentication and session data in a Vue.js application.

Through this project, developers can gain a deeper understanding of the Vue.js framework, the Composition API, and the Pinia state management pattern. It serves as a practical guide for implementing secure authentication and session management functionalities, including user login, logout, session persistence, and protected routes.


## Features

- User registration (username, email, password)
- User login (using email and password)
- User logout
- Authentication state management (checking if a user is logged in)
- Route protection (redirecting unauthorized users to protected pages)


## Installation

```
# Clone the project
git clone https://github.com/username/project-name.git

# Navigate to the project directory
cd project-name

# Install the dependencies
npm install

# Start the project
npm run serve

Open http://localhost:3000  in your browser to view the application.

```
### Note: Update the Axios baseURL
Please ensure that your backend API is running and accessible. The current baseURL in the __axios.js__ is not public, which may not be available. Modify the baseURL in the __axios.js__ file to match the endpoint of your own backend project.

## Usage

- On the homepage, you will find registration and login forms for users to create an account or log in.
- Use the registration form to create a new user account.
- Use the login form to log in with an existing user.
- After logging in, the authentication state is checked, and access to protected pages is granted.
- Click the "Logout" button to log out.

## Technologies

- __Vue.js__ - Vue 3 Composition API
- __Pinia__ - State Management
- __Vue Router 4__ - Routing
