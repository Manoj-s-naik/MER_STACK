const express = require("express");
const app = express();
const fs = require("fs");
const content = fs.readFileSync("Posts.json", "utf-8");
const jsonPosts = JSON.parse(content);



const updatePost = (req,res)=>{
  try {
    const postid = params.postId;
    const postsArray = jsonPosts.posts;
    for(let i =0; i < jsonPosts.length; i++){
      if(postsArray[i].id == postid){
        
      }
    }

    
  } catch (err) {
    res.status(500).json({
      response: "something went wrong frm our side!! we will back soon",
    });
  }
  
}
const deletePost = (req,res)=>{
  try {
    const postid = params.postId;

  } catch (err) {
    res.status(500).json({
      response: "something went wrong frm our side!! we will back soon",
    });
  }

}

const getALLPostHandler = (req, res) => {
  try {
    console.log("Received get Request");
    res.status(200).json(jsonPosts);
  } catch (err) {
    res.status(500).json({
      response: "something went wrong frm our side!! we will back soon",
    });
  }
};

const getPostById = (req, res) => {
  try {
    const postid = req.params.postId;
    const postsArray = jsonPosts.posts;

    for (let i = 0; i < postsArray.length; i++) {
      if (postsArray[i].id == postid) {
        return res.status(200).json({
          post: postsArray[i],
        });
      }
    }
    res.status(404).json({
      post: "post not found",
    });
  } catch (err) {
    res.status(500).json({
      response: "something went wrong frm our side!! we will back soon",
    });
  }
};

const createPostById = (req, res) => {
  try {
    const postsArray = jsonPosts.posts;
    postsArray.push(req.body);
    const content = JSON.stringify({ posts: postsArray }, null, 2);
    fs.writeFileSync("posts.json", content, "utf-8");
    console.log("posts created and updated in posts.json", req.body);

    res.status(200).json({
      message: "post created",
    });
  } catch (err) {
    res.status(500).json({
      response: "something went wrong we will solve it",
    });
  }
};


// app.use(express.json());
// get all posts request
app.get("/posts", getALLPostHandler);
// get posts by id request
app.get("/posts/:postId", getPostById);
// post a posts by id request
app.post("/posts", createPostById);
// update a post 
app.patch("/posts/:postId",updatePost);
// delete post
app.delete("/posts/:postId",deletePost);

app.listen(3000, function () {
  console.log("server is running on 3000");
});
