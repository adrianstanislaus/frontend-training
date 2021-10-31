// Example starter JavaScript for disabling form submissions if there are invalid fields
function getData()
{
    //gettting the values
    var email = document.getElementById("email").value;
    var fullname= document.getElementById("fullname").value; 
    var phone= document.getElementById("phone").value; 
    var nationality= document.getElementById("nationality").value; 
    var message= document.getElementById("message").value;
    //saving the values in local storage
    localStorage.setItem("emailvalue", email);
    localStorage.setItem("fullnamevalue", fullname);
    localStorage.setItem("phonevalue", phone);
    localStorage.setItem("nationalityvalue", nationality);
    localStorage.setItem("messagevalue", message);

};

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
              getData()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()



