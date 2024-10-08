const express = require("express");
const app = express();

function beforeFn(req, res, next) {
  console.log("before fn called");
  const length = Object.keys(req.body).length;
  console.log("lengthlength",length);
  if (length > 0 && req.body.name && req.body.userId) {
    const fullNameArry = req.body.name.split(" ");
    req.body.firstName = fullNameArry[0];
    req.body.lastName = fullNameArry[1];
    next();
  } else {
    res.status(400).json({
      message: "bad request",
    });
  }
}

function afterFn(req, res) {
  console.log("after fn called");
  console.log("req.body", req.body);
  res.status(200).json({
    message: "post created",
    body: req.body,
  });
}

// middleware
app.use(express.json());
app.post("/posts", beforeFn);
app.post("/posts", afterFn);

app.use(function(req,res,next){
  res.status(404).json({
    message : "page not found"
  })
})

app.listen(3000, function () {
  console.log("server running at port 3000 ");
});
