function solve(input) {
    const text = input;
    const regex = /\w+/g;

    const matches = text.match(regex);
    let words = [];

    for (const match of matches) {
        words.push(match.toUpperCase());
    }

    console.log(words.join(', '))
}

solve('Hi, how are you?');
solve('hello')