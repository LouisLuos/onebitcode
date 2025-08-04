function addInput () {
    const ul = document.getElementById("inputs")
    const newLi = document.createElement("newLi")
    newLi.className = ("new-input")
    newLi.textContent = ("teste")
    const newInput = document.createElement("input")
    newInput.type = "text"
    newInput.name = "input"
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}