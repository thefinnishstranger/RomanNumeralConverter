//Get all the elements
const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("number");
const result = document.getElementById("output-text");
const outputContainer = document.getElementById("output")


const checkForValidInput = () => {
  if (inputValue.value === 0 || inputValue.value < 0) {
    result.textContent = "Please enter a number greater than or equal to 1";
    return false;
  } else if(inputValue.value > 3999) {
    result.textContent = "Please enter a number less than or equal to 3999";
    }else {
    return true;
    }
};

function converter() {

const num = parseInt(inputValue.value);

result.textContent = "";

if (inputValue.value === ""){
    outputContainer.classList.remove("hidden");
    result.textContent = "Please enter a valid number";
    return;
  }

if (!checkForValidInput(num)) {
  return;
}

 const romanNumerals = {
  M: 1000, 
  CM: 900, 
  D: 500, 
  CD: 400, 
  C: 100, 
  XC: 90, 
  L: 50, 
  XL: 40, 
  X: 10, 
  IX: 9, 
  V: 5, 
  IV: 4, 
  I: 1
  };

var str="";
let remainder = num;

for (var i in romanNumerals){
  let timesDivided = Math.floor(remainder / romanNumerals[i]);

  if (timesDivided >= 1) {
    remainder = remainder - (timesDivided * romanNumerals[i])
    str += i.repeat(timesDivided);
  }

}


addTextToResult(str);
}

function addTextToResult(str){

  if (str) {
  result.textContent = str;
  outputContainer.classList.remove("hidden");
  } else {
    outputContainer.classList.add("hidden");
  }

   
  
  
}



//Event Listener 

convertBtn.addEventListener("click", function(event) {
  event.preventDefault();
  converter();
});
