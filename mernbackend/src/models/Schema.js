const mongoose = require("mongoose");


const register_schema = new mongoose.Schema(
    {
        Name : {
            type : String,

        },

        LastName : {
            type : String,

        },

        Email : {
            type : String,
        },

        Phone : {
            type : Number,
        },


        Age : {
            type : Number,
        },

        Password : {
            type : String,
        },

        ConfirPassword : {
            type : String,

        },
        
    }
)


const Register = new mongoose.model("Delhi", register_schema);

 module.exports = Register;