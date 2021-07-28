let input = document.querySelector("input");
let addBtn = document.querySelector("#btn-add");
let ul = document.querySelector("ul");
let empty = document.querySelector("#empty");

addBtn.onclick = function(e){
    e.preventDefault();
    const text =  input.value;
    if(text !== ""){
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeletebtn());
        ul.appendChild(li);
        input.value="";
        empty.style.display="none";
    }else{
        alert("You must enter something");
    }
    
}

function addDeletebtn(){
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.className = "btn-delete";

    deletebtn.addEventListener("click",(e)=>{
        const item = e.target.parentElement;
        ul.removeChild(item);
        const items = document.querySelectorAll("li");
        if(items.length === 0){
            empty.style.display="block";
        }
        
    });
    return deletebtn;
}