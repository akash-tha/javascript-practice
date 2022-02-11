

let form =document.querySelector("form");


function doescontainaNumber(str)
{
    return str.split('').some(e=>Number(e))
}

function check(str)
    {
        if(str.value==="")
        {
            errorMsg="name can't be left blank";
            str.classList.add("error");
        }
        
        else
        {
              errorMsg="";
            str.classList.add("success");
        }
        str.nextElementSibling.innerText=errorMsg;
        

    }

let errorMsg="";

function accessValue(event)
{
    event.preventDefault();
    let username=event.target.elements.username;
    let user=event.target.elements.name;
    let useremail=event.target.elements.email;
    let userage=event.target.elements.Age;


    if(username.value==="")
    {
        errorMsg="username can't be left blank";
        username.classList.add("error");

    }
    else if(!doescontainaNumber(username.value))
    {
        errorMsg="username must contain a numeric value";
        username.classList.add("error");

    }
    else
    {
          errorMsg="";
        username.classList.add("success");
    }
    
    username.nextElementSibling.innerText=errorMsg;
    check(user);
    check(useremail);
    check(userage);
       
}

form.addEventListener("submit",accessValue);