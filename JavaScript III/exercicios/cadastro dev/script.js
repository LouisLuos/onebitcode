const infoDev = []

const adicionarTecnologia = document.getElementById("adicionarTecnologia")

function addTecno (ev) {
    ev.preventDefault()
    const divTecnologias = document.getElementById("campoTecnologias")
    const newForm = document.createElement("form")
    const newInput = document.createElement("input")
    const newLabel = document.createElement("label")
    const NewInputRadio1 = document.createElement("input")
    const newLabelRadio1 = document.createElement("label")
    const NewInputRadio2 = document.createElement("input")
    const newLabelRadio2 = document.createElement("label")
    const NewInputRadio3 = document.createElement("input")
    const newLabelRadio3 = document.createElement("label")
    const submit = document.createElement("button")
    
    submit.type = "submit"
    submit.textContent = "Enviar"
    
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
    newLabelRadio1.textContent = "0-2 Anos"
    newLabelRadio1.htmlFor = "tempoExperiencia1"
    NewInputRadio1.value = "0-2"

    NewInputRadio2.type = "radio"
    NewInputRadio2.id = "tempoExperiencia2"
    NewInputRadio2.name = "tempoExperiencia"
    NewInputRadio2.htmlFor = "tempoExperiencia"
    newLabelRadio2.textContent = "3-4 Anos"
    newLabelRadio2.htmlFor = "tempoExperiencia2"
    NewInputRadio2.value = "3-4"

    NewInputRadio3.type = "radio"
    NewInputRadio3.id = "tempoExperiencia3"
    NewInputRadio3.name = "tempoExperiencia"
    NewInputRadio3.htmlFor = "tempoExperiencia"
    newLabelRadio3.textContent = "5+ Anos"
    newLabelRadio3.htmlFor = "tempoExperiencia3"
    NewInputRadio3.value = "5+"
    
    

    
    
    console.log(divTecnologias)


    submit.addEventListener("click", function (SubmitEvent)  { 
        SubmitEvent.preventDefault()

        const nomeDaTecnologia = document.querySelector("input[name='nameTecnologia']")
        const AnosExperiencia = document.querySelector("input[name='tempoExperiencia']:checked")
        const nomeDaPessoa = document.getElementById("inputName")
        const objetosColetados = {
            nome: nomeDaPessoa.value,
            tecnologia: nomeDaTecnologia.value,
            experiencia: AnosExperiencia.value
        }

        console.log(objetosColetados)
        infoDev.push(objetosColetados)


    })

    newForm.appendChild(newLabel)
    newForm.appendChild(newInput)

    newForm.appendChild(NewInputRadio1)
    newForm.appendChild(newLabelRadio1)
    newForm.appendChild(NewInputRadio2)
    newForm.appendChild(newLabelRadio2)
    newForm.appendChild(NewInputRadio3)
    newForm.appendChild(newLabelRadio3)
    

    newForm.appendChild(submit)
    divTecnologias.appendChild(newForm)
}

adicionarTecnologia.addEventListener("click", addTecno)