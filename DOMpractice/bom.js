const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const list = document.getElementsByClassName('list')[0];

button.addEventListener('click', () => {
    if (input.value != '') {
    let newListElement = document.createElement('li');
    let newDeleteButton = document.createElement('button');
    newListElement.textContent = input.value;
    input.value = '';
    newDeleteButton.textContent = '❌';
    newDeleteButton.addEventListener('click', () => {
        newListElement.remove();
        input.focus();
    })
    newListElement.appendChild(newDeleteButton);
    list.appendChild(newListElement);
    input.focus();
    }
})

