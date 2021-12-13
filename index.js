const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

//Fill Listener
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// let i = 0;
// function loadQuestion(){
//     fill.style.background = 'Red'
// }

//Loop through empties call drag events
for (const empty of empties) {
    empty.addEventListener('dragover', onDragOver)
    empty.addEventListener('dragenter', onDragEnter)
    empty.addEventListener('dragleave', onDragLeave)
    empty.addEventListener('drop', onDrop)
}

function dragStart() {
    this.classList.add('hold');
    setTimeout(() => (this.className = 'invisible'), 0)
}
function dragEnd() {this.className = 'fill'}
function onDragOver(e) {e.preventDefault()}
function onDragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}
function onDragLeave() {this.className = 'empty'}
function onDrop() {
    this.className = 'empty'
    this.append(fill)
    // check here the id
}




