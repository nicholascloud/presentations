## Fiddler basics

### Capturing requests

- browser/non-browser
- process specific
- toggle capturing

Seeing requests/responses in the session list

Inspecting requests with the "inspectors" tab

- headers
- syntax
- json

Automatically responding with the "AutoResponder" tab

Composing a new request based on an old one with the "Composer" tab

Viewing request timeline with the "Timeline" tab

QuickExec commands

- `Alt+q`: activate QuickExec box
- `?{term}`: search sessions for a specific term (`?jquery`)
- `select {type}`: select sessions with a given content type (`select css`, `select image/png`)
- `@{host}`: select sessions from a particular host (e.g. `@localhost`)
- `={ResponseCode}`: select sessions with a specific response code (`=200`, `=404`)
- `={method}`: selection sessions with specific HTTP methods (`=get`, `=post`)
- `bold {term}`: makes session text __bold__ if it matches the specified term (`bold index.html`); only applies to new requests

Saving and loading sessions

- adding comments
- attaching files

Using the "TextWizard" to compose strings that are painful to do by hand




#### Filtering and marking sessions

Filtering requests with the "Filters" tab

Selecting sessions (subject to HTTP-Referer)

- `p`: select parent session
- `c`: select child session
- `d`: select duplicate sessions (url and HTTP method)
- `Shift+Del`: delete unselected sessions

Marking sessions

- `Ctrl+1`: mark session(s) red
- `Ctrl+2`: mark session(s) blue
- `Ctrl+3`: mark session(s) gold
- `Ctrl+4`: mark session(s) green
- `Ctrl+5`: mark session(s) orange
- `Ctrl+6`: mark session(s) purple
- `Ctrl+0`: unmark session


#### Saving session data

TODO

Right-click menu

- `Copy`
- `Save`

#### Replaying sessions

TODO

Import/export sessions