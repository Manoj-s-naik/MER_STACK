const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


app.use(cookieParser());

app.get("/", function (req,res){
    console.log("get request recieved");
    res.cookie("prevpage","home",{
        maxAge : 1000 *60 * 60 *24,
    })
    res.status(200).json({
        message : "received request on home page"
    })
})

app.get("/product",function (req,res){
    let messageStr = "";
    if(req.cookies && req.cookies.prevpage){
        console.log(req);
        console.log("cookies",req.cookies);
        
        messageStr = `you visited ${req.cookies.prevpage} page before`
    } else {
        messageStr = `no previous page found`
    }
    res.status(200).json({
        message : messageStr
    })
})

app.listen(3000 , function (){
    console.log("server is listening on port 3000");
})