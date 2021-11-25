function validar() {

  const input = document.querySelector('#input');
  const span = document.querySelector('span');

  if(input.value.length <= 5) {
    
    input.style.border = '3px solid red';
    span.innerText = 'sua senha precisa ter mais de 5 caracteres';

  } else {

    input.style.border = '3px solid green';
    span.innerText = '';

  }
}