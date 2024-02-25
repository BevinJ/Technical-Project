const opennoteaction = document.querySelectorAll('[data-notes-target]')
const closenoteaction = document.querySelectorAll('[data-close-button]')
const overlay = document.querySelector('.overlay')


opennoteaction.forEach(div =>{
    div.addEventListener('click',() =>{
        const notes = document.querySelector(div.dataset.notesTarget)
        opennote(notes)
    })
})
closenoteaction.forEach(div =>{
    div.addEventListener('click',() =>{
        const notes = div.closest('.singlenotes')
        closenote(notes)
    })
})

function opennote(notes){
    if(notes == null)return;
    overlay.classList.add('on');
    notes.classList.add('on');
}

function closenote(notes){
    if(notes == null)return;
    overlay.classList.remove('on');
    notes.classList.remove('on');
}