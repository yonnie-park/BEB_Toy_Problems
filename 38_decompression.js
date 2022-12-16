const decompression = function(image) {
    /* function allElementsEqual(arr) {
        const firstElement = arr[0][0];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] !== firstElement) {
                    return "X";
                }
            }
        }
        return firstElement;
    }*/

    function dec(image) {
        if (image.every((row) => row.every((cell) => cell === 1))) return 1
        if (image.every((row) => row.every((cell) => cell === 0))) return 0
        else return "X"
    }

    let result = ""
    if (dec(image) === 1 || dec(image) === 0) result += dec(image)
    else {
        result += dec(image)
        const topLeft = image.slice(0, image.length / 2).map((row) => row.slice(0, image.length / 2))
        const topRight = image.slice(0, image.length / 2).map((row) => row.slice(image.length / 2))
        const bottomLeft = image.slice(image.length / 2).map((row) => row.slice(0, image.length / 2))
        const bottomRight = image.slice(image.length / 2).map((row) => row.slice(image.length / 2))
        result += decompression(topLeft) + decompression(topRight) + decompression(bottomLeft) + decompression(bottomRight)
    }
    return result
};

let image = [
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
];
let result = decompression(image);
console.log(result);

image = [
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'X0X101X10101X00X10011'