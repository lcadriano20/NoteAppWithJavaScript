const notesContainer    = document.querySelector('.notes-container')
const createBtn         = document.querySelector('.btn')
let notes               = document.querySelector('.input-box')
let deleteAllNotesBtn   = document.querySelector('.deleteAllNotes')

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes')
}



function updateStorage() {
    localStorage.setItem("notes",notesContainer.innerHTML)
}

function updateStorage() {
    localStorage.setItem("notes",notesContainer.innerHTML)
}

function deleteNote(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box')
        notes.forEach((note)=>{
            note.onkeyup = function() {
                updateStorage()
            }
        })
    }
}

function getTheActualDate() {
    const dataAtual = new Date();

    const dia = dataAtual.getDate(); 
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear(); 

    let diaMesEAno = `${dia}/${mes}/${ano}`
}
function deleteAllNotes() {
    const allNotes = localStorage.removeItem('notes')

    notesContainer.remove()


}

function createNoteBox() {
    let inputBox = document.createElement("p")
    let dataBox  = document.createElement('p')
    dataBox.classList.add('data-box')
    let img = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute('contenteditable',"true")
    img.src = "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img)


}


createBtn.addEventListener('click',createNoteBox)
notesContainer.addEventListener('click',deleteNote)
deleteAllNotesBtn.addEventListener('click',deleteAllNotes)



document.addEventListener('keydown',e =>{
    if(e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault()
    }
})

showNotes()



