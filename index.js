let items = document.querySelectorAll('.item');
let operators = document.querySelectorAll('.operadores');
let screen = document.querySelector('.display');
let firstNumberDisplay = document.querySelector('.firstNumber');
let lastNumberDisplay = document.querySelector('.lasstNumber');
let especials = document.querySelectorAll('.especiales');
let arraiser = document.querySelector('#delete');

//variables
let operator = '';
let firstNumber = '';
let lasstNumber = '';
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
  else{
    firstNumber += item.innerHTML;
    firstNumberDisplay.innerHTML = firstNumber;
  }

  });
}
);

arraiser.addEventListener('click', () =>{
  let currentContent = firstNumberDisplay.innerHTML;

  if(currentContent.length > 0){
    let newContent = currentContent.slice(0, -1);
    firstNumberDisplay.innerHTML = newContent;
  };
}); 