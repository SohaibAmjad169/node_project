const mongoose = require("mongoose");

const userLogin = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    pass :{
     type:String,
     required : true,
    }
})

const Login = new mongoose.model("Login",userLogin);
module.exports = Login;