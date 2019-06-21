var ul =document.getElementById("list");
var li;

var addButton = document.getElementById('add');
addButton.addEventListener("click",addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click",removeItem);

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click",removeAllItem);

function addItem(){
    var input = document.getElementById("input");
    var item = input.value;
    var textnode = document.createTextNode(item)

    if ( item == ''){
        var para = document.createElement('p');
        var text = document.createTextNode("Enter your TODO ");
        para.appendChild(text);
        var element = document.getElementById("container");
        var child = document.getElementById("p1");
        element.insertBefore(para,child);
        setTimeout(() => {
            element.insertBefore(para,child).style.display = "none"
        }, 1000);
    }else{
        // create list
        li = document.createElement("li");
        // create checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute('id','check')

        // create label
        var label = document.createElement("label");

        // add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);  
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout(() => {
            li.className = "visual"
        }, 2000);
        
        input.value = "";
    }
}

function removeItem(){
li = ul.children;
for (let index = 0; index < li.length; index++) {
   while(li[index] && li[index].children[0].checked){
       ul.removeChild(li[index])
   }
    
}
}

function removeAllItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0]){
       ul.removeChild(li[index])
        }
        
    }
}