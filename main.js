console.log("main.js active");

let space = " ";//spaces to add to lines
let twig = "";
let air = "";
let newLine = "\n"
let grow = document.getElementById('growButton');
let characterBox = document.getElementById("charInput");


//Listen for button click
grow.addEventListener("click", tree); 
characterBox.addEventListener("keypress", enterKey);
 

//Pressing Enter Runs Tree Function
function enterKey(event){
  if(event.keyCode == 13) {
    event.preventDefault();
    tree();
  }
}


function tree(){
  let height = document.getElementById("heightInput").value;
  let character = document.getElementById("charInput").value;
 

  if(height == "" || character == ""){
    alert("Enter both height and character.");
  } else {
    for (let i = 1; i <= heightInput.value; i += 1) {
      air = space.repeat(height-i);
      twig += air + character.repeat((i*2)-1) + newLine;  
    } 
      console.log(twig);
  }
}
  







    
    