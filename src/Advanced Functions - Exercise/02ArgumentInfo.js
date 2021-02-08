function solve() {
    let args = {};

    for (let arg of arguments) {
        console.log(`${typeof(arg)}: ${arg}`);
    }

    for (let arg of arguments) {
        const type = typeof (arg);
        if (!args[type]) {
            args[type] = 1;
        } else {
            args[type] += 1;
        }
    }

    const sortedArgs = Object.entries(args)
        .sort(([, a], [, b]) => b - a);

    for (let [key, value] of sortedArgs) {
        console.log(`${key} = ${value}`);
    }

}

solve('cat', 42, function () { console.log('Hello world!'); }, 'dog', 45, 965)