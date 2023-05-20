let buttons = document.querySelector('.buttons');

const buttonLabels = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];


buttonLabels.forEach(l =>{
    let creator = document.createElement('button');
    creator.textContent=l;
    buttons.appendChild(creator);
})