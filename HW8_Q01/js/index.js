const user = {};

function setterGenerator(key) {
  return function (value) {
    this[key] = value;
  }.bind(user);
}
const nameSetter = setterGenerator("name");
nameSetter("Jack");
console.log(user); // {name: ‘jack’}
