var email = document.getElementById("email");
    var error = document.getElementById("error").value;

    function validate() {

      if (email.value == '' || email.value == null) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById('error').innerHTML = "Please enter a valid email address";


      }
      else if (!email.value.includes('@gmail.com')) {
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('error').innerHTML = "Please enter a valid email address";
      }

      else {

        document.getElementById("email").style.borderColor = "#4e71aa";
        document.getElementById("error").style.color = "green";

        document.getElementById('error').innerHTML = "Thanks for submission";


      }
    }
