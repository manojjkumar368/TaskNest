
    var h1 = document.getElementById("list-container");
    var ul=document.getElementById("text-input");
    function add(){
        if(ul.value!=""){
        var listitem=document.createElement("li");
        
         listitem.innerHTML=ul.value+"<BUTTON onclick='deleteit(event)'>Remove</BUTTON>";  

        h1.append(listitem)
        }
        else{
            alert("Enter the Task")
        }
    }
    function deleteit(event) {
        
       event.target.parentElement.remove()
    }
    
