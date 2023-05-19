function validateForm() {
    var name = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var hombre= document.getElementById("Hombre").value;
    var mujer = document.getElementById("Mujer").value;
    var termCon = document.getElementById("termCon").value;
    var errorDiv = document.getElementById("errorDiv");
    
     if (name === "" || apellido === "" || hombre ==="" || mujer ==="" || termCon === "") {
         errorDiv.textContent = "Por favor, complete los campos.";
         return false;
     }

    errorDiv.textContent = "";
    alert("¡Formulario enviado correctamente!");
    return true;
}