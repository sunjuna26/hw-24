let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImage");
let qrtext = document.getElementById("qrtext");
let qrbutton = document.getElementById("qrbutton");

console.log(qrbutton)



 function generateQR(){
     qrImage.src =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
 }
 qrbutton.addEventListener("click", function(){ generateQR() });