import { Button } from "./Button.js";

/**
 * @param {import('obs-websocket-js')} obs
 * @param {string} sceneName
 */

export class SceneButton extends Button {
    constructor(obs, sceneName) {
    super();
    this.obs = obs;
    this.label = sceneName;
    this.sceneName = sceneName;
    }

    appendTo(element) {
        super.appendTo(element);
        this.obs.on('CurrentProgramSceneChanged', (data) => {
            this.active(data.sceneName === this.sceneName);
        });
    }

    onClick() {
        this.obs.call('SetCurrentProgramScene', {
            sceneName: this.sceneName
        });
    }
}
