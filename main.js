/*
import "./style.css"

import OBSWebSocket from "obs-websocket-js"

async function main() {
    const obs = new OBSWebSocket()
    await obs.connect({ address: "localhost:4444", password: "obscontroll" })
    console.log("connected")
}
main()
*/
const express = require("express");
const app = express();
const OBSWebSocket = require("obs-websocket-js");

const obs = new OBSWebSocket();

obs
  .connect({ address: "localhost:4444", password: "obscontroll" })
  .then(() => {
    console.log("Connecté à OBS");

    // Exemple de changement de scène
    obs
      .send("SetCurrentScene", { "scene-name": "Nom_de_votre_scène" })
      .then(() => {
        console.log("Scène changée avec succès");
      })
      .catch((err) => {
        console.error("Erreur lors du changement de scène :", err);
      });
  })
  .catch((err) => {
    console.error("Erreur de connexion à OBS :", err);
  });

// Code pour se connecter à OBS et changer les scènes...

// Exemple de route pour changer la scène en utilisant un endpoint HTTP
app.get("/changeScene/:sceneName", async (req, res) => {
  const sceneName = req.params.sceneName;
  try {
    await obs.send("SetCurrentScene", { "scene-name": sceneName });
    res.send(`Scène changée en ${sceneName}`);
  } catch (error) {
    res.status(500).send("Erreur lors du changement de scène");
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
