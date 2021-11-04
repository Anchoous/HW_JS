import Vehicle from './Vehicle.js';
export default class Bus extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
        super(carModel,carYear, maxSpeed);
        this.type = "Bus";
    }
    
    transportPeople(){
        console.log(`I am transporting people`);
        
    }
    displayInfo(){
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);

    }

}
