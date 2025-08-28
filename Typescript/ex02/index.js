var planets = [];
function savePlanet(nome, cordenadas, situacao, satelites) {
    var planet = {
        nome: nome,
        cordenadas: cordenadas,
        situacao: situacao,
        satelites: satelites
    };
    planets.push(planet);
    return planet;
}
console.log(savePlanet("Terra", [20, 40, 60, 80], "habitado", ["Lua"]));
function autalizarSituacion(nome, situacaoNova) {
    var planetaAtual = planets.find(function (planet) { return planet.nome === nome; });
    if (planetaAtual) {
        planetaAtual.situacao = situacaoNova;
        console.log("".concat(nome, " teve status alterado para ").concat(situacaoNova));
    }
    else {
        console.log("Planeta não entrado");
    }
    console.log(planetaAtual);
}
autalizarSituacion("Terra", "inabitável");
function adicionarSatelite(nomePlaneta, satelite) {
    var planetaAtual = planets.find(function (planet) { return planet.nome === nomePlaneta; });
    if (planetaAtual) {
        planetaAtual.satelites.push(satelite);
        console.log("Foi adicionado ao ".concat(planetaAtual.nome, " o satelite natural: ").concat(satelite));
    }
    else {
        console.log("Erro registrado");
    }
    console.log(planetaAtual);
}
adicionarSatelite("Terra", "Carro do elon musk");
function exibirTodosPlanetas() {
    var allPlanets = planets.forEach(function (planeta) { return console.log(planeta); });
    return allPlanets;
}
exibirTodosPlanetas();
