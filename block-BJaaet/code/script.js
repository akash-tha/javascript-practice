let input=document.querySelector('input[type="text"]')
let ul=document.querySelector('.list')
let buttons=document.querySelector('.buttons')
let active=document.querySelector('.Active')
let completed=document.querySelector('.Completed')
let showall=document.querySelector('.ShowAll')
let clearall=document.querySelector('.ClearAll')
let error=document.querySelector('.errormsg')


let errorMsg="";


let movieInfo=JSON.parse(localStorage.getItem("record")) || [];

function1(movieInfo,ul)

input.addEventListener("keyup",(event)=>
{
  if(event.target.value==="")
  {
    errorMsg="input field can't be left blank";
    error.innerText=errorMsg;
  }
  else if(event.keyCode===13)
{
    errorMsg="";
    error.innerText=errorMsg;
    movieInfo.push({
    Name:event.target.value,
    watched:false,
})
function1(movieInfo,ul)
event.target.value="";
localStorage.setItem("record",JSON.stringify(movieInfo))
}
})



function toggle(event)
  {
    let id=event.target.dataset.id;
    movieInfo[id].watched=!movieInfo[id].watched;
    localStorage.setItem("record",JSON.stringify(movieInfo));
    function1(movieInfo,ul);
  }

  function function1(movieInfo,ul)
  {
    ul.innerHTML="";
    movieInfo.forEach((movie,index)=>
    {
    let li=document.createElement("li");
    li.classList.add("blocks");
    let input1=document.createElement("input");
    input1.type="checkbox";
    input1.addEventListener("input",toggle);
    input1.setAttribute("data-id",index)
    input1.checked=movie.watched;
    input1.classList.add("checkboxx");
    let label=document.createElement("label");
    label.innerText=movie.Name;
    let span1=document.createElement("span");
    span1.innerText="❌";
    span1.addEventListener("click",(event)=>
     {
      movieInfo.splice(index,1);
      localStorage.setItem("record",JSON.stringify(movieInfo))
      event.target.parentElement.remove();
     })
       li.append(input1,label,span1);
       ul.append(li);
    })
  }

 

  active.addEventListener("click", ()=>
  {
    let a=movieInfo.filter((movie)=>!movie.watched)
    function1(a,ul);
  })
  completed.addEventListener("click", ()=>
  {
    let b=movieInfo.filter((movie)=>movie.watched)
    function1(b,ul);
  })
  showall.addEventListener("click", ()=>
  {
    
    function1(movieInfo,ul);
  })
  clearall.addEventListener("click", ()=>
  {
    
    movieInfo=[];
    function1(movieInfo,ul);
  })
  

  
  



    
    


