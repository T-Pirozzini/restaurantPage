console.log('hello there');

const main = document.querySelector('#content');

const menu = document.createElement('div');
menu.textContent = 'What would you like to order?';
menu.style.color = "blue";
menu.style.backgroundColor = 'lightgreen';
main.appendChild(menu);