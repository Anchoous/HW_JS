export default class Vehicle{
    constructor(carModel,carYear,maxSpeed){
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
        this.type = `Vehicle`
    }

    static info(){
        console.log(`This is a vehicle`)
    }

    displayInfo(){
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);

    }

}

