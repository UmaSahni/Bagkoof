const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const personName = document.getElementById("personName").value;

  const personEmail = document.getElementById("personEmail").value;

  const personPassword = document.getElementById("personPassword").value;

  let obj = {
    name: personName,
    email: personEmail,
    password: personPassword,
  };

  fetch(`http://localhost:8080/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      myToast(data.msg);
    })
    .catch((err) => myToast(err));
});

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    console.log("Clicked here")
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  fetch(`http://localhost:8080/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      myToast(data.msg);
    })
    .catch((err) => myToast(err));
});

// Alert Notification
const myToast = (msg) => {
  Toastify({
    text: msg,
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      color: "black",
      background: "#fdd835",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
