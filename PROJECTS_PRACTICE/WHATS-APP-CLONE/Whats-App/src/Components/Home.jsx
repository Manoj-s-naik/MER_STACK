import React from "react";
import { storage } from "../../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

function Home() {
  const handleChange = (Obj)=>{
  const img = Obj.target.files[0];

  // address:--Creates a reference to a location in Firebase Storage where you want to store the file.
  const storageRef = ref(storage,"/profile" + Math.random());

  // storage task
  const uploadTask = uploadBytesResumable(storageRef,img);
  console.log("upload task");
  // Listens to changes in the upload process. You can attach event listeners for different stages,
  uploadTask.on("storage_changed",progressCB,errorCB,finishedCB);

  // upload
  function progressCB(data) {
    console.log("data is progressing",data);
    
  }

// if error
  function errorCB(err) {
    console.log("error occured",err);
    
  }
// on success
  function finishedCB() {
    console.log("successfully file uploaded");
    getDownloadURL(uploadTask.snapshot.ref).then(function (url){
      console.log("url",url);
      
    })
    
  }
  
  }
  return (
    <>
      <input type="file" onChange={handleChange} accept=".jpg, .jpeg, .png, image/*" />
    </>
  );
}

export default Home;


