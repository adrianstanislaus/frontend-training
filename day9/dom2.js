let validasi = function validateForm() {
    let username = document.forms["main-form"]["username"].value;
    let password = document.forms["main-form"]["password"].value;
    let confirmpassword = document.forms["main-form"]["confirmpassword"].value;
    let email = document.forms["main-form"]["email"].value;
    let confirmemail = document.forms["main-form"]["confirmemail"].value;
    if ((username == "") || (password == "") ||  (confirmemail == "") || (confirmpassword == "") || (email == "")) {
      alert("Terdapat field yang belum diisi");
      return false;
    }
    if(password !== confirmpassword){
    alert("Password tidak sesuai dengan konfirmasi");
      return false;
    }
    if(email !== confirmemail){
        alert("Email tidak sesuai dengan konfirmasi");
        return false;
    }

  } 

const form = document.getElementById('main-form');
form.onsubmit = validasi;
