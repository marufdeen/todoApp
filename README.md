# Enjaba

## Application Features

A Todo list application.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Data](#data)
  - [Development](#development)

## Technologies

- [NodeJS](https://nodejs.org/) - Runtime Environment
- [ExpressJs](https://expressjs.com/) - Web Application Framework
- [MongoDB](https://www.mongodb.com/) - Database

## Features

### todos

- Add a new todo
- List todos
- Categorise todo’s
- Filter by category
- Mark a todo as done

## API Endpoints

###

<table>

<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<th colspan=3>Todos</th>

<tr><td>POST</td> <td>/todos</td> <td>Create todos</td></tr>

<tr><td>GET</td> <td>/todos</td> <td> View all todos</td></tr>

<tr><td>PATCH</td> <td>/check/:todoId</td> <td> Mark post as read</td></tr>

<tr><td>PATCH</td> <td>/uncheck/:todoId</td> <td> Undo - mark post as read</td></tr>

<tr><td>DELETE</td> <td>/todos/:todoId</td> <td>Delete a todo</td>
</tr>
 
</table>

## Getting Started

### Installation

- git clone
  [enjaba]https://github.com/marufdeen/enjaba)
- Run `yarn install` or `npm install` to install packages
- Run `cd frontend && yarn install` or `cd frontend && npm install` to install react packages
- Install and start your mongoDB (mongoDB Atlas)
- Run `yarn run server` or `npm run server` to start the server
- Run `yarn run client` or `npm run client` to start the client
- Run `yarn start` or `npm start` to start the server and client (recomended)
- Navigate to [localhost:8080](http://localhost:8080) in browser to access the application

## data

#### Data

- Post Creation

```sh
 {
 title: String,
 description: String,
 category: String,
}
```

#### Prerequisites

- [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

- After installing as shown above
- Navigate to [localhost:8080](http://localhost:8080/) in
  [Postman](https://getpostman.com/) to access the application