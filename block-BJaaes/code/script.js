let form = document.querySelector('form')

const doesContainNumber = (str) => str.split('').some(e=>Number(e));

const validEmail = (str)=> str.includes('@');

const checkIfAllNumber = (str)=> str.split('').every(e=>Number(e))

const validLength= (str,len)=> {
    console.log(str,len)
    if(str.length>=len)
        return true;
    else 
        return false;
}

let errorMessage = {};

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name];
    elm.classList.add("error");
    elm.classList.remove("success");
}

function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    elm.classList.add("success");
    elm.classList.remove("error");
}

function checkForBlank(str){
    if(str.value===""){
        errorMessage[str.name]= `${str.name} can't be blank`;
        displayError(str.name)
    } else {
        errorMessage[str.name] = '';
        displaySuccess(str.name)
    }
}


function submitHandler(event)
{
    event.preventDefault();
    let name=event.target.elements.name;
    let email=event.target.elements.email;
    let phone = event.target.elements.phone;
    let password=event.target.elements.password;
    let confirmpassword=event.target.elements.confirmpassword;


    //Check if Name is blank.
    checkForBlank(name);

    //Check if Email is blank
    checkForBlank(email);

    //Check if Passowrd is blank
    checkForBlank(password);

    //Check if confirm password is blank
    checkForBlank(confirmpassword)

    //Name can't be numbers
    console.dir(name)
    if(doesContainNumber(name.value)){
        //console.log('name contain a number')
        errorMessage.name="Name can't have numbers";
        displayError('name')
    }

    //Email should contain symbol '@'
    if(!validEmail(email.value)){
        errorMessage.email = "Not a valid email";
        displayError('email')
    }
    //Email must be atleast 6 characters
    if(!validLength(email.value,6)){
        errorMessage.email ="Email can't be less than 6 chars";
        displayError('email')
    }

     //Phone number can only be a number
     if(!checkIfAllNumber(phone.value)){
        errorMessage.phone ="Phone can only be numbers";
        displayError('phone')
    }
    
    //Password should match confirmPassword
     if(password.value!==confirmpassword.value)
     {
        errorMessage.password="password mismatch";
        displayError('password')
     }

     //Password Must contain a number
    if(!doesContainNumber(password.value)){
        errorMessage.password="password must contain a numeric value";
        displayError('password')
    } else{
        displaySuccess('password')
     }
}

form.addEventListener("submit",submitHandler)
