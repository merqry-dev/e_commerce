window.onload = () => {
  let registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    getDataFromForm();
  });
};

function getDataFromForm() {
  const formData = new FormData(registerForm);
  let values = formData.values();
  validateUserID(values.next().value);
  validateEmail(values.next().value);
  validatePassword(values.next().value);
  let name = values.next();
  let address = values.next();
  let country = values.next();
  let zipCode = values.next();
  let sex = values.next();
  let language = values.next();
  let bio = values.next();
}

function validateUserID(userID) {
  const idMessage = document.getElementById("idMessage");
  if (!userID) {
    idMessage.innerText = "This field is required!";
    return;
  }
  let length = userID.length;

  if (length < 5) {
    idMessage.innerText = "userID has to have at least 5 characters!";
  } else if (length > 12) {
    idMessage.innerText = "userID has to be shorter than 13 characters!";
  } else if (userID.charAt(0).toLowerCase() == userID.charAt(0)) {
    idMessage.innerText = "userID has to start with a capital letter!";
  } else if (userID.charAt(length - 1).match(/[a-zA-Z\s]+/)) {
    idMessage.innerText =
      "userID has to end with a number or special character!";
  } else {
    idMessage.innerText = "Looks good!";
  }
}

function validateEmail(email) {
  const emailMessage = document.getElementById("emailMessage");
  if (!email) {
    emailMessage.innerText = "This field is required!";
    return;
  }

  if (
    email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailMessage.innerText = "Looks good!";
  } else {
    emailMessage.innerText = "This is not a valid e-mail!";
  }
}

//todo 
function validatePassword(password) {
  const passwordMessage = document.getElementById("passwordMessage");
  if (!password) {
    passwordMessage.innerText = "This field is required!";
    return;
  }
  let length = password.length;

  if (length < 12) {
    passwordMessage.innerText = "password has to be at least 12 characters!";
  } else if (password.match(/[a-zA-Z]+/)) {
    passwordMessage.innerText =
      "password has to contain numbers and special characters!";
  } else if (password.match(/[a-zA-Z0-9]+/)) {
    passwordMessage.innerText = "password has to contain special characters!";
  } else {
    passwordMessage.innerText = "Looks good!";
  }
}
