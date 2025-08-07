const infoDev = []

const adicionarTecnologia = document.getElementById("adicionarTecnologia")

function addTecno (ev) {
    ev.preventDefault()
    // ==========================================================
    // TODA ESTA PARTE DE CRIAÇÃO DE ELEMENTOS ESTÁ IGUAL À SUA
    // ==========================================================
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
    submit.textContent = "Salvar Tecnologia" // Mudei o texto para ficar mais claro
    
    newForm.id = "formTecnologia"
    
    newLabel.htmlFor = "nameTecnologia"
    newLabel.textContent = "Nome da tecnologia: "
    newInput.type = "text"
    newInput.id = "nameTecnologia"
    newInput.name = "nameTecnologia"

    NewInputRadio1.type = "radio"
    NewInputRadio1.id = "tempoExperiencia1"
    NewInputRadio1.name = "tempoExperiencia"
    newLabelRadio1.textContent = "0-2 Anos"
    newLabelRadio1.htmlFor = "tempoExperiencia1"
    NewInputRadio1.value = "0-2"

    NewInputRadio2.type = "radio"
    NewInputRadio2.id = "tempoExperiencia2"
    NewInputRadio2.name = "tempoExperiencia"
    newLabelRadio2.textContent = "3-4 Anos"
    newLabelRadio2.htmlFor = "tempoExperiencia2"
    NewInputRadio2.value = "3-4"

    NewInputRadio3.type = "radio"
    NewInputRadio3.id = "tempoExperiencia3"
    NewInputRadio3.name = "tempoExperiencia"
    newLabelRadio3.textContent = "5+ Anos"
    newLabelRadio3.htmlFor = "tempoExperiencia3"
    NewInputRadio3.value = "5+"
    
    // ==========================================================
    //  A LÓGICA NOVA É ADICIONADA AQUI, ANTES DE MONTAR A TELA
    // ==========================================================
    newForm.addEventListener('submit', function (submitEvent) {
        // Impede que a página recarregue
        submitEvent.preventDefault()

        // Para evitar problemas com IDs repetidos, buscamos os elementos
        // DENTRO do formulário que acabou de ser submetido ('newForm').
        const nomeTecnologiaInput = newForm.querySelector('input[name="nameTecnologia"]')
        const tempoExperienciaInput = newForm.querySelector('input[name="tempoExperiencia"]:checked')

        // Verifica se o usuário preencheu os campos
        if (!nomeTecnologiaInput.value || !tempoExperienciaInput) {
            alert('Por favor, preencha todos os campos antes de salvar.')
            return // Para a execução aqui se algo estiver faltando
        }

        // Cria um objeto com os dados coletados
        const dadosTecnologia = {
            nome: nomeTecnologiaInput.value,
            experiencia: tempoExperienciaInput.value
        }

        // Adiciona o objeto ao array principal
        infoDev.push(dadosTecnologia)

        // Limpa o formulário da tela após o envio
        newForm.remove()

        // Mostra o array no console para confirmar que funcionou
        console.clear() // Limpa o console para facilitar a visualização
        console.log('Tecnologias salvas:')
        console.table(infoDev) // .table() mostra o array de forma organizada
    })

    // ==========================================================
    //  A PARTE DE MONTAGEM DOS ELEMENTOS TAMBÉM CONTINUA IGUAL
    // ==========================================================
    newForm.appendChild(newLabel)
    newForm.appendChild(newInput)

    // Adicionando quebras de linha para melhor visualização
    newForm.appendChild(document.createElement('br'))

    newForm.appendChild(NewInputRadio1)
    newForm.appendChild(newLabelRadio1)
    newForm.appendChild(document.createElement('br'))
    
    newForm.appendChild(NewInputRadio2)
    newForm.appendChild(newLabelRadio2)
    newForm.appendChild(document.createElement('br'))
    
    newForm.appendChild(NewInputRadio3)
    newForm.appendChild(newLabelRadio3)
    newForm.appendChild(document.createElement('br'))
    newForm.appendChild(document.createElement('br'))

    newForm.appendChild(submit)
    newForm.appendChild(document.createElement('hr'))
    
    divTecnologias.appendChild(newForm)
}

adicionarTecnologia.addEventListener("click", addTecno)