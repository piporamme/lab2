let box=document.querySelector('div');
let root=true;
box.addEventListener('click',s1);
function s1(){
  box.innerHTML='<h1><b>What do you want man ?!!</b></h1>'+
  '<h1><b>WTF???????</b></h1>';
  box.removeEventListener('click',s1);
  box.addEventListener('click',s2);
}
function s2(){
  box.innerHTML="<h1><b>Don't click the button, pleaseeee</b></h1>"+
  "<h1><b>XXX</b></h1>";
  box.removeEventListener('click',s2);
  box.addEventListener('click',s1);
}



function s3(){
  const s3 = document.getElementById("3");
  alert("Don't click me System said 'what do you want man???'");
  s3.style.backgroundColor = "black";
  s3.style.color = "white";
  s3.onclick = function(){
      return false;
  }
}
function s4(){
  const s4 = document.getElementById("4");
  alert("Hey! don't click me System said 'what do you want man???'");
  s4.style.backgroundColor = "black";
  s4.style.color = "white";
  s4.onclick = function(){
      return false;
  }
}
function s5(){
  const s5 = document.getElementById("5");
  alert("Damnnnn,why always click me System said 'what do you want man???'");
  s5.style.backgroundColor = "black";
  s5.style.color = "white";
  s5.onclick = function(){
      return false;
  }
}
function s6(){
  const s6 = document.getElementById("6");
  alert("NOOOOO don't click me System said 'what do you want man???'");
  s6.style.backgroundColor = "black";
  s6.style.color = "white";
  s6.onclick = function(){
      return false;
  }
}