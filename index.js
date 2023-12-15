let items = document.querySelectorAll('.item');
let operators = document.querySelectorAll('.operadores');
let screen = document.querySelector('.display');
let firstNumberDisplay = document.querySelector('.firstNumber');
let sign = document.querySelector('.sign');
let lastNumberDisplay = document.querySelector('.lastNumber');
let especials = document.querySelectorAll('.especiales');
let arraiser = document.querySelector('#delete');
let igual = document.querySelector('#equals');

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
  }; 
}

operators.forEach(operator => operator.addEventListener('click', ()=> handleOperator(operator.innerHTML)))

function handleNumber(item){
  if(setOperator === false){
    firstNumber += item
    firstNumberDisplay.innerHTML = firstNumber;
    }
    else{
      lastNumber += item;
      lastNumberDisplay.innerHTML = lastNumber;
      console.log(firstNumber)
      console.log(typeof(simbolo));
      console.log(lastNumber);
      igual.addEventListener('click', ()=>{
        if(simbolo === '+'){
          sign.innerHTML = '';
          lastNumberDisplay.innerHTML = '';
          let resultado = parseInt(firstNumber) + parseInt(lastNumber);
          firstNumberDisplay.innerHTML = resultado;
      }else if(simbolo === '-'){
        sign.innerHTML = '';
          lastNumberDisplay.innerHTML = '';
          let resultado = parseInt(firstNumber) - parseInt(lastNumber);
          firstNumberDisplay.innerHTML = resultado;
      }else if(simbolo === 'x'){
        sign.innerHTML = '';
          lastNumberDisplay.innerHTML = '';
          let resultado = parseInt(firstNumber) * parseInt(lastNumber);
          firstNumberDisplay.innerHTML = resultado;
      }else if(simbolo === '/'){
        sign.innerHTML = '';
          lastNumberDisplay.innerHTML = '';
          let resultado = parseInt(firstNumber) / parseInt(lastNumber);
          firstNumberDisplay.innerHTML = resultado;
      }
      })
      
    }
}
items.forEach(item => item.addEventListener('click', ()=> handleNumber(item.innerHTML)))


 


