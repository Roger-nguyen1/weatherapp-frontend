// Insert your code here
// let nameValue =
// let emailValue =
// let passwordValue =

document.querySelector("#register").addEventListener("click", function () {
  const user = {
    name: document.querySelector("#registerName").value,
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };
  fetch("https://weatherapp-backend-theta-dusky.vercel.app/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  const user = {
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };
  fetch("https://weatherapp-backend-theta-dusky.vercel.app/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});
