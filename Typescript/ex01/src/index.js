var spaceships = [];
function saveSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert("A nave ".concat(name, " foi registrada"));
}
function findSpaceship(name) {
    var spaceship;
    spaceship = spaceships.find(function (ship) {
        return ship.name === name;
    });
    return spaceship;
}

