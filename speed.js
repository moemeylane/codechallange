function speedTest(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const initialPoints = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
        return initialPoints;
    } else {
        let excessSpeed = speed - speedLimit;
        let demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

        console.log(`Demerit points: ${demeritPoints}`);
        return demeritPoints;
    }
}


