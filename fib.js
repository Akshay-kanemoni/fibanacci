

    var w=0;
var s=1;
var c;
var output="0"+" "+"1" +" ";
var n;

console.log(w);
console.log(s);

function Fibb()
{
    n=document.getElementById("txt1").valueAsNumber;
for(var i=0; i<n; i++)
{
    c=w+s;
    w=s;
    s=c;
    output=output+" "+ c;
    
    console.log(c);
}
document.getElementById('result').innerHTML=output;
}
