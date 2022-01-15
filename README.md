# Rubik's Cube

You need mongoDB installed to start the application.

## Used technologies to build this application

-NodeJS
-Express
-MongoDB
-Mongoose
-Handlebars
-Json Web Token
-Bcrypt
-Cookie Parser

## About

The purpose of this application is people to view different models of rubik`s cubes. They also can share their own cubes. 

The reason to build this application is to practice my knowladge and skills in building MPA with technologies noted above.

## Start the application

to start the application you can run `npm start`.

## Authentication functionality

Users have different functionality wich depends on that they are authenticated or not. Different cases are explained below.

### Guest users

Guest users can access all views and search functionality. They can not access create, edit, delete functionality.

### Registred Users

Hava got the whole guest users` functionality in addition they can create cubes or accessories. They can not edit or delete other users` cubes.

### Owner cube

The owner of the cube can edit, delete or add accessory for his cubes.