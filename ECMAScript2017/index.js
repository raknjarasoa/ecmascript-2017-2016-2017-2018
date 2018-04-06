// 1. Object.values()

const cars = {
  BMW: 3,
  Tesla: 2,
  Toyota: 1
};

// ES2015
const vals = Object.keys(cars).map(key => cars[key]);

console.log(vals);

// ES2017
const values = Object.values(cars);

console.log(values);

// 2. Object.entries()
// Old way
Object.keys(cars).forEach(key => {
  console.log('key: ' + key + ' value: ' + cars[key]);
});

// ES8
for (let [key, value] of Object.entries(cars)) {
  console.log(`key: ${key} value: ${value}`)
}
