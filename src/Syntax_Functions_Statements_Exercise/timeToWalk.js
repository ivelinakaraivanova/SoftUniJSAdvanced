function solve(steps, stepLength, speed) {
    let stepsInMeters = steps*stepLength;
    let timeForBreaks = Math.floor(stepsInMeters / 500);
    let speedInMetersPerSecond = speed * 1000 / 3600;
    let timeInSeconds = (stepsInMeters / speedInMetersPerSecond) ;
    let timeMinutes = Math.floor(timeInSeconds / 60 + timeForBreaks);
    let timeInHours = 0;
    
    if (timeMinutes > 60) {
        let timeInHours = Math.floor(timeMinutes / 60);
    }
    
    let timeSeconds = Math.round(timeInSeconds % 60);
    
    function leadingZero(p) {
        if (p < 10) {
            return '0' + p;
        } else {
            return p;
        }
    }

    let result = `${leadingZero(timeInHours)}:${leadingZero(timeMinutes)}:${leadingZero(timeSeconds)}`
    
    console.log(result);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);