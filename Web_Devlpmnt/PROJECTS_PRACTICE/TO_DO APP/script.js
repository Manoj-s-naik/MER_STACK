const input = document.querySelector("input");
const btn = document.querySelector("button");
const ulElmt = document.querySelector("ul");

const addTask =()=>{
    const liVal = input.value;
    if(input.value === ""){
        return;
    }
    const liElmnt = document.createElement("li");
    liElmnt.textContent = liVal;
    ulElmt.appendChild(liElmnt);
    input.value ="";

    const updateBtn = document.createElement("button");
    updateBtn.style.backgroundColor='yellow';
    updateBtn.textContent="Update";
    liElmnt.appendChild(updateBtn);
    
    const upDate =()=>{
        const newLi = prompt("enter the task to update");
        liElmnt.textContent = newLi;
    }
    updateBtn.addEventListener("click",upDate);
    
    const delBtn = document.createElement("button");
    delBtn.style.backgroundColor='red';
    delBtn.textContent= 'Delete';
    liElmnt.appendChild(delBtn);

    const deletBtn =()=>{
        liElmnt.remove();
    }
    delBtn.addEventListener("click",deletBtn);


}
btn.addEventListener("click",addTask);