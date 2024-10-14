let btn1 = document.getElementById('btn1')
let modal = document.getElementById('modal')
let btn2 = document.getElementById('btn2')
let opasity = document.getElementById('opasity')

btn1.addEventListener('click', () =>{
    modal.classList.remove('hidden')
    opasity.classList.remove('hidden')
})
btn2.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    opasity.classList.add('hidden')
})
opasity.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    opasity.classList.add('hidden')
})
document.addEventListener("keydown",function(e){
    if(e.key === "Escape") {
        modal.classList.add('hidden')
        opasity.classList.add('hidden')
    }
  });