var TEMP = function (str) {
    if (str.includes("Marvellous")) {
        return true;
    }
    return false;
};
var str = "Pune Kothrud Marvellous Infosystem";
if (TEMP(str)) {
    console.log("String contains Marvellous in it");
}
else {
    console.log("String DOES NOT contains Marvellous in it");
}
