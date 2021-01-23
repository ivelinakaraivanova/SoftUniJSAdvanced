function solve(inputArray, firstFlavor, secondFlafor) {
    
    let startIndex = inputArray.indexOf(firstFlavor);
    let endIndex = inputArray.indexOf(secondFlafor);

    let resultArray = inputArray.slice(startIndex, endIndex+1);

    return resultArray;
}

console.log(solve(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
console.log(solve(['Apple Crisp','Mississippi Mud Pie','Pot Pie','Steak and Cheese Pie','Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));