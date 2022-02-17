
//Car Creation functions
const createChassis = () => {
	const newChassisObject = {}
	return newChassisObject
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = '4.8L'
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steering = 'Tilting'
    return chassisObject
}

const addBody = (chassisObject) => {
	chassisObject.body = "Fever"
	return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.drivetrain = 'Two wheel drive'
    return chassisObject
}

// const makeCar = () => {
//     let newCar = createChassis()
//     addWheels(newCar)
//     addEngine(newCar)
//     addSteeringWheel(newCar)
//     addBody(newCar)
//     addDriveTrain(newCar)
//     return newCar
// }

// const funCar = makeCar()
// console.log(funCar)

const chassis = createChassis()
const chassisWithWheels = addWheels(chassis)
const chassisWithEngine = addEngine(chassis)
const chassisWithSteeringWheel = addSteeringWheel(chassis)
const chassisWithBody = addBody(chassis)
const chassisWithDriveTrain = addDriveTrain(chassis)
console.log(chassisWithDriveTrain)

