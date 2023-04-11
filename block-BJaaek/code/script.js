let display = document.querySelector('.display')

//let digitButtons = document.querySelector('')

//display.innerHTML = ''

const digit1 = document.querySelector('.one')
const digit2 = document.querySelector('.two')
const digit3 = document.querySelector('.three')
const digit4 = document.querySelector('.four')
const digit5 = document.querySelector('.five')
const digit6 = document.querySelector('.six')
const digit7 = document.querySelector('.seven')
const digit8 = document.querySelector('.eight')
const digit9 = document.querySelector('.nine')
const digit0 = document.querySelector('.zero')

const dot = document.querySelector('dot')
const multiply = document.querySelector('.multiply')
const addition = document.querySelector('.addition')
const substraction = document.querySelector('.subtraction')
const division = document.querySelector('.devide')
const clear = document.querySelector('.clear')
const equalsto = document.querySelector('.equalsto')

function digitsHandler(event){
  //console.dir(event.target.innerText)
  const currentValue = display.innerHTML.replace("\n","").replace("\n","").trim();
  console.log({currentValue})
  let newValue;
  if(currentValue==='0'){
    console.log('matched')
    newValue = event.target.innerText;
  } else{
    newValue = currentValue+''+event.target.innerText;
  }
  display.innerHTML = newValue;
  console.log({newValue})
}

function operationHandler(event){
  console.log('operation handler')
  const currentValue = display.innerHTML.replace("\n","").replace("\n","").trim();
  console.log({currentValue, count: currentValue.split('+').length, text: event.target.innerText})
  let newValue;
  //check the operation type and accordingly calculate result
  if(currentValue.split('+').length===2){
    console.log({type: 'adddition', val1:Number(currentValue.split('+')[0]), val2: Number(currentValue.split('+')[1])})
    newValue = Number(currentValue.split('+')[0]) + Number(currentValue.split('+')[1]);
    console.log(newValue);
  } else if (currentValue.split('-').length==2){
    console.log({type: 'substract', val1:Number(currentValue.split('-')[0]), val2: Number(currentValue.split('-')[1])})
    newValue = Number(currentValue.split('-')[0])-Number(currentValue.split('-')[1])
  } else if(currentValue.split('*').length==2){
    newValue = Number(currentValue.split('*')[0])*Number(currentValue.split('*')[1])
  } else if(currentValue.split('%').length==2){
    newValue = Number(currentValue.split('%')[0])/Number(currentValue.split('%')[1])
  } else {
    newValue = currentValue;
  }
  if(event.target.innerText!=='='){
    newValue = newValue+''+event.target.innerText;
  }
  display.innerHTML = newValue;
  console.log({newValue})
}

function resetHandler(event){
  display.innerHTML = 0;
}



digit0.addEventListener('click', digitsHandler)
digit1.addEventListener('click', digitsHandler)
digit2.addEventListener('click', digitsHandler)
digit3.addEventListener('click', digitsHandler)
digit4.addEventListener('click', digitsHandler)
digit5.addEventListener('click', digitsHandler)
digit6.addEventListener('click', digitsHandler)
digit7.addEventListener('click', digitsHandler)
digit8.addEventListener('click', digitsHandler)
digit9.addEventListener('click', digitsHandler)

addition.addEventListener('click', operationHandler);
substraction.addEventListener('click', operationHandler);
multiply.addEventListener('click', operationHandler);
division.addEventListener('click', operationHandler);
equalsto.addEventListener('click', operationHandler);

clear.addEventListener('click', resetHandler);

