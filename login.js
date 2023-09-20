function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(email) && password === "suasenha") {
      window.location.href = "blogpessoal.html";
      return false;
  } else {
      alert("Email ou senha inválidos. Tente novamente.");
      return false;
  }
}