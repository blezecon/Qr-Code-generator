let imgBox = document.getElementById("imgBox");
let qrCode = document.getElementById("qrCode");
let qrText = document.getElementById("qrText");


function generateQR(){
    if(qrText.value.length > 0){
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
    else{
        alert("Enter some text");
    }
}
