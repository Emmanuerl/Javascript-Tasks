Array.prototype.map2 = function (callback) {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this));
    }

    return array;
};

// lets test: 

let numbers = [1, 2, 3].map(number => number * 2);
let numbers2 = [1, 2, 3].map2(number => number * 2);

console.log(numbers); // [2, 4, 6]
console.log(numbers2); // [2, 4, 6]