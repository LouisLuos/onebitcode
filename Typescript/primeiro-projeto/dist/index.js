function sendSpaceship(name, capitain) {
    var spaceship = {
        name: name,
        capitain: capitain,
        velocity: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " com os tripulantes ").concat(spaceship.crew.length, " foram enviados a uma miss\u00E3o a bordo do capit\u00E3o ").concat(spaceship.capitain));
    return spaceship;
}
function accelerate(acelerar, spaceship) {
    if (spaceship.velocity > acelerar) {
        alert("reduzindo a velocidade de ".concat(spaceship.velocity, " para ").concat(acelerar));
        spaceship.velocity = acelerar;
    }
    else {
        alert("aumento a velocidade da nave para ".concat(acelerar));
        spaceship.velocity = acelerar;
    }
    return spaceship;
}
function addTripulante(tripulante, spaceship) {
    spaceship.crew.push(tripulante);
    alert("O triuplante" + tripulante + "Foi adicionado a Naveeeeeeee");
    console.log(spaceship);
}
var nomeDaNave = prompt("Digite o nome da nave");
var nomeDoCapitao = prompt("Digite o nome do capitão");
var primeiroTripulante = prompt("Digite o nome do tripulante");
var espacoNave = sendSpaceship(nomeDaNave, nomeDoCapitao);
console.log(accelerate(100, espacoNave));
console.log(addTripulante("Luiz", espacoNave));
