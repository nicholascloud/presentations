# 01 Fiddler sessions

- Fiddler registers itself as a WinINET proxy
- applications that use HTTP and respect WinINET will be proxied through Fiddler
- applications that do not use WinINET need to be configured manually (Firefox, curl, etc.)

## Capturing requests

- browser/non-browser
- process specific
- toggle capturing
- streaming mode (no buffering; request/response cannot be edited)
- decode (compressed sessions)
- `F12`: capture traffic

## Selecting sessions (subject to HTTP-Referer)

- `p`: select parent session
- `c`: select child session
- `d`: select duplicate sessions (url and HTTP method)
- `Shift+Del`: delete unselected sessions
- `Ctrl+x`: clear all sessions

## Marking sessions

- `Ctrl+1`: mark session(s) red
- `Ctrl+2`: mark session(s) blue
- `Ctrl+3`: mark session(s) gold
- `Ctrl+4`: mark session(s) green
- `Ctrl+5`: mark session(s) orange
- `Ctrl+6`: mark session(s) purple
- `Ctrl+0`: unmark session

## QuickExec commands

- `Alt+q`: activate QuickExec box
- `?{term}`: search sessions for a specific term (`?jquery`)
- `select {type}`: select sessions with a given content type (`select css`, `select image/png`)
- `@{host}`: select sessions from a particular host (e.g. `@localhost`)
- `={ResponseCode}`: select sessions with a specific response code (`=200`, `=404`)
- `={method}`: selection sessions with specific HTTP methods (`=get`, `=post`)
- `bold {term}`: makes session text __bold__ if it matches the specified term (`bold index.html`); only applies to new requests
- `about:config`: show Fiddler preferences
- `prefs log`: output all preferences to log window
- `prefs set {name} {value}`: set a Fiddler preference
- `prefs remove {name}`: remove a Fiddler preference

## Adding meta-data to sessions

- adding comments (`m`)
- attaching files (drag/drop)
- taking a screenshot (toolbar)

## Import/export sessions

File menu

- save/load archive
    - `.saz` file
- import/export sessions
    - HTML5 AppCache manifest
    - HTTP archive (JSON)
    - raw files

Right-click menu

- `Copy`
- `Save`