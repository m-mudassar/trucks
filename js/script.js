// classes
class Truck {
    containerCount = 1;
    driversCount = 2;

    // will only be storing the driver object
    drivers = [];
    
    // will only be storing the container objects
    containers = []

    constructor(drivers, truckNo, containers, imgURL) {
        this.drivers = drivers;
        this.truckNo = truckNo;
        this.containers = containers;
    }

    setDriverCount(count) {
        this.driversCount = count;
        console.log("Setting the drivers count to " + count);
    }

    getDriverCount() {
        console.log("Getting the drivers count")
        return this.driversCount;
    }

    setContainersCount(count) {
        this.containerCount = count;
        console.log("setting the containers count")
    }

    getContainersCount(count) {
        console.log("getting the containers count" + this.containerCount)
        return this.containerCount;
    }

    addDriver(driver) {
        if (this.drivers.length < this.driversCount) {
            this.drivers.push(driver);
            console.log("Driver" + driver.name + "Added Successfully")
        }
    }

    removeDriver(driver) {
        for (let i = 0; i < this.drivers.length; i++) {
            if (this.drivers[i] == driver) {
                this.drivers.splice(i, 1);
                console.log("Driver" + driver.name + "Removed Successfully")
            }
        }
    }

    addContainer(container) {
        if (this.containerCount < this.containers.length) {
            this.containers.push(container);
            console.log("Container" + container.name + "Added Successfully")
        }
    }

    removeContainer(container) {
        for (let i = 0; i < this.containers.length; i++) {
            if(this.containers[i] == container){
                this.containers.splice(i, 1);
                console.log("Container" + container.name + "Removed Successfully")
            }
        }
    }
}

class Driver {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Container {
    constructor(id) {
        this.id = id;
    }
}


// Global variables
var trucks = [];


function generateDispatchCode() {
    console.log("Dispatch code generated")
}