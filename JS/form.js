document.getElementById("contactForm").onsubmit = function (e) {
  e.preventDefault();

  // Get form values
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Store in session storage
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("message", message);

  // Alert user
  alert("Your message has been submitted!");

  // Clear form
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
};
