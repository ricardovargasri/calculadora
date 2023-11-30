
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
});
  
