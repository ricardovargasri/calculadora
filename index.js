let items = document.querySelectorAll('.item');
let operators = document.querySelectorAll('.operadores');
let screen = document.querySelector('.display');
let firstNumberDisplay = document.querySelector('.firstNumber');
let lastNumberDisplay = document.querySelector('.lasstNumber');

//variables
let operator = '';
let firstNumber = '';
let lasstNumber = '';

//y si todos fuera items con su respectiva subclase? estableciendo sus
//respectivos if, eslse if sea que se le de click a uno u otro?
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
});


















/* 
document.addEventListener('DOMContentLoaded', function() {
  //TECLAS DE LA CALCULADORA

  let display = document.querySelector('.display');
  let reload = document.querySelector('#reload');
  let deleteButton = document.querySelector('#delete');
  let uno = document.querySelector('#uno');
  let dos = document.querySelector('#dos');
  let tres = document.querySelector('#tres');
  let cuatro = document.querySelector('#cuatro');
  let cinco = document.querySelector('#cinco');
  let seis = document.querySelector('#seis');
  let siete = document.querySelector('#siete');
  let ocho = document.querySelector('#ocho');
  let nueve = document.querySelector('#nueve');
  let cero = document.querySelector('#cero');
  let divide = document.querySelector('#divide');
  let multiply = document.querySelector('#multiply');
  let add = document.querySelector('#add');
  let decimal = document.querySelector('#decimal');
  let equals = document.querySelector('#equals');
  let menos = document.querySelector('#menos');

  //EVENTOS
  reload.addEventListener('click', ()=> window.location.reload());
  deleteButton.addEventListener('click', ()=>{
    newNumber = display.textContent.slice(0, -1);
    display.textContent = newNumber;
  })
  //numbers
  uno.addEventListener('click', ()=> display.textContent = display.textContent + uno.innerHTML);
  dos.addEventListener('click', ()=> display.textContent = display.textContent + dos.innerHTML);
  tres.addEventListener('click', ()=> display.textContent = display.textContent + tres.innerHTML);
  cuatro.addEventListener('click', ()=> display.textContent = display.textContent + cuatro.innerHTML);
  cinco.addEventListener('click', ()=> display.textContent = display.textContent + cinco.innerHTML);
  seis.addEventListener('click', ()=> display.textContent = display.textContent + seis.innerHTML);
  siete.addEventListener('click', ()=> display.textContent = display.textContent + siete.innerHTML);
  ocho.addEventListener('click', ()=> display.textContent = display.textContent + ocho.innerHTML);
  nueve.addEventListener('click', ()=> display.textContent = display.textContent + nueve.innerHTML);
  cero.addEventListener('click', ()=> display.textContent = display.textContent + cero.innerHTML);
}); */
  
