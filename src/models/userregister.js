const  mongoose  = require("mongoose");

const userRegister = new mongoose.Schema({
name :{
    type :String,
    required :true
},
email : {
    type :String,
    required :true,
    unique : true
},
phone : {
    type : Number,
    required : true,
    unique : true
},
pass : {
    type : String,
    required : true,
},
cpass : {
    type : String,
    required : true,
},
})

const Register = new mongoose.model("Register",userRegister); 
module.exports = Register;