const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function (num) {
        return num * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers)
}