<<<<<<< HEAD
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


=======
function speedDetector() {
    let speed = prompt("Enter the speed of the car:");
    speed = Number(speed);
    const speedLimit = 70;
    const demeritPointsPerUnit = 5;
    const maxDemeritPoints = 12;
    let points;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        points = Math.floor((speed - speedLimit) / demeritPointsPerUnit);
        if (points > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + points);
        }
    }
}
speedDetector();
>>>>>>> 0bb8351 (resubmission)
