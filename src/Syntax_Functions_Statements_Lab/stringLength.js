function solve(string1, string2, string3) {
    let totalLength = string1.length + string2.length + string3.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');