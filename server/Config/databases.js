const mongoose=require('mongoose');
require('dotenv').config();

exports.dbconnect=()=>{
    mongoose.connect("mongodb+srv://rashup198:bhavya321@cluster0.skf9s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true
     }).then(() => {
        console.log('Successfully connected to the database');
     }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit
        });
    }