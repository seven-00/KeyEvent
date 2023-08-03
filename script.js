let Keycode = document.querySelector('.keycode')
let KeyEvent = document.querySelector("#val1")
let KeyLocation = document.querySelector("#val2")
let codekey=document.querySelector("#val3")
let whichkey=document.querySelector("#val4")
let keydump=document.querySelector('#val5')
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const button = document.querySelector(".container")


button.addEventListener("click", () => {
  sun.classList.toggle("visible")
  moon.classList.toggle("visible")
})


document.body.addEventListener("keydown",(e)=>
{

    Keycode.textContent= e.keyCode
    KeyEvent.textContent= e.key
    codekey.textContent=e.code
    whichkey.textContent=e.keyCode
    KeyLocation.textContent=eventLocation(e)
    keydump.textContent=`
KeyCode : ${e.keyCode}                 
event.key : ${e.key}
code : ${e.code}
location : ${eventLocation(e)}
event.whichkey : ${e.keyCode}
`


})
function eventLocation(e) {
    if(e.location === 0)
    {
        return "general keys"

    }
    else if(e.location === 1)
    {
        return "left side modifier key"

    }
    else
    {
        return "Right side modifier key"
    }
    
}
document.body.addEventListener("click",()=>
{
    document.body.classList.toggle("dark-mode");
})

