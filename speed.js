
function demeritsForSpeed(speed) {
    if (speed <= 70) {
        return 'Ok';
    } else {
        let demerits = (speed - 70) / 5;
        return`Demerit points: ${demerits}`;
    }
}

