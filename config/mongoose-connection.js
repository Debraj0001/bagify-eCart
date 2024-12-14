const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config")

mongoose.connect(`${config.get("MONGODB_URI")}/bagify`)//getting this form development.json
    .then(() => {
        dbgr("connected to mongoDB");
    })
    .catch((err) => {
        dbgr("failed to connect mongoDB:", err);
    })

module.exports = mongoose.connection;