const nav = document.getElementById('nav-container');
const modal = document.getElementById('modal-container');
const burger = document.getElementById('burger');
const exit = document.getElementById('exit');
const signup = document.getElementById('signup');
const close = document.getElementById('close');

function signupListener() {
  modal.classList.add('show');
}

function closeListener() {
  modal.classList.remove('show');
}

function burgerListener() {
  document.body.classList.toggle('shownav');
  exit.classList.add('show');
  burger.classList.remove('show');
}

function exitListener() {
  document.body.classList.toggle('shownav');
  burger.classList.add('show');
  exit.classList.remove('show');
}

//event listeners
signup.addEventListener('click', signupListener);
close.addEventListener('click', closeListener);
burger.addEventListener('click', burgerListener);
exit.addEventListener('click', exitListener);
