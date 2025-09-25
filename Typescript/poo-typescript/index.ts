class Spaceship {
   _name: string
  protected captain: string
   speed: number


  set name(name: string) {
    this._name = name
  }

  constructor(name: string, captain: string) {
    this._name = name
    this.captain = captain
    this.speed = 0
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time
  }
}

class Fighter extends Spaceship {
  weapons: number = 0


  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!')
    }
  }

  erase() {
    this.name = ''
    this.captain = ''
  }
}

let ship = new Spaceship('USS Enterprise', 'James T. Kirk')

ship.speed = 50
ship.accelerate(50, 10)
ship.name("aaa")