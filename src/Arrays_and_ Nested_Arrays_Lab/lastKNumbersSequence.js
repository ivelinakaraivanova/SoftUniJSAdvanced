function solve(n, k) {
    let nums = [1];
    
    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i-k);
        let currentItem = nums.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
        nums.push(currentItem);
    }

    return nums
}

console.log(solve(6, 3));
console.log(solve(8, 2));
console.log(solve(3, 1));