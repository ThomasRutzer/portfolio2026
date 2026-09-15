import { createUISFX, type UISFXPlayer } from "uisfx";

let instance: UISFXPlayer | null = null;

export function getSFX(): UISFXPlayer {
  instance ??= createUISFX({
    pack: "organic",
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

export function bindHoverFocusSFX(
  elements: Iterable<HTMLElement>,
  opts: {
    cue?: Parameters<UISFXPlayer["play"]>[0];
    skip?: (el: HTMLElement) => boolean;
  } = {},
): void {
  const { cue = "hover", skip } = opts;
  const sfx = getSFX();
  const canHover = window.matchMedia("(hover: hover)").matches;

  const play = (el: HTMLElement) => {
    if (!skip?.(el)) sfx.play(cue);
  };

  for (const el of elements) {
    if (canHover) el.addEventListener("pointerenter", () => play(el));
    el.addEventListener("focus", () => play(el));
  }
}
