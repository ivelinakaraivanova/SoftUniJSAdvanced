function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.substr(1).toLowerCase();
    const rectangle = { width, height, color }
        
    rectangle.calcArea = () => {
        return rectangle.width * rectangle.height;
    }

    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
