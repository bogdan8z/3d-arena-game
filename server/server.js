const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

let clients = {};
let state = {};

wss.on("connection", ws => {
    const id = Date.now().toString();
    clients[id] = ws;

    ws.send(JSON.stringify({
        type: "spawn",
        id: id,
        isLocal: true
    }));

    broadcast({
        type: "spawn",
        id: id,
        isLocal: false
    }, id);

    ws.on("message", msg => {
        const data = JSON.parse(msg);

        if (data.type === "input") {
            state[id] = {
                position: data.position,
                rotation: data.rotation
            };
        }

        if (data.type === "fire") {
            broadcast({
                type: "fire",
                id: id,
                position: data.position,
                rotation: data.rotation
            });
        }
    });

    ws.on("close", () => {
        delete clients[id];
        delete state[id];
    });
});

function broadcast(message, exclude) {
    const json = JSON.stringify(message);
    for (const id in clients) {
        if (id !== exclude) {
            clients[id].send(json);
        }
    }
}

setInterval(() => {
    broadcast({
        type: "state",
        state: state
    });
}, 50);

console.log("Server running on ws://localhost:8080");