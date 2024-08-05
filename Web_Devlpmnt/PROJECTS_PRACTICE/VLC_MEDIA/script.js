const volume = document.querySelector(".menu-btn");
const ul = document.querySelector(".menu-items");
console.log(volume);

const showMenu = () => {
    ul.style.display = "block";
}
volume.addEventListener("click", showMenu);
