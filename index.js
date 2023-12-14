let items = document.querySelectorAll('.item');
let operators = document.querySelectorAll('.operadores');
let screen = document.querySelector('.display');
let firstNumberDisplay = document.querySelector('.firstNumber');
let sign = document.querySelector('.sign');
let lastNumberDisplay = document.querySelector('.lastNumber');
let especials = document.querySelectorAll('.especiales');
let arraiser = document.querySelector('#delete');

//variables
let simbolo = '';
let firstNumber = '';
let lastNumber = '';
let setOperator = false;

function handleOperator(operator){
  if(firstNumber.length === 0){
    alert('no puedes iniciar con un simbolo')
    window.location.reload();
  }
  else if(!setOperator){
   setOperator = true;
   simbolo += operator;
   sign.innerHTML = simbolo;
    operators.forEach(op => op.removeEventListener('click'));
  }; 
}

operators.forEach(operator => operator.addEventListener('click', ()=> handleOperator(operator.innerHTML)))

items.forEach(item => item.addEventListener('click', ()=>{
   if(setOperator == false){
    firstNumber += item.innerHTML;
    console.log(firstNumber.length);
    firstNumberDisplay.innerHTML = firstNumber;
    }
    else{
      lastNumber += item.innerHTML;
      lastNumberDisplay.innerHTML = lastNumber;
      
    }
  
}) 
);
 


