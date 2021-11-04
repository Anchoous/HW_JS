import Vehicle from './Vehicle.js';
export default class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed){
        super(carModel,carYear, maxSpeed);
        this.type = "truck";
    }

    static info(){  // Статичний метод з наслідуванням
        super.info();
        console.log(`It is a truck`);
    }

    transportContaineer() {
        console.log(`I am starting transporting heavy container`)
    }
}