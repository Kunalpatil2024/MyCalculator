const display = document.getElementById('display');

function appendValue(value){
    if(display.textContent == "0" || display.textContent == Error){
        display.textContent = value;

    }
    else{
        display.textContent += value;
    }

}


function clearDisplay(){
    display.textContent = '0';
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch (e) {
    display.textContent = 'Error';
  }
}