# Phase 6 popup view-model boundary

Phase 6 hardens the popup without changing what users can do. The popup still analyzes the active tab on open, refreshes on demand, stops observation when asked, and renders the same normalized `SiteAnalysis` results. The change is that popup state now flows through a small view-model layer before the Solid component updates signals.

This matters because future phases will add richer evidence and explanation data. The popup should not need to know whether a result came from direct detector evidence, relationship evidence, a compiled registry, or a later replayable evidence store. It should receive a UI-shaped answer: what to render, whether to poll, which detections are newly observed, and what status copy to show.

The new dependency direction is:

```text
BackgroundApi response
        │
        ▼
lib/popup/view-model.ts
        │
        ├─► observation mode: idle | active | stopped | unknown
        ├─► grouped detections by primary category
        ├─► late-detection markers
        └─► user-visible notice text
        │
        ▼
entrypoints/popup/App.tsx
```

Read the diagram from top to bottom. The background still owns active-tab analysis and observation sessions. The view-model layer translates that response into the narrower vocabulary the popup needs. `App.tsx` remains responsible for Solid lifecycle, button handlers, timers, and rendering.

## What moved out of `App.tsx`

`App.tsx` no longer owns the rules for grouping detections, mapping content-session status to popup state, deciding whether observed page changes need a refresh, or formatting application errors. Those rules now live in `src/lib/popup/view-model.ts` and have direct unit coverage in `src/tests/popup/view-model.test.ts`.

This keeps the popup honest about the current simplifications:

- Detections are still grouped by their first category only.
- Cache hits without an active observation session still show an idle polling state.
- Fresh responses without an active session still show stopped observation copy.
- `observing` and `dirty` content-session states are the only states that keep popup polling active.
- Late detection markers compare the previous rendered analysis against the next rendered analysis.

Those are compatibility rules, not final product claims. Later UI work can change them deliberately after tests describe the old behavior.

## What stayed inside `App.tsx`

The Solid component still owns work that depends on component lifetime:

- popup mount and cleanup
- `setInterval` creation and cleanup
- calls to `BackgroundApi`
- button pending state
- storing the currently rendered analysis
- rendering the component tree

Keeping those in `App.tsx` avoids a false abstraction. The view-model is pure translation logic; it does not hide asynchronous RPC or timer ownership.

## Accessibility and async state

The popup now marks the shell with `aria-busy` while user-visible refresh work is pending, announces recoverable errors through `role="alert"`, and announces non-error notices through `role="status"` with polite live updates. These are small changes, but they make the existing refresh and observation states more legible without redesigning the layout.

## Out of scope

Phase 6 does not add explanation UI, graph-aware rendering, streaming event updates, background ports, new permissions, or a stable tab/session handle. The popup still talks to the current background API, which targets the currently active tab.

## Review checklist

Before accepting popup changes after this phase, verify:

- cache-hit responses map to idle observation state when there is no session
- fresh observing responses start popup polling
- dirty sessions can trigger automatic refresh
- stopped sessions stop popup polling
- unsupported URLs render a recoverable error
- late detections are marked without duplicating existing markers
- manual refresh still clears old late markers before applying new output
