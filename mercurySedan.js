//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class automobile extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 120;
        this.fuel = 25;
        this.scheduleService = false;
    }

    passengerNumber(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + "Sorry, no room for everyone.");

            }
        } else {
            console.log(this.model + " " + this.make + "all onboard, let's start the car");
        }
    }
    
    start() {
        if (this.fuel > 0) {            
            console.log("ready to start");
            return this.started = true
        } else {
            console.log("Stop for at the gas station");
            return this.started = false;
        }
    }
    
    checkService() {
        if (this.mileage > 15000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }


}


let danCar = new automobile('mercury', 'rad_sedan', '2024', 'white', 10000)

danCar.loadPassenger(2)
danCar.start()
danCar.checkService()

console.log(danCar)

