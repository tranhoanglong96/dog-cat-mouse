const Dog  = () => {
    this.stomach = [];
};

Dog.prototype.eat = (cat) => {
    this.stomach.push(cat);
}

Dog.prototype.run = () => {
    console.log("Dog run");
}

module.exports = Dog;