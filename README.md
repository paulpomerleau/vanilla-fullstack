---
test: Test
---

# Full‑stack Form Exercise

## Introduction
Let’s build together. This is a lightweight, collaborative exercise where you choose what to focus on and show your strengths. Depth over breadth is great—just explain your thinking as you go. You can stick with these files /deps or change things if it helps tell your story but keep it simple. 

## Edit these files
- public/index.html
- public/script.js
- public/style.css
- server/submission.js

## Quick start
- Node.js 18+
- npm install
- node main.js → http://localhost:3001
- Static files: public/ • API: POST /submission (JSON)

## Pick your path (choose any)
### HTML/CSS
- Make the form clear, tidy, and responsive
- Add helpful states (focus/invalid/success)
- Improve accessibility (labels, contrast, focus order)

### Client JS
- Validate inputs with inline errors
- Loading/disable submit; clear success state
- Handle server/network errors gracefully

### Server
- Validate and normalize input; return clear 400s
- Add simple logging and optional latency to test UX
- Prevent obvious duplicates or enforce a small rule

### Full‑stack polish
- Surface server‑side errors in the UI
- Sanitize any dynamic content
- Handle edge cases (long names, whitespace‑only, emoji)

### Advanced (optional)
- CSRF token (cookie + hidden input)
- Idempotency‑Key (UUID) to dedupe retries
- X‑Request‑Id + structured logs

## What we look for
- Thoughtfulness and collaboration: brief plan/assumptions, clear names, short rationale comments
- Code quality: simple structure, separation of concerns, defensive checks
- Correctness and error handling
- UX and accessibility
