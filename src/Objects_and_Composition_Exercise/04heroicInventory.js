function solve(inputArray) {
    let resultArray = [];

    for (const str of inputArray) {
        [name, level, items] = str.split(' / ');
        
        let obj = {
            name: name,
            level: Number(level),
            items: items ? items.split(', ') : [],
        }
        
        resultArray.push(obj);
    };

    let myJson = JSON.stringify(resultArray);
    return myJson;
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));

// console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));