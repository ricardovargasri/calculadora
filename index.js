let items = document.querySelectorAll('.item');
let operators = document.querySelectorAll('.operadores');
let screen = document.querySelector('.display');
let firstNumberDisplay = document.querySelector('.firstNumber');
let sign = document.querySelector('.sign');
let lastNumberDisplay = document.querySelector('.lastNumber');
let especials = document.querySelectorAll('.especiales');
let arraiser = document.querySelector('#delete');

//variables
let operator = '';
let firstNumber = '';
let lastNumber = '';
let setOperator = true;



items.forEach((item) =>{
  

  item.addEventListener('click', ()=>{
    if(item.classList.contains('operadores')){
      if(firstNumber.length === 0){
        alert('no puedes empezar con un operador')
        window.location.reload();
    }
    else{
      firstNumber += item.innerHTML;
      firstNumberDisplay.innerHTML = firstNumber;
    }
  }
    else if(setOperator){
      firstNumber += item.innerHTML;
      firstNumberDisplay.innerHTML = firstNumber;
    }
    else{
      lastNumber += item.innerHTML;
      lastNumberDisplay.innerHTML = lastNumber
    }
  });
}
);

//Borrar numeros del primer operando
arraiser.addEventListener('click', () =>{
  if(setOperator){
    let currentContent = firstNumberDisplay.innerHTML;
    if(currentContent.length > 0){
      let newContent = currentContent.slice(0, -1);
      firstNumberDisplay.innerHTML = newContent;
    };
  }

  else{
    let currentContent = lastNumberDisplay.innerHTML;
    if(currentContent.length > 0){
      let newContent = currentContent.slice(0, -1);
      lastNumberDisplay.innerHTML = newContent;
  }
  };
});

 operators.forEach((operator) => {

  operator.addEventListener('click', ()=>{
    sign.innerHTML = operator.textContent;
    setOperator = false
  }
);
  });     


