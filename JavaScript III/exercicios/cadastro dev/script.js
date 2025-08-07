const infoDev = []

const adicionarTecnologia = document.getElementById("adicionarTecnologia")

function addTecno (ev) {
    ev.preventDefault()
    const divTecnologias = document.getElementById("campoTecnologias")
    const newForm = document.createElement("form")
    const newInput = document.createElement("input")
    const newLabel = document.createElement("label")
    const NewInputRadio1 = document.createElement("input")
    const newLabelRadio = document.createElement("label")
    
    newForm.id = "formTecnologia"
    
    newLabel.htmlFor = "nameTecnologia"
    newLabel.textContent = "Nome da tecnologia: "
    newInput.type = "text"
    newInput.id = "nameTecnologia"
    newInput.name = "nameTecnologia"

    NewInputRadio1.type = "radio"
    NewInputRadio1.id = "tempoExperiencia1"
    NewInputRadio1.name = "tempoExperiencia"
    NewInputRadio1.htmlFor = "tempoExperiencia"
    newLabelRadio.textContent = "0-2 Anos"
    newLabelRadio.htmlFor = "tempoExperiencia1"
    NewInputRadio1.value = "0-2"
    
    

    
    newForm.appendChild(newLabel)
    newForm.appendChild(newInput)

    newForm.appendChild(NewInputRadio1)
    newForm.appendChild(newLabelRadio)
    
    divTecnologias.appendChild(newForm)
    console.log(divTecnologias)
}

adicionarTecnologia.addEventListener("click", addTecno)