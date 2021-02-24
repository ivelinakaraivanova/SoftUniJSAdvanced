function solve(inputObject) {

    function validMethod(method) {
        return method == 'GET' || method == 'POST' || method == 'DELETE' || method == 'CONNECT';
    }

    function validUri(uri) {
        return (/^([A-Za-z0-9.]+)$|(\*)/g.test(uri) && uri != '');
    }


    function validVersion(version) {
        return version == 'HTTP/0.9' || version == 'HTTP/1.0' || version == 'HTTP/1.1' || version == 'HTTP/2.0';
    }

    function validMessage(message) {
        return !(message.includes('<') || message.includes('>')
        || message.includes('\\') || message.includes('&')
        || message.includes('\'') || message.includes('"'));
    }

    const pairs = [
        { propName: 'method', valueChecker: validMethod },
        { propName: 'uri', valueChecker: validUri },
        { propName: 'version', valueChecker: validVersion },
        { propName: 'message', valueChecker: validMessage }
    ];

    for (const pair of pairs) {
        if (!Object.keys(inputObject).includes(pair.propName)
            || !pair.valueChecker(inputObject[pair.propName])) {
            let partFailed;
            if (pair.propName == 'uri') {
                partFailed = pair.propName.toUpperCase();
            } else {
                partFailed = pair.propName.toUpperCase()[0] + pair.propName.slice(1);
            }
            throw new Error(`Invalid request header: Invalid ${partFailed}`);
        }
    }

    return inputObject;
}

// function solve(obj) {
//     if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method)) {
//         throw new Error('Invalid request header: Invalid Method');
//     };

//     if (!obj.uri || !/^([A-Za-z0-9.]+)$|(\*)/g.test(obj.uri)){
//         throw new Error('Invalid request header: Invalid URI');
//     };

//     if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version)) {
//         throw new Error('Invalid request header: Invalid Version');
//     };

//     if (obj.message == undefined || /[<>\\&'"]/g.test(obj.message)) {
//         throw new Error('Invalid request header: Invalid Message');
//     };

//     return obj;
// }


// console.log(solve({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }
// ))

// console.log(solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }
// ))

// console.log(solve({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
// }
// ))

console.log(solve({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}
))