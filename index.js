let buttons = document.querySelector('.buttons');
let inp = document.querySelector('.input-s');

const buttonLabels = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];


buttonLabels.forEach(l =>{
    let creator = document.createElement('button');
    creator.textContent=l;

    inp.textContent='';
    creator.addEventListener('click',()=>{
        if(creator.textContent != '=' )
        inp.textContent += creator.textContent;
    })

    buttons.appendChild(creator);
})


function add(first,  second){
    return parseInt(first) + parseInt(second) ;
}

function subtract(first,  second){
    return parseInt(first) - parseInt(second) ;
}


function multiply(first,  second){
    return parseInt(first) * parseInt(second) ;
}

function division(first,  second){
    return parseInt(first) / parseInt(second) ;
}