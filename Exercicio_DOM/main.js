const form = document.getElementById('form-exercice')
const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const message = document.querySelector('#message');

function hideMessage(){
  message.style.display = 'none';
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  if(firstNumber.value >= secondNumber.value){
    message.innerHTML = 'Envio inválido';
    message.style.display = 'block';
    message.style.backgroundColor = 'red';
    firstNumber.value = '';
    secondNumber.value = '';
    setTimeout(hideMessage,6000);
  } else{
    message.innerHTML = 'Envio válido';
    message.style.display = 'block';
    message.style.backgroundColor = 'green';
    firstNumber.value = '';
    secondNumber.value = '';
    setTimeout(hideMessage,6000);
  }
})
