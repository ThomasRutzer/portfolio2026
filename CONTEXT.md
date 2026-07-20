# Portfolio

Thomas Rutzer's personal portfolio site. The domain is small: showcasing case studies through an accessible tab interface, with interaction details that reinforce the site's dual identity (architecture vs. engineering) and Thomas's background as a musician.

## Language

**Patch Cable**:
The visual cable connecting the active tab's output jack to the panel's fixed input jack, styled after a music-effect-board patch cable. Purely a visual/interactive reinforcement of which tab is active — not a separate state of its own.
_Avoid_: Wire, connector, link line

**Output Jack**:
The small circular socket on each tab (currently the footer dot in CaseTabs.astro) where a plug can be seated. Every tab has one; only the active tab's jack holds a seated plug.
_Avoid_: Tab handle, dot (when discussing behavior, not just the visual)

**Input Jack**:
The single fixed socket at the top of the panel area that the patch cable always terminates at. Its screen position never changes; only the panel content behind it changes when the active tab changes.
_Avoid_: Panel handle, target

**Plug**:
The draggable element seated in the active tab's output jack. Dragging the plug to a different tab's output jack and releasing it re-activates that tab, equivalent to clicking it. If released away from any jack, it snaps back to the previously active tab's jack.
_Avoid_: Handle, grip, endpoint

**Settle Wobble**:
The one-time elastic/spring-overshoot animation the patch cable plays when a plug seats into a jack (on click, keyboard activation, or drag-drop). Does not play continuously while idle, and is skipped entirely under `prefers-reduced-motion`.
_Avoid_: Bounce, physics
