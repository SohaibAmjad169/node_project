const express = require('express');
const app = express();
require("./db/connection");
const Register =  require("./models/userregister");
const Login =  require("./models/userlogin");
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 8282;

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("views", templatePath);
app.set("view engine", "hbs");  
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/registration",(req,res)=>{
    res.render("registration");
})
app.post("/registration",async(req,res)=>{
    try{
     const pass = req.body.pass;
     const cpass = req.body.cpass;

     if(pass===cpass){
     
     const employeRegister = new Register({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        pass : req.body.pass,
        cpass :req.body.cpass
     })
    const employerRegister =await employeRegister.save();
    res.status(201).render("index");
     }else{
        res.send("Password and Confirm Password not Match")
     }

    }
    catch(err){
        res.status(404).send(err)
    }
})

app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/login",async(req,res)=>{
    try{
         const userLogin = new Login({
            email : req.body.email,
            pass : req.body.pass,
         })
         const Login1 = await userLogin.save();
         res.status(201).render("index");
    }
    catch(err){
        res.status(404).send("Enter correct Details");
    }
})
app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})