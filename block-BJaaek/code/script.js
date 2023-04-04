let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');



firstBox.addEventListener('click', function(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  firstBox.style.backgroundColor = '#'+randomColor;
})

secondBox.addEventListener('mousemove', function(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  secondBox.style.backgroundColor = '#'+randomColor;
})