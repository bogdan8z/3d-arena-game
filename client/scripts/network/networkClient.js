var NetworkClient = pc.createScript('networkClient');

NetworkClient.attributes.add('serverUrl', {
    type: 'string',
    default: 'ws://localhost:8080'
});

NetworkClient.prototype.initialize = function () {
    var self = this;

    this.socket = new WebSocket(this.serverUrl);
    this.socket.onopen = function () {
        console.log("Connected to server");
    };

    this.socket.onmessage = function (msg) {
        var data = JSON.parse(msg.data);

        if (data.type === "spawn") {
            self.app.fire("network:spawn", data);
        }

        if (data.type === "state") {
            self.app.fire("network:state", data.state);
        }

        if (data.type === "fire") {
            self.app.fire("network:remoteFire", data);
        }

        if (data.type === "hit") {
            self.app.fire("network:hit", data);
        }
    };

    this.app.on("network:send", function (packet) {
        self.socket.send(JSON.stringify(packet));
    });
};