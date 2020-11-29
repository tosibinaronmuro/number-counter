let minus=document.getElementById('minus');
let neutral=document.getElementById('neutral');
let plus=document.getElementById('plus');

let dig=0
function mai( ){
    let num=document.getElementById('num');
    if (dig>=0||dig<=0){
        dig++
    }
    // return dig;
    num.textContent=dig;
    if(dig>0){
        num.style.color='green'
    }
    if(dig==0){
        num.style.color='blue'
    }
     
}
plus.addEventListener('click',mai)


 
function dec(){
    if (dig>=0||dig<=0){
        dig=0
    }
    // return dig;
    num.textContent=dig;
    if(dig==0){
        num.style.color='blue'
    }
    // num.textContent='0';
}
neutral.addEventListener('click',dec);

function maii( ){
    let num=document.getElementById('num');
    if (dig<=0||dig>=0){
        dig--
    }
    // return dig;
    num.textContent=dig;
    if(dig<0){
        num.style.color='red'
    }
    if(dig==0){
        num.style.color='blue'
    }
}
minus.addEventListener('click',maii)
