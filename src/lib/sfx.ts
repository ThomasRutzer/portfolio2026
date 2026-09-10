import { createUISFX, type UISFXPlayer } from "uisfx";

let instance: UISFXPlayer | null = null;

export function getSFX(): UISFXPlayer {
  instance ??= createUISFX({
    pack: "mechanical",
    preferences: { key: "uisfx:preferences" },
  });

  const player = instance;
  return {
    ...player,
    play(cue, options) {
      void player.unlock();
      return player.play(cue, options);
    },
  };
}
