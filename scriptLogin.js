document.addEventListener("DOMContentLoaded", function() {
  // Inicio de sesión por defecto
  document.getElementById("login-form").style.display = "block";
  
  // Cambiar entre los formularios de inicio de sesión y registro
  document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  });
// Login Here
  document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  });

  // Procesar el inicio de sesión
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    // Simulación de la lógica de autenticación (aquí se podria llamar a una API o hacer otras operaciones)
    var user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      alert("¡Inicio de sesión exitoso!");
      // Redireccionar al usuario a una página de inicio, etc.
    } else {
      document.getElementById("login-error-message").innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
  });

  // Función para procesar el registro
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("register-email").value;
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      document.getElementById("register-error-message").innerText = "Las contraseñas no coinciden.";
      return;
    }

    // Simulación de la lógica de registro (aquí se podria llamar a una API o hacer otras operaciones)
    if (localStorage.getItem(email)) {
      document.getElementById("register-error-message").innerText = "El correo electrónico ya está en uso.";
    } else {
      // Guardar el usuario en el almacenamiento local
      localStorage.setItem(email, JSON.stringify({ email: email, username: username, password: password }));
      alert("¡Registro exitoso! Por favor, inicia sesión con tu nueva cuenta.");
      // Redireccionar al usuario a una página de inicio, etc.
    }
  });
});
