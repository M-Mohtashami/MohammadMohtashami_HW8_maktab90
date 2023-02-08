const counter = counterMaker();

function counterMaker() {
  let counter = 0;
  return function (value = 0) {
    counter += value;
    return counter;
  };
}

console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter(1)); // 1
console.log(counter()); // 1
console.log(counter(3)); // 4
console.log(counter(7)); // 11
console.log(counter(-5)); // 6
