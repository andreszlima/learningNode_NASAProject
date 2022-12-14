const launches = new Map();

let latestFlightNumber = 100

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    costumer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches () {
    console.log('opamodel')
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber = 100
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        costumer:  [`Zero to Mastery`, `NASA`],
        upcoming: true,
        success: true
    }))
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}