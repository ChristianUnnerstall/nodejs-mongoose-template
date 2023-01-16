# nodejs-mongoose-template

Spin up basic CRUD based API endpoints using mongoose to manage MongoDB database documents.

I use this template primarily to check basic mongoose function, schema, queries.

Feel free to use it and to get you started.

## Setup

Run npm install to load all the necessary packages for this template.

`npm install`

## Setup your environment

Create .env file in the root of the application

```
APP_PORT = 9000
MONGODB_URI = "mongodb://localhost:27017/"
MONGODB_DATABASE_NAME = "test"
```

## Start server

Run npm start to start the server

`npm start`

## Endpoints

```
GET     http://<machine>:<port>/data
GET     http://<machine>:<port>/data/:id
POST    http://<machine>:<port>/data
PUT     http://<machine>:<port>/data/:id
DELETE  http://<machine>:<port>/data/:id
```

