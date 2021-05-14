function validacion(user,pass){
  var userName = user.value;
  var password = pass.value

  if (isNaN(userName))
      {
        alert("Debe ingresar numero de dni valido.");
        return false;
        }
  
  if (password.length < 4) {
   alert("La contraseña debe tener al menos 4 digitos.")
   return false;
 }
 sessionStorage.setItem("nombre", userName)
}




 