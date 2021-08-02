const constraints = {
    name: {
        presence: { allowEmpty: false }
    },
    email: {
        presence: { allowEmpty: false },
        email: true
    },
    subject: {
        presence: { allowEmpty: false },
    },
    message: {
        presence: { allowEmpty: false }
    }
};
const form = document.getElementById("contact-form");

function emailValidate(event) {
    event.preventDefault();
    const formValues = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        subject: form.elements.subject.value,
        message: form.elements.message.value,
        contact: form.elements.contact.value,
    };

    const errors = validate(formValues, constraints);
    
    if (errors) {
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) { return fieldValues.join(', ')})
            .join("\n");
        alert(errorMessage);
        return false;
    }
    let lastMailTS = getCookie("lastMailTS");
    let curTSInSec = Math.floor(new Date().getTime() / 1000);
    if (!lastMailTS || curTSInSec - lastMailTS > 180) {
        console.log("will ajax");
        $.ajax({
            url: "message.php",
            type: "POST",
            data: formValues,
            // dataType: "json",
            success: function(response, status, xhr) {
                var resObj = JSON.parse(response);
                alert(resObj["message"]);
                const d = new Date();
                d.setTime(d.getTime() + 1*24*60*60*1000);
                let expires = "expires="+ d.toUTCString();
                document.cookie = "lastMailTS=" + Math.floor(new Date().getTime() / 1000) + ";" + expires + ";path=/";
            },
            error: function(xhr, status, error) {
                alert("Something went wrong on the server side, please try again later");
            }
          });
          $("#contact-form input:not(input[type='submit']), #contact-form textarea").each(function(index) {
              $(this).val("");
          });
    } else {
        alert("Please wait " + (180 - (curTSInSec - lastMailTS)) + " seconds to send another email.");
    }
    return false;
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }