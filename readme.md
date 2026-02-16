
# PlayCanvas - 3D Arena Game – Complete Project Structure
client
  assets/
    scripts/
      network/
        networkClient.js
      gameplay/
        playerController.js
        weapon.js
        projectile.js
        health.js
      game/
        gameManager.js
    templates/
      playerTemplate.json
      projectileTemplate.json
server/
  server.js
  package.json




todo:
1. create project files
2. adauga codul in github?
2. adauga codul in playcamnvas

use project:
1. Run the server
2. Import the client scripts into PlayCanvas



NEW:
# PlayCanvas 3D Multiplayer Arena (Client + Server)

A lightweight **3D multiplayer arena game** developed using **PlayCanvas** (browser-based game engine) and a **Node.js WebSocket server**.  
The client runs fully in the browser with **no installation required**, and the server can run locally or be deployed to free cloud hosting services.

---

## ✨ Features

- 3D arena movement (WASD + rotation)
- Shooting and projectile system
- Health and respawn logic
- Real-time multiplayer using WebSockets
- Zero-install client using PlayCanvas online editor
- Simple, deployable Node.js backend
- Clean separation of `client/` and `server/`

---

## 🚀 Quick Start

### 1) Running the Server Locally

> Requires Node.js installed locally.

```bash
cd server
npm install
node server.js

Server starts at:
ws://localhost:8080

Leave this running.
🧰 Using PlayCanvas (Client)

Go to https://playcanvas.com
Create a new 3D project
In the Assets panel, recreate this folder structure:

scripts/
  gameplay/
  network/
  game/


Upload files from client/scripts into their matching folders.


🔧 Assign Scripts in PlayCanvas
PlayerTemplate
Add a Script Component, attach:

playerController
weapon
health

NetworkClient (empty entity)

Add Script → networkClient
Set serverUrl to your running server
Example:
ws://localhost:8080



GameManager (empty entity)

Add Script → gameManager


🎮 Controls

W / S — Move forward / backward
A / D — Rotate left / right
Left Mouse Button — Shoot

☁️ Deploying the Server (No Local Installation Needed)
If you cannot install Node.js locally, deploy the server using one of these:
✔ Replit (Fastest & Easiest)

https://replit.com
New Repl → Node.js
Upload:

server.js
package.json


Click Run
Copy the public WebSocket URL (e.g. wss://yourapp.username.repl.co)
Set PlayCanvas serverUrl to this.

✔ Railway.app (From GitHub Repo)

Push this repository to GitHub
Visit https://railway.app
New Project → Deploy from GitHub
Select this repo
Railway automatically deploys
Copy public WebSocket URL
Paste into PlayCanvas serverUrl


🧪 Testing Multiplayer
Test locally:

Start the server (node server.js)
Launch PlayCanvas
Open the Launch URL in two browser tabs
Both players appear in the arena

Test online:

Deploy server (Replit/Railway)
Set serverUrl to the public WSS address
Share your PlayCanvas Launch URL with friends


🛠 Troubleshooting
Client won’t connect to server

Check WebSocket URL formatting (ws:// or wss://)
Ensure the server is running
Check browser dev-console for errors

Players not syncing

Confirm both clients point to the same serverUrl
Ensure server logs show input messages

HTTPS page cannot connect to WS server

Use wss:// (secure WebSocket), not ws://


🗺 Roadmap
Potential improvements:

Server-side hit detection
Interpolation & lag compensation
Matchmaking / rooms
Better lighting & PBR materials
Audio + particle effects
Mobile joystick support

🙌 Credits
Built using:

PlayCanvas Engine (WebGL/WebGPU)
Node.js WebSocket (ws)