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
  vedioElemnt.controls = true;
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
 const speed = vedioPredsent.playbackRate + 0.5;
 vedioPredsent.playbackRate =speed;
 //console.log(speed); //uncomment this line for see the speed of the vedio.
//  console.log(vedioPredsent.playbackRate); uncomment this line for see the current or default speed of the vedio.
 
}


const speedDownHandler = () => {
    const vedioPredsent = document.querySelector(".vedio");
    if (vedioPredsent == null) {
      return;
  };
    if(vedioPredsent <= 0.5){
      return;
    }
  const down = vedioPredsent.playbackRate - 0.3;
  vedioPredsent.playbackRate = down;
   console.log(down); //=>bug 
  
};




const volumeupHandler = () => {
    const vedioPredsent = document.querySelector(".vedio");
    if (vedioPredsent == null) {
      return;
  };
    if(vedioPredsent.volume =1){
      return;
    }
  const up = vedioPredsent.volume + 0.3 ;
  vedioPredsent.volume = up;
  console.log(up);
  
};



const volumedownHandler = () => {
    const vedioPredsent = document.querySelector(".vedio");
    if (vedioPredsent == null) {
      return;
  };
  if(vedioPredsent.volume = 0){
    return;
  }
const down = vedioPredsent.volume - 0.3 ;
vedioPredsent.volume = down;
console.log(down);

};




const repeatVedio = () => {
  const vedioPredsent = document.querySelector(".vedio");
  if (vedioPredsent == null) {
    return;
  }
  alert("vedio loop is started");

  vedioPredsent.loop = true;
};

speedUp.addEventListener("click", speedupHandler);
speedDown.addEventListener("click", speedDownHandler);
volumeUp.addEventListener("click", volumeupHandler);
volumeDown.addEventListener("click", volumedownHandler);
loopVedio.addEventListener("click", repeatVedio);
