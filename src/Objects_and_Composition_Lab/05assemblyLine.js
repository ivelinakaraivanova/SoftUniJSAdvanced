function createAssemblyLine() {
    let assemblyLibrary = {};

    assemblyLibrary.hasClima = (car) => {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = () => {
            if (car.temp > car.tempSettings) {
                car.temp -= 1;
            } else if (car.temp < car.tempSettings) {
                car.temp += 1;
            }
        };
    }

    assemblyLibrary.hasAudio = (car) => {
        car.currentTrack = {
            name: null,
            artist: null,
        };
        car.nowPlaying = () => {
            if (car.currentTrack.name && car.currentTrack.artist) {
                console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`)
            }
        };
    }

    assemblyLibrary.hasParktronic = (car) => {
        car.checkDistance = (distance) => {
            let result = '';
            if (distance < 0.1) {
                result = 'Beep! Beep! Beep!';
            } else if (distance < 0.25) {
                result = "Beep! Beep!";
            } else if (distance < 0.5) {
                result = "Beep!";
            }

            console.log(result);
        }
    }

    return assemblyLibrary;
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {name: 'Never Gonna Give You Up', artist: 'Rick Astley'};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);