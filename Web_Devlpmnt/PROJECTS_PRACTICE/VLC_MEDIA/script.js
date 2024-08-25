const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const loopVedio = document.querySelector("#loop");
const vedioBtn = document.querySelector("#vedioBtn");
const vedioInput = document.querySelector("#vedioInput");
const vedioPlayer = document.querySelector(".main");

const handleInput = () => {
  vedioInput.click();
};

const acceptinputHandler = (obj) => {
  const selecteVedio = obj.target.files[0];
  // console.log(selecteVedio);

  const link = URL.createObjectURL(selecteVedio);
  const vedioElemnt = document.createElement("video");
  vedioElemnt.src = link;
  vedioElemnt.setAttribute("class", "vedio");
  vedioElemnt.play();
  vedioElemnt.controls = true;// for check bugs easy controlls
  vedioPlayer.appendChild(vedioElemnt);
};

vedioBtn.addEventListener("click", handleInput);
vedioInput.addEventListener("change", acceptinputHandler);



const speedupHandler = () => {
  const vedioPredsent = document.querySelector(".vedio");
  if (vedioPredsent == null) {
    return;
};
  
 if(vedioPredsent.playbackRate > 3){
  return;
 }
 const increasedSpeed = vedioPredsent.playbackRate + 0.5;
 vedioPredsent.playbackRate = increasedSpeed;
//  console.log(increasedSpeed); //uncomment this line for see the speed of the vedio.
//  console.log(vedioPredsent.playbackRate); uncomment this line for see the current or default speed of the vedio.
const currentSpeed = vedioPredsent.playbackRate;
 showToast(currentSpeed + "X");
}


const speedDownHandler = () => {
    const vedioPredsent = document.querySelector(".vedio");
    if (vedioPredsent == null) {
      return;
  };
    if(vedioPredsent <= 0){
      return;
    }
  const decreasedSpeed = vedioPredsent.playbackRate - 0.5;
  vedioPredsent.playbackRate = decreasedSpeed;
   //console.log(decreasedSpeed); //=>bug 
   const currentSpeed = vedioPredsent.playbackRate;
   showToast(currentSpeed + "X");
};




const volumeupHandler = () => {
    const vedioPredsent = document.querySelector(".vedio");
    if (vedioPredsent == null) {
      return;
  };
    if(vedioPredsent.volume >= 0.99){
      return;
    }
  const increasedVolume = vedioPredsent.volume + 0.1;
  vedioPredsent.volume = increasedVolume;
  //console.log(increasedVolume);

  const percentage = (increasedVolume * 100) + "%";
  showToast(percentage);
  
};



const volumedownHandler = () => {
    const vedioPredsent = document.querySelector(".vedio");
    if (vedioPredsent == null) {
      return;
  };
  if(vedioPredsent.volume <= 0.1){
    videoPresent.volume = 0;
    return;
  }
const decreasedVolume = vedioPredsent.volume - 0.1;
vedioPredsent.volume = decreasedVolume;
//console.log(decreasedVolume);
const percentage = (decreasedVolume * 100) + "%";
  showToast(percentage);

};




const repeatVedio = () => {
  const vedioPredsent = document.querySelector(".vedio");
  if (vedioPredsent == null) {
    return;
  }
  vedioPredsent.loop = true;
  alert("loop started")
};



speedUp.addEventListener("click", speedupHandler);
speedDown.addEventListener("click", speedDownHandler);
volumeUp.addEventListener("click", volumeupHandler);
volumeDown.addEventListener("click", volumedownHandler);
loopVedio.addEventListener("click", repeatVedio);


const toast = document.querySelector(".toast");


const showToast = (message)=>{
  toast.textContent= message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
    
  }, 1000);
}


