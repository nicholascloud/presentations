/**
 * Created by IntelliJ IDEA.
 * User: Nicholas Cloud
 * Date: Jan 16, 2011
 * Time: 5:39:36 PM
 */

var getCurrentDate = function () {
    while (true) {
        var theDate = new Date();
        postMessage(theDate.toString());
    }
}
getCurrentDate();