const Mouse = (name) => {
  this.name = name;
  this.dead = false;
};

Mouse.prototype.die = () => {
  this.dead = true;
};

module.exports = Mouse;
