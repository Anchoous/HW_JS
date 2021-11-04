import Vehicle from './Vehicle.js';
export default class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed){
        super(carModel,carYear, maxSpeed);
        this.type = "car";

    }

    static info(){  // Статичний метод з наслідуванням
        super.info();
        console.log(`It is a car`);
    }

    transportPeople(){
        console.log(`I am starting transporing passengers`);
    }
}