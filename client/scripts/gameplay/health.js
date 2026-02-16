var Health = pc.createScript('health');

Health.attributes.add('maxHp', { type: 'number', default: 100 });

Health.prototype.initialize = function () {
    this.hp = this.maxHp;
    var self = this;

    this.app.on("network:hit", function (data) {
        if (data.id === self.networkId) {
            self.takeDamage(data.amount);
        }
    });
};

Health.prototype.takeDamage = function (amount) {
    this.hp -= amount;
    if (this.hp <= 0) {
        this.hp = this.maxHp;
        this.entity.setPosition(0, 1, 0);
    }
};