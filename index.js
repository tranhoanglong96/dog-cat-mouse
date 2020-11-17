const Cat = require("./Cat");
const Mouse = require("./Mouse");
const Dog = require("./Dog");

let cat  = new Cat("Tom");
let mouse = new Mouse();
let dog = new Dog();
cat.eat(mouse);

try {
    cat.eat(dog);
}catch (error){
    console.log("Error while cat eat dog");
}

console.log(cat);
