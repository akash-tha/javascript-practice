let input=document.querySelector('input[type="text"]')
let ul=document.querySelector('.list')

let movieInfo=[
    
];
input.addEventListener("keyup",(event)=>
{
console.log(event.keyCode);
if(event.keyCode===13)
{

    console.log(event.target.value)
    movieInfo.push({
    Name:event.target.value,
    watched:false,

})
event.target.value="";
function1()
}
})

function deleteI(Event)
{
    Event.target.parentElement.remove();
}
  function function1()
  {
    ul.innerHTML="";
    movieInfo.forEach((movie)=>
    {

    let li=document.createElement("li");
    li.classList.add("blocks");

    let input1=document.createElement("input");
    input1.type="checkbox";
    input1.checked=movie.watched;
    
    let label=document.createElement("label");
    label.innerText=movie.Name;
    let span1=document.createElement("span");
     span1.innerText="❌";

     span1.addEventListener("click",deleteI)

     li.append(input1,label,span1);
     ul.append(li);
    })
    
  }

  
  



    
    


