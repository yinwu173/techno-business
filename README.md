# E-commerce Back End

## About the Project

* The purpose of this project is to create an app running in the back end for a manager at an internet retail company that uses the latest technologies so that the company can compete with other e-commerce companies.

## Acceptance Criteria

* WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file THEN I am able to connect to a database using Sequelize.

* WHEN I enter schema and seed commands THEN a development database is created and is seeded with test data.

* WHEN I enter the command to invoke the application THEN my server is started and the Sequelize models are synced to the PostgreSQL database.

* WHEN I open API GET routes in Insomnia Core for categories, products, or tags THEN the data for each of these routes is displayed in a formatted JSON.

* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core THEN I am able to successfully create, update, and delete data in my database.

## Walkthrough Video Link

* https://watch.screencastify.com/v/XpxQYiK9765duJU2sWOh

### Hints

* To test your GET, POST, PUT, and DELETE routes in Insonmia, we will need to first run 'npm run seed' to seed data to our database. 

* Next, open the integrated terminal and run 'node server.js' or 'npm start' to begin testing the routes.

* Finally, navigate to Insomia and enter 'http://localhost:3001/'.

### Installation

* First, clone the given starter code. Then, install all necessary packages needed to help your back end application run: pg, sequelize, and dotenv. To store your postgres password and username securely, make sure to utilize the .env file.

