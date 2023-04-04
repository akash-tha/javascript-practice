let boxes = document.querySelector('.boxes')

for(let i=1;i<=500;i++){
  let box = document.createElement('div');
  let randomNumber = Math.floor((Math.random() * 500) + 1);
  let randomColor = Math.floor(Math.random()*16777215).toString(16)
  box.classList.add('box');
  box.innerText = randomNumber;
  box.style.backgroundColor = '#'+randomColor;
  boxes.append(box)

  box.addEventListener('mousemove',function(){
    let randomNumber = Math.floor((Math.random() * 500) + 1);
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    box.innerText = randomNumber;
    box.style.backgroundColor = '#'+randomColor;
  })
}

