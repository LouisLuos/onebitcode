const spaceships = []

function saveSpaceship(name: string, pilot: string, crewLimit: number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }
    spaceships.push(spaceship)
    alert(`A nave ${name} foi registrada`)
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[],
    inMission: boolean
  }
  
  spaceship = spaceships.find((ship) => {
    return ship.name === name
  });
  
  return spaceship
}
    
