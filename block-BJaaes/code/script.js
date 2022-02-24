

function doescontainaNumber(str)
{
    return str.split('').some(e=>Number(e))
}



let form=document.querySelector("form")

errorMsg="";

function function1(Event)
{
    Event.preventDefault();

    let name=Event.target.elements.name;
    let email=Event.target.elements.email;
    let password=Event.target.elements.password;
    let confirmpassword=Event.target.elements.confirmpassword;


    function check(str)
    {
        if(str.value==="")
        {
            errorMsg="value can't be left blank";
            str.classList.add("error");
            str.classList.remove("success");
        }
       
        else
        {
              errorMsg="";
              str.classList.add("success");
              str.classList.remove("error");
        }
        str.nextElementSibling.innerText=errorMsg;
 }

     check(name);
     check(email);

     if(password.value!==confirmpassword.value)
     {
        errorMsg="password mismatch";
        password.classList.add("error");
        password.classList.remove("success");
     }
     else if(!doescontainaNumber(password.value))
    {
        errorMsg="password must contain a numeric value";
        password.classList.add("error");
        password.classList.remove("success");


    }
     else
     {
        errorMsg="";
        password.classList.add("success");
        password.classList.remove("error");

     }
     confirmpassword.nextElementSibling.innerText=errorMsg;
     console.log(password.value);
     console.log(confirmpassword.value);

   

}


form.addEventListener("submit",function1)
