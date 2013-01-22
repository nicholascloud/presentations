# 03 FiddlerScript

- FiddlerScript is based on JScript.NET
- classes, fields, properties, methods
- (optional) variable types
- namespaces from .NET BCL assemblies (and custom assemblies) can be imported and used
- add custom rules with the "FiddlerScript" tab
- external FiddlerScript editor with intellisense
- custom rules script saved in `C:\Users\[user]\Documents\Fiddler2\Scripts\Custom.js`

## Session handling functions

- `OnPeekAtRequestHeaders`: runs when the request headers have been read from the client
- `OnBeforeRequest`: runs when the request has been read, before it is sent to the server
- `OnPeekAtResponseHeaders`: runs when response headers have been read from the server
- `OnBeforeResponse`: runs after server response has been read, before it is sent to the client
- `OnReturningError`: runs when Fiddler generates an error message, before it is sent to the client

## General functions

- `Main`: runs after script has been compiled
- `OnRetire`: runs right before script is unloaded
- `OnBoot`: runs when Fiddler first starts
- `OnShutdown`: runs when Fiddler is shutting down
- `OnAttach`: runs when Fiddler register as WinINET proxy
- `OnDetach`: runs when Fiddler un-registers as WinINET proxy
- `OnExecAction`: runs when user enters a command in QuickExec, or when command is sent from `ExecAction.exe`

## Menu options

Use method/property attributes to add custom behavior to Fiddler menus.

`ToolsAction`: adds an item to the tools menu; applies to methods

```jscript
ToolsAction("Log selected session URIs")
static function LogRequestURI(sessions: Session[]) {
    if (sessions.length > 0) {
        var i = sessions.length;
        while (--i >= 0) {
            FiddlerObject.log(sessions[i].PathAndQuery);
        }
    }
}
```

`ContextAction`: adds an item to the session context menu; applies to methods

`RuleString` and `RuleStringValue`: adds a string option to the rules menu; applies to:

- string properties
- user will be prompted for a value if `%CUSTOM%` is specified as the value parameter of the `RuleStringValue` attribute

```jscript
RulesString("Set fancy pants response header", true)
RulesStringValue(0, "Default", "le fancy pants")
RulesStringValue(1, "Provide your own", "%CUSTOM%")
public static var fancyPantsHeader: String = null;

static function OnBeforeRequest(oSession: Session) {
    //...other conditions here...

    if (fancyPantsHeader != null && fancyPantsHeader.length > 0) {
        oSession.oRequest.headers.Add("X-Fancy-Pants", fancyPantsHeader);
    }
}
```

`RulesOption`: adds a boolean option to the rules menu; applies to boolean properties

## Setting breakpoints

Sometimes it can be convenient to set a request/response breakpoint in FiddlerScript.

```jscript
if (oSession.url.IndexOf('localhost') > -1) {
    oSession["X-BreakRequest"] = true;
}
```