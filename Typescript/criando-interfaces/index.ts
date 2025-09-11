type Planet = {
    name: string
    satelites: string[]
}

interface CelestialBody {
    name: string
    mass: number
    age: number
}

interface star extends CelestialBody {
    planets: Planet 
}