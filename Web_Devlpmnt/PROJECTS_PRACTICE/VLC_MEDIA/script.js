const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const loopVedio = document.querySelector("#loop");
const vedioBtn = document.querySelector("#vedioBtn");
const vedioInput = document.querySelector("#vedioInput");
const vedioPlayer = document.querySelector(".main");


const speedupHandler =()=>{
    alert("i am clicked");
}

const handleInput =()=>{
    vedioInput.click();
}

const acceptinputHandler =(obj)=>{
    const selecteVedio = obj.target.files[0];
    console.log(selecteVedio);
    
    const link = URL.createObjectURL(selecteVedio);
    const vedioElemnt = document.createElement("video");
    vedioElemnt.src = link;
    vedioElemnt.setAttribute("class","vedio");
    vedioElemnt.play();
    vedioPlayer.appendChild(vedioElemnt);
    
}


const repeatVedio =()=>{
    vedioElemnt.loop = true;
    // alert("its work");
}
loopVedio.addEventListener("click",repeatVedio)




speedUp.addEventListener("click",speedupHandler);

vedioBtn.addEventListener("click",handleInput);

vedioInput.addEventListener("change",acceptinputHandler);

