import Vehicle from './Vehicle.js';
export default class Electric_scooter extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
        super(carModel,carYear, maxSpeed);
        this.type = "Electric_scooter";
    }


    transportPerson(){
        console.log(`I am transporting a person`);
    }

}