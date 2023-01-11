// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return (num) => {
        return num * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}

// const createFareMultiplier = (number) => (fare) => number * fare
// const fareDoubler = fare => fare * 2
// const fareTripler = fare => fare * 3