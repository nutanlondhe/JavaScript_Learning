console.log("***************vehicleclass*************");

class vehicle {
    vehicleName
    vehicleModel
    vehiclePrice
    vehicleColour
    vehicleRating
    
    constructor (myvehicleName, myvehicleModel, myvehiclePrice, myvehicleColour, myvehicleRating){
        this.vehicleName = myvehicleName;
        this.vehicleModel = myvehicleModel;
        this.vehiclePrice = myvehiclePrice;
        this.vehicleColour = myvehicleColour;
        this.vehicleRating =myvehicleRating;
    }
}

    let sachin = new vehicle("Audi", "AudiQ8", 5000000,"Black","*****");
    let ramesh = new vehicle("Swift", "Sw05", 1200000,"Gray","****");
    let Himesh = new vehicle("Honda", "Hzq02", 1500000,"Red","****");
    let Hina = new vehicle("Thar", "Th002", 1800000,"Black","*****");
    let Yash = new vehicle("Toyoto", "Toto", 95.4500000,"Black","*****");
    console.log(sachin);
    console.log(ramesh);
    console.log(Himesh);
    console.log(ramesh);
    console.log(Yash);




    function show (arg1, arg2){

    }
    show(10,20)
