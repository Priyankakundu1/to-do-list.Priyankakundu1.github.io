const inputBox=document.getElementById("input-box");
const list_Container=document.getElementById("listcontainer");
function addTask(){
   if(inputBox.value === ''){
    alert("You must write something!");
   }
   else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    list_Container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   inputBox.value= "";
   saveData();
}

list_Container.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();