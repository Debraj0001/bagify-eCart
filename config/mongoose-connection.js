const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config")
const dotenv = require('dotenv')
dotenv.config();

// console.log(process.env.MONGODB_URI);
// console.log(process.env.JWT_KEY);
// mongoose.connect(`${(process.env.MONGODB_URI)}`)//getting this form development.json
//     .then(() => {
//         dbgr("connected to mongoDB");
//     })
//     .catch((err) => {
//         dbgr("failed to connect mongoDB:", err);

//     })


// module.exports = mongoose.connection;

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI , {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        console.log('MongoDB connected');
        
    }catch(err){
        console.log(err.message);
        console.log("Error occured while connecting with databases")
        process.exit(1);
        
    }
};
module.exports = connectDB;
