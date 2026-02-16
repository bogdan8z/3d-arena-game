var GameManager = pc.createScript('gameManager');

GameManager.prototype.initialize = function () {
    var self = this;
    this.players = {};

    this.app.on("network:spawn", function (data) {
        self.spawnPlayer(data);
    });
};

GameManager.prototype.spawnPlayer = function (data) {
    var template = this.app.root.findByName("PlayerTemplate");
    var player = template.clone();
    this.app.root.addChild(player);
    player.enabled = true;

    var controller = player.script.playerController;
    var health = player.script.health;
    var weapon = player.script.weapon;

    controller.networkId = data.id;
    health.networkId = data.id;
    weapon.networkId = data.id;

    if (data.isLocal) controller.isLocal = true;

    this.players[data.id] = player;
};