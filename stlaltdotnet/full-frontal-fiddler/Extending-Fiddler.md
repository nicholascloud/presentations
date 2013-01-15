## Extending Fiddler

### FiddlerScript

- FiddlerScript is based on JScript.NET
- classes, fields, properties, methods
- (optional) variable types

- add custom rules with the "FiddlerScript" tab
- external FiddlerScript editor with intellisense
- custom rules script saved in `C:\Users\[user]\Documents\Fiddler2\Scripts\Custom.js`

#### Session handling functions

- `OnPeekAtRequestHeaders`: runs when the request headers have been read from the client
- `OnBeforeRequest`: runs when the request has been read, before it is sent to the server
- `OnPeekAtResponseHeaders`: runs when response headers have been read from the server
- `OnBeforeResponse`: runs after server response has been read, before it is sent to the client
- `OnReturningError`: runs when Fiddler generates an error message, before it is sent to the client

#### General functions

- `Main`: runs after script has been compiled
- `OnRetire`: runs right before script is unloaded
- `OnBoot`: runs when Fiddler first starts
- `OnShutdown`: runs when Fiddler is shutting down
- `OnAttach`: runs when Fiddler register as WinINET proxy
- `OnDetach`: runs when Fiddler unregisters as WinINET proxy
- `OnExecAction`: runs when user enters a command in QuickExec, or when command is sent from `ExecAction.exe`


### Extensions

### FiddlerCore

### Importer/Exporter Extensions

### Author extensions

http://getfiddler.com/addons

- JavaScript formatter