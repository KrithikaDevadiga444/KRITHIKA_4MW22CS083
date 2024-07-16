function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

let numbers = [8, 14, 4, 10, 5, 9];
console.log(findMax(numbers)); // Output: 9

let emptyArray = [];
console.log(findMax(emptyArray));