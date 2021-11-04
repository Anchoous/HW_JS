import Vehicle from './Vehicle.js';
import Car from './Car.js';
import Bus from './Bus.js';
import Truck from './Truck.js';
import Electric_Scooter from './Electric_Scooter.js';


Car.info();

let bus = new Bus("dada",2001,200);
bus.transportPeople();

let vehicle = new Vehicle("lala",2003,300)

vehicle.displayInfo();
bus.displayInfo();

let truck = new Truck("jdhaa",2001,250)
truck.transportContaineer();

let el_scooter = new Electric_Scooter("kdkdk",2021,200)
el_scooter.transportPerson();


