// https://hub.docker.com/_/mongo
// https://www.mongodb.com/compatibility/docker

// 1. docker run --name mongodb -p 27017:27017 -v ./data:/data/db -d -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=user1234 mongo

// 2. https://www.mongodb.com/products/compass

// 3. postman desktop agent

const express = require('express');
const mongoose = require('mongoose');
const contactRouter = require('./routes/contact');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const connectionString = 'mongodb://user:user1234@localhost:27017/?authMechanism=DEFAULT';

async function main() {
    await mongoose.connect(connectionString);
}

main().catch(err => console.log(err));

app.use('/contact', contactRouter);

app.listen(4001, ()=>{
    console.log('The server is running!');
});
