function add(){
    var a,b,x,y,z;
    x=document.getElementById("xxx").value;
    y=document.getElementById("yyy").value;
    a=parseInt(x);
    b=parseInt(y);
    z=a+b;
    document.getElementById("answer").innerHTML=z;
}
function sub(){
    var a,b,x,y,z;
    x=document.getElementById("xxx").value;
    y=document.getElementById("yyy").value;
    a=parseInt(x);
    b=parseInt(y);
    z=a-b;
    document.getElementById("answer").innerHTML=z;
}
function mult(){
    var a,b,x,y,z;
    x=document.getElementById("xxx").value;
    y=document.getElementById("yyy").value;
    a=parseInt(x);
    b=parseInt(y);
    z=a*b;
    document.getElementById("answer").innerHTML=z;
}
function div(){
    var a,b,x,y,z;
    x=document.getElementById("xxx").value;
    y=document.getElementById("yyy").value;
    a=parseInt(x);
    b=parseInt(y);
    z=a/b;
    document.getElementById("answer").innerHTML=z;
}