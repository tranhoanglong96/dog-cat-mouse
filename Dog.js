const chalk = require("chalk");
function Dog (name) {
    this.stomach = [];
    this.name = name;
};

Dog.prototype.eat = (animal) => {
    this.stomach.push(animal);
}

Dog.prototype.run = () => {
    console.log("Dog run");
}

Dog.prototype.sayHi = () => {
    console.log("Hi! I'm a dog. My name is"+ chalk.blue(this.name));
}

module.exports = Dog;