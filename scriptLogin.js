document.addEventListener("DOMContentLoaded", function() {
  // Mostrar el formulario de inicio de sesión por defecto
  document.getElementById("login-form").style.display = "block";
  
  // Función para cambiar entre los formularios de inicio de sesión y registro
  document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  });

  document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  });

  // Función para procesar el inicio de sesión
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Simulación de la lógica de autenticación (aquí podrías llamar a una API o hacer otras operaciones)
    var user = JSON.parse(localStorage.getItem(username));
    if (user && user.password === password) {
      alert("¡Successful login!");
      // Redireccionar al usuario a una página de inicio, etc.
    } else {
      document.getElementById("login-error-message").innerText = "Incorrect credentials. Try again.";
    }
  });

  // Función para procesar el registro
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      document.getElementById("register-error-message").innerText = "Passwords do not match.";
      return;
    }

    // Simulación de la lógica de registro (aquí podrías llamar a una API o hacer otras operaciones)
    if (localStorage.getItem(username)) {
      document.getElementById("register-error-message").innerText = "The username is already in use.";
    } else {
      // Guardar el usuario en el almacenamiento local
      localStorage.setItem(username, JSON.stringify({ username: username, password: password }));
      alert("Successful registration! Please log in with your new account.");
      // Redireccionar al usuario a una página de inicio, etc.
    }
  });
});
