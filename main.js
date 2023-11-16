import "./style.css"

import OBSWebSocket from "obs-websocket-js"

async function main() {
    const obs = new OBSWebSocket()
    await obs.connect({ address: "localhost:4444", password: "obscontroll" })
    console.log("connected")
}
main()
