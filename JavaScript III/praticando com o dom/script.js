function addContact () {

    const contactSection = document.getElementById("contacts-list")

    const h3 = document.createElement("h3")
    h3.innerText = "Lista de contatos"

    const ul = document.createElement("ul")

    const nameLi = document.createElement("li")
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = "input-name"

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    const phoneLi = document.createElement("li")
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement("input")
    phoneInput.type = "text"
    phoneInput.name = "input-name"

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    const addressLi = document.createElement("li")
    addressLi.innerHTML = '<label for= "address">Endereço: </label>'
    
    const addressInput = document.createElement("input")
    addressInput.type = "text"
    addressInput.name = "address"
    addressInput.id = "address"
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)

    contactSection.append(h3, ul)


}

function removeContact () {
    const contactList = document.getElementById("contacts-list")
    
    const tittle = document.getElementsByTagName("h3")
    const info = document.getElementsByTagName("ul")

    contactList.removeChild(tittle[tittle.length - 1])
    contactList.removeChild(info[info.length - 1])
}