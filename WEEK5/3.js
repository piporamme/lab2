let body = document.body;
let button= document.querySelector('button');
let m1= document.querySelector('.m1');
let m2=document.querySelector('.m2');
let mode = true;
button.addEventListener('click', () => {
    if(mode){
        body.classList.toggle('dark-mode')
        m1.innerHTML="GOOD NIGHT"
        m2.innerHTML="This is night time"
        mode=false
    }
    else {
        body.classList.toggle('dark-mode')
        m1.innerHTML="GOOD MORNING"
        m2.innerHTML="This is day time"
        mode=true
    }
});