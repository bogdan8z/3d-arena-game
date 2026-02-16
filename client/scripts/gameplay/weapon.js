var Weapon = pc.createScript('weapon');

Weapon.attributes.add('projectileTemplate', { type: 'entity' });

Weapon.prototype.initialize = function () {
    var self = this;

    this.app.on("network:remoteFire", function (data) {
        if (data.id !== self.networkId) {
            self.spawnProjectile(data.position, data.rotation);
        }
    });
};

Weapon.prototype.fire = function () {
    var pos = this.entity.getPosition();
    var rot = this.entity.getEulerAngles();

    this.spawnProjectile(pos, rot);

    this.app.fire("network:send", {
        type: "fire",
        position: pos,
        rotation: rot
    });
};

Weapon.prototype.spawnProjectile = function (position, rotation) {
    var bullet = this.projectileTemplate.clone();
    this.app.root.addChild(bullet);

    bullet.setPosition(position);
    bullet.setEulerAngles(rotation);
    bullet.enabled = true;
};