const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const util = require("util");
const promisify = util.promisify;

const promisdiedJWTsign = promisify(jwt.sign);
const promisdiedJWTverify = promisify(jwt.verify);

const SECRET_KEY = "sslownslcfoew";

app.use(cookieParser());

app.get("/sign", async function (req,res){
    const authToken = await promisdiedJWTsign({"payload": "dmaoiwezxnkaj"},SECRET_KEY);
    res.cookie("jwt",authToken,{
        maxAge: 1000*60*60*24,
        httpOnly:true,
    })
    res.status(200).json({
        message : "signed the jwt and sending it in the cookie"
    })
})

app.get("/verify",async function (req,res){
    if(req.cookies && req.cookies.jwt){
        const authToken = req.cookies.jwt;
        const unlockedToken = await promisdiedJWTverify(authToken,SECRET_KEY);
        res.status(200).json({
            message : "jwt token is varified",
            "unlockedToken" : unlockedToken
        }) 
    } else {
        res.status(400).json({
            message: 'jwt token  not found'
        })
    }
  
})
















 

app.listen(3000, function (){
    console.log("server is listnening to port 3000");
})