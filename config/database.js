const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, {
            userNameUrlParser: true,
            useUnifiedTopology: true,
            useFrindAndModify: false,
            useCreateIndex: true,
        });

        console.log(`MongoDb Connect: ${Conn.connection.host}`);
    }   catch (err){
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB; 