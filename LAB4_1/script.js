const b=document.querySelectorAll(".b");
const w=document.querySelectorAll(".w");
console.log(w.length)

for(let i=0;i<w.length;i++){
    w[i].addEventListener('click',swit);
}
for(let i=0;i<b.length;i++){
    b[i].addEventListener('click',swit);
}

function swit(){
    for(let i=0;i<w.length;i++){
        if(w[i].className === "b"){
            w[i].className = "w";
            b[i].className = "b";
        }
        else if(w[i].className === "w"){
            w[i].className = "b";
            b[i].className = "w";
        }
    }
}