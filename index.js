// Code your solution here

function findMatching(driversArray, str) {
    return driversArray.filter((driver) => {
        return driver.toLowerCase() == str.toLowerCase();
    });
};

let drivers = ['Racquel', 'Izzy', 'Ahava'];
console.log(findMatching(drivers, 'Racquel'));

function fuzzyMatch(driversArray, str) {
    return driversArray.filter((driver) => {
        return driver.slice(0, str.length) === str;
    })
};

console.log(fuzzyMatch(drivers, 'Ra'));

let driverObjects = [
    {
        name: 'Racquel',
        hometown: 'Woodmere',
    },
    {
        name: 'Izzy',
        hometown: 'Woodmere',
    },
    {
        name: 'Gil',
        hometown: 'St. Louis',
    },
]

function matchName(driversArray, str) {
    return driversArray.filter((driver) => {
        return driver.name === str;
    });
};

console.log(matchName(driverObjects, 'Gil'));