const   mongoose = require('mongoose'),
        URI      = 'mongodb://e-commerce-website:e-commerce-website@cluster0-shard-00-00-cvitp.mongodb.net:27017,cluster0-shard-00-01-cvitp.mongodb.net:27017,cluster0-shard-00-02-cvitp.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority;'

// Production Database
const connectDB = async() =>{
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    console.log(`MongoDB database connected succesfully!`);
};

module.exports = connectDB;