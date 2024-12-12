const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/readFileContent", function (req, res) {
  try {
    const fileContent = fs.readFileSync("./fileExample.txt","utf-8");
    console.log("file content read completed");
    console.log(fileContent);
    
    return res.status(200).json({
      content : fileContent
    });
  } catch (er) {
    return res.status(500).json({
      message: "error we will fix this",
      error: er.message,
    });
  }
});

app.listen(3000, function () {
  console.log("server listnening on port 3000");
});
