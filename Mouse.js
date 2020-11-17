function Mouse (name) {
    this.name = name;
    this.die = false;
}


Mouse.prototype.die = () => {
    this.die = true;
}

module.exports = Mouse;