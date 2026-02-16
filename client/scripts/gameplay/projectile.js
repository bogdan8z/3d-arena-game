var Projectile = pc.createScript('projectile');

Projectile.attributes.add('speed', { type: 'number', default: 20 });
Projectile.attributes.add('lifeTime', { type: 'number', default: 2 });

Projectile.prototype.initialize = function () {
    this.timer = 0;
};

Projectile.prototype.update = function (dt) {
    this.entity.translateLocal(0, 0, this.speed * dt);

    this.timer += dt;
    if (this.timer >= this.lifeTime) {
        this.entity.destroy();
    }
};