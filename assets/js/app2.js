console.log('start--------------------------------------'); 
var var1 = '';
var i;
var j;
for (i = 1; i <= 5; i++) {
    var1 += '*';
    console.log(var1);
}
for (j = 1; j <= 5; j++) {
    var var2 = var1.substring(5, j);
    //var1 += var2
    console.log(var2);
}


console.log('--------------------------------------end'); 