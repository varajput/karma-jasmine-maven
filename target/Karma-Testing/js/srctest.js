/**
 * Created with IntelliJ IDEA.
 * User: vijay_rajput
 * Date: 6/19/14
 * Time: 3:01 PM
 * To change this template use File | Settings | File Templates.
 */

//TODO need to change approach

function fun1() {
        //console.log("Testing going on");
        var str = "How are you doing today?";
        var res = str.split(" ");
        return res.length;
}
function checkHeight() {
    var containerHeight = document.getElementById("mainContainer").scrollHeight;
    return containerHeight;
}