const button = document.querySelector(".button");
    const toast = document.querySelector(".toast");

    const showToast =()=>{
        toast.style.display="block";
        setTimeout(function(){
            toast.style.display="none";

        },2000)
    }

    button.addEventListener("click",showToast);