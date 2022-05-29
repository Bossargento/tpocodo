function general_validation() {
    var nombre = document.forms["formulario"]["nombre"];
    var apellido = document.forms["formulario"]["apellido"];
    var email = document.forms["formulario"]["email"];

    if (nombre.value == "") {
      alert("Por favor insertar un nombre!");
      return false;
    }

    if (apellido.value == "") {
      alert("Por favor insertar un apellido!");
      return false;
    }

    if (email.value == "") {
      alert("Por favor insertar un email!");
      return false
    } else {
      // extraje la expresion regular del siguiente link de referencia: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email.value.match(validRegex)) {
        alert("El mensaje se ha enviado exitosamente!");
        document.formulario.email.focus();
        return true;
      } else {
        alert("Esto no es una direccion de mail");
        document.formulario.email.focus();
        return false;
      }
    }
  }
