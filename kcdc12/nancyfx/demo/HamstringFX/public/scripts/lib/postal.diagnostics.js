postal.addWireTap(function(data, envelope) {
    var all = _.extend(envelope, { data: data });
    if(!JSON) {
        throw "This browser or environment does not provide JSON support";
    }
    try {
        console.log(JSON.stringify(all));
    }
    catch(exception) {
        try {
            all.data = "ERROR: " + exception.message;
            console.log(JSON.stringify(all));
        }
        catch(ex) {
            console.log("Unable to parse data to JSON: " + exception);
        }
    }
});