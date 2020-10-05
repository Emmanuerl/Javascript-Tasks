Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    };
};

// lets test: 

let names = ['joao', 'emanuel'];

names.forEach2((element, index) => {
    console.log(`Element: ${element}. Index: ${index}`)
});

console.log('\n')

names.forEach((element, index) => {
    console.log(`Element: ${element}. Index: ${index}`)
});