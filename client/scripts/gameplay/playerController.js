var PlayerController = pc.createScript('playerController');

PlayerController.attributes.add('speed', { type: 'number', default: 6 });
PlayerController.attributes.add('turnSpeed', { type: 'number', default: 120 });

PlayerController.prototype.initialize = function () {
    this.isLocal = false;
    this.networkId = null;

    this.weapon = this.entity.script.weapon;

    var self = this;

    this.app.on("network:state", function (state) {
        if (!self.isLocal && state[self.networkId]) {
            var info = state[self.networkId];
            self.entity.setPosition(info.position.x, info.position.y, info.position.z);
            self.entity.setEulerAngles(info.rotation.x, info.rotation.y, info.rotation.z);
        }
    });
};

PlayerController.prototype.update = function (dt) {
    if (!this.isLocal) return;

    var f = 0, t = 0;

    if (this.app.keyboard.isPressed(pc.KEY_W)) f = 1;
    if (this.app.keyboard.isPressed(pc.KEY_S)) f = -1;
    if (this.app.keyboard.isPressed(pc.KEY_A)) t = -1;
    if (this.app.keyboard.isPressed(pc.KEY_D)) t = 1;

    this.entity.translateLocal(0, 0, f * this.speed * dt);
    this.entity.rotateLocal(0, t * this.turnSpeed * dt, 0);

    if (this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT)) {
        this.weapon.fire();
    }

    this.app.fire("network:send", {
        type: "input",
        position: this.entity.getPosition(),
        rotation: this.entity.getEulerAngles()
    });
};