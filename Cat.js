let Mouse = require("./Mouse");

function Cat () {
    this.stomach = [];
};

Cat.prototype.eat  = (mouse) => {
    if(mouse instanceof Mouse){
       console.log("Cat eat mouse");
    }else {
        throw new Error("Cat can only eat mouse!");
    }
    
};

module.exports = Cat;