var namerror = document.getElementById("name-error");
var pgoneerror = document.getElementById("phone-error");
var emailerror = document.getElementById("email-error");
var submiterror = document.getElementById("submit-error");

function validateName() {
  var userName = document.getElementById("contact-name").value;
  if (userName.length == 0) {
    namerror.innerHTML = "Name is required";
    return false;
  }
  if (!userName.match(/^[A-Za-z]*s{1}[A-Za-z]*$/)) {
    namerror.innerHTML = "Write Fullname";
    return False;
  }
  namerror.innerHTML = "valid";
  return true;
}
