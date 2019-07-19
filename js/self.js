var oDiv1 = document.getElementById("div1");
var oUl = document.getElementById("text1");
var oTe = document.getElementById("text2");
var oCancel = document.getElementById("cancel");
var oSend = document.getElementById("send");
var oIn = document.getElementById("in");
var oDiv = document.getElementById("div");

oIn.onclick = function (){
    oDiv1.style.display = "block";
    oDiv.style.display = "none";
}
oSend.onclick = function (){ 
    oUl.innerHTML += "<li>" + oTe.value + "</li>";
}
oCancel.onclick = function (){
    oTe.style.display = "none";
}