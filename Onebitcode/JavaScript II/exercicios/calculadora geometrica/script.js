

function area_triangulo(base, altura) {
    let area = (base * altura) / 2
    resultado = area + "m2"
    alert(resultado)
}

function area_retangulo(base, altura) {
    let area = (base * altura)
    resultado = area + "m2"
    alert(resultado)
}

function area_quadrado (lado) {
    let area = lado * lado
    resultado = area + "m2"
    alert(resultado)
}

function area_trapezio (base_menor, base_maior, altura) {
    let area = (base_menor + base_maior) * altura / 2
    resultado = area + "m2"
    alert(resultado)
}

function area_ciruclo (raio) {
    let area = (3.14) * (raio * raio)
    resultado = area + "m2"
    alert(resultado)
}


do {
    alert("1 - area triangulo \n 2 - area retangulo \n 3 - area quadrado \n 4 - area trapzeio \n 5 - area circulo \n 0 - Sair")
    const opcao = parseInt(prompt("Digite uma opção"))

    switch (opcao) {
        case 1:
            area_triangulo(3, 5)
            break
        case 2:
            area_retangulo(10, 10)
            break
        case 3:
            area_quadrado(5)
            break
        case 4:
            area_trapezio(3, 3, 5)
            break
        case 5:
            area_ciruclo(5)
            break
        
        default:
            alert("Escolha uma opção valida")
    }
    



} while (opcao !== 0)


