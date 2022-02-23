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

### Posts

- Add a new todo
- List todos
- Categorise todo’s
- Filter by category
- Mark a todo as done

## API Endpoints

###

<table>

<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<th colspan=3>Posts</th>

<tr><td>POST</td> <td>/posts</td> <td>Create posts</td></tr>

<tr><td>GET</td> <td>/posts</td> <td> View all posts</td></tr>

<tr><td>PATCH</td> <td>/posts/:postId</td> <td> Mark post as read</td></tr>

<tr><td>DELETE</td> <td>/posts/:postId</td> <td>Delete a user</td>
</tr>
 
</table>

## Getting Started

### Installation

- git clone
  [enjaba]https://github.com/marufdeen/enjaba)
- Run `yarn install` or `npm install` to install packages
- Run `yarn run seed` or `npm run seed` to automatically seed admin into the database
- Run `yarn run dev` or `npm run dev` to start the server
- Navigate to [localhost:8080](http://localhost:8080) in browser to access the application

## data

#### Data

- Post Creation

```sh
 {
 title: String,
 description: String,
 label: String,
}
```

#### Prerequisites

- [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

- After installing as shown above
- Navigate to [localhost:8080](http://localhost:8080/api) in
  [Postman](https://getpostman.com/) to access the application
- Super-admin login details ( {email: admin@dervac.com, password: admin} )
