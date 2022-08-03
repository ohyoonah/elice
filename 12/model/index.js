const mongoose = require('mongoose');
const userSchema = require('./User');

async function main(){
    const connectionString = 'mongodb://user:user1234@localhost:27017/?authMechanism=DEFAULT';
    await mongoose.connect(connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'elice',
            //autoIndex: false,
        }).then(() => {
            console.log('Connected to the MongoDB!');
        });
}

main().catch(err=>console.error(err));

module.exports = {userSchema};