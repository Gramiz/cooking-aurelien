import { SceneButton } from './SceneButton';
import './style.css';

import OBSWebSocket from 'obs-websocket-js';
console.log("Debut du programme");

async function main() {
  const obs = new OBSWebSocket();
  await obs.connect('ws://localhost:4455', '2H6Ffh1pCoBCSkno');
  console.log(obs);
  console.log("Connecter a OBS");
  const data = await obs.call("GetSceneList");
  console.log(data);

  for (const scene of data.scenes) {
    const button = new SceneButton(obs, scene.sceneName);
    button.appendTo(document.body);
    if (scene.sceneName === data.currentProgramSceneName) {
      button.active(true);
    }
  }


}
main();

