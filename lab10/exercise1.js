class RegularBulbs{
    constructor(){
        this.bulbsrRange=[50, 100]
        this.bulbsAge=1;
    }
}
class EnergyBulsbs{
    constructor(colors){
        this.bulbsrRange=[5,40]
        this.bulbsAge=10;
        this.colors=colors;
    }
}
class Factory{
    manfactureBulb(type, color){
        if (type=== "regular"){
            return new RegularBulbs();
        }else if(type==="energy"){
            return new EnergyBulsbs(color);

        }
        return null;
    }
}

const bulbsArray=[];
const factory= new Factory();
bulbsArray.push(factory.manfactureBulb("regular"));
bulbsArray.push(factory.manfactureBulb("energy", "Blue"))
bulbsArray.forEach(element => console.log(element))



