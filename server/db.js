const mongoose = require('mongoose');
const env = require('dotenv');
const path = require('path')
env.config({ path: './.env' });

const mongoURI = `mongodb+srv://raj24sahil:${process.env.MONGO_PASSWORD}@cluster0.j2ec5re.mongodb.net/inotebookdb`;

const connectToMongo = ()=> {

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },(error)=> {
        if (error) {
            console.log(error.message);
        } else {
            console.log("Conected to mongo cloud successfully");
        }
    });
    
}

module.exports = connectToMongo;