const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete-all')
const deleteNoteBtn = document.getElementsByClassName('.delete-note')
const cancelBtn = document.querySelector('.cancel')
const saveBtn = document.querySelector('.save')
const noteArea = document.querySelector('.note-area')
const noteBody = document.querySelector('.note-body')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue;
let cardId = 0;

const openPanel = () =>{
    
        notePanel.style.display = 'flex'
        notePanel.style.visibility = 'visible'
    
}
const closePanel = () =>{
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    category.selectedIndex = 0;
    textArea.value = ''
}

const showError = () => {
    if (textArea.value === '' ) {
        error.style.visibility = 'visible';
        
        return false;
    } else if(category.value !== '1' ) {
        error.style.visibility = 'visible';
  
        return false;
    } else {
        error.style.visibility = 'hidden';
        return true;
    }
};

const ahhh = () =>{
    if(showError() === true){
        addNote()
        closePanel()
        notePanel.style.visibility = 'hidden'
        noteArea.style.display = 'block'
        noteArea.style.display = 'flex'
    }
}

const addNote = () =>{
 
    const inputNote = textArea.value


        const categories = category.textContent;
        const newNote = document.createElement('div')
        newNote.classList.add('note');
        
        newNote.innerHTML = `    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardId})">
        <i class="fa-regular fa-square-minus"></i>
        </button>
        </div>
        <div class="note-body">
        <p>${inputNote}</p>
        </div>`
        
        newNote.setAttribute('id', cardId);
        noteArea.appendChild(newNote);
        checkColor(newNote)
        cardId++;
  
}
console.log(category.options[category.selectedIndex].textContent);
const chosenValue = () => {
    selectedValue = category.options[category.selectedIndex].text;}

    const checkColor = (note) => {

        switch(selectedValue){
            case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
            case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
            case 'Treningi':
            note.style.backgroundColor = 'rgb(170,220,90)';
            break;
            case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;

        }
    }

const deleteNote = id => {
   const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}
const deleteAllNote = id => {
  noteArea.textContent = '';
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', ahhh)
deleteAllBtn.addEventListener('click', deleteAllNote)