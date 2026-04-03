function loginForm() {
  const form = document.querySelector("#loginForm");
  const message = document.querySelector("#message");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const identifier = document.querySelector("#identifier").value;
    const password = document.querySelector("#password").value;

    if (!identifier || !password) {
      message.textContent = "Fill all fields";
      return;
    }

    const data = { identifier, password };

    try {
      const response = await fetch("https://login-app-9ceq.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();
      message.textContent = result;
    } catch (err) {
      message.textContent = "Request failed";
    }
  });
}

loginForm();
