class Reservation {
    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150
    static showFee() {
        console.log(this.baseFee)
    }
    static get premiumFee(){
        return Reservation.baseFee * 2.0
    }
}

const reserva = new Reservation(5, 5, 10) 
Reservation.showFee()


console.log(Reservation.premiumFee)