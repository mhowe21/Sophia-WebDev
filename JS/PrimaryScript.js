const subscribeButton = document.getElementById("subscribeButton");

subscribeButton.addEventListener("click", function () {
  let emailValue = document.getElementById("emailEntry").value;
  sessionStorage.setItem("email", emailValue);
  console.log(`${emailValue} was stored to session storage.`);
  alert("Thank you for subscribing!");
});
