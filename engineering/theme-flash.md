Theme Flash
────────────────────────

Requirement:
Persist user's theme preference.

Attempt #1:
useEffect + localStorage

Result:
Theme changes correctly after hydration,
but may flash the default theme first.

Root cause:
useEffect executes after the initial render/paint.

Next:
Move theme initialization earlier in
the browser rendering lifecycle.

Theme Flash — Attempt #2

Problem:
`next/script` with `beforeInteractive` ke baad bhi
refresh par light → dark flash visible hai.

Observation:
Theme preference localStorage mein hai, lekin
initial document rendering ke waqt server ke paas
localStorage ki information nahi hoti.

Important constraint:
localStorage is browser-only.

Therefore:

Server
↓
doesn't know user's saved theme

Browser
↓
knows theme only after client-side storage is available

# Theme Flash — Cookie-Based Solution

## Problem

The browser's localStorage is unavailable during
server rendering.

Therefore the server cannot know the user's saved
theme when generating the initial HTML.

## Previous Approach

localStorage + useEffect()

This caused a potential:

light → dark

transition after the initial page paint.

## Solution

Store the theme in a cookie.

The browser sends the cookie with the request:

Cookie: theme=dark

Next.js reads it using:

cookies()

The server then generates:

<html data-theme="dark">

## Architecture

Browser
↓
Cookie
↓
Next.js Server
↓
HTML
↓
CSS
↓
First Paint

## Result

The server knows the theme before rendering the
document, removing the dependency on client-side
hydration for initial theme selection.

# At the end we use ThemProvider and useTheme hook
