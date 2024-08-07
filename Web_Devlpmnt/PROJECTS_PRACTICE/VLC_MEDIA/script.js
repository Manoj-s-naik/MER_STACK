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
  const isvedioAvl = document.querySelector(".vedio");
  if (isvedioAvl == null) {
    return;
};
isvedioAvl.playbackRate =2.0;
}





const speedDownHandler = () => {
    const isvedioAvl = document.querySelector(".vedio");
    if (isvedioAvl == null) {
      return;
  };
  isvedioAvl.playbackRate =0.5;
};




const volumeupHandler = () => {
  alert("i am clicked");
};
const volumedownHandler = () => {
  alert("i am clicked");
};

const repeatVedio = () => {
  const isvedioAvl = document.querySelector(".vedio");
  if (isvedioAvl == null) {
    return;
  }
  alert("vedio loop is started");

  isvedioAvl.loop = true;
};

speedUp.addEventListener("click", speedupHandler);
speedDown.addEventListener("click", speedDownHandler);
volumeUp.addEventListener("click", volumeupHandler);
volumeDown.addEventListener("click", volumedownHandler);
loopVedio.addEventListener("click", repeatVedio);
