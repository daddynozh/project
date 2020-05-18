
var list = document.getElementById('button-top');
var aelement    = document.createElement('a');
aelement.className = 'btn waves-effect waves-purple';
aelement.href = '#top';
aelement.title = 'к навигации';
aelement.id = "jstext";
aelement.appendChild(document.createTextNode('Вверх'));
list.appendChild(aelement);

const myButtonClick = document.getElementById('jstext');
let AddNewElementWithText = () => {
    const newElement = document.createElement('div');
    newElement.innerText = 'How did i do this?';
    newElement.style = 'font-size: 30px; color: red';
    list.appendChild(newElement);
}
myButtonClick.addEventListener('click', AddNewElementWithText);


