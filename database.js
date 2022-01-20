const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        //mongoose.connect("mongodb+srv://admin:M0j4m4t1!@twitcluster.r60ns.mongodb.net/twitDB?retryWrites=true&w=majority")
        mongoose.connect("mongodb://localhost:27017")
        .then(() => {
            console.log("Database connection successful!");
        })
        .catch(() => {
            console.log("Database connection error " + err);
        })
    }
}

module.exports = new Database();