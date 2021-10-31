(function getdata(){
    document.getElementById("email").innerHTML=localStorage.getItem("emailvalue");
    document.getElementById("fullname").innerHTML=localStorage.getItem("fullnamevalue");
    document.getElementById("phone").innerHTML=localStorage.getItem("phonevalue");
    document.getElementById("nationality").innerHTML=localStorage.getItem("nationalityvalue");
    document.getElementById("message").innerHTML=localStorage.getItem("messagevalue");
}());
