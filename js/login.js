const cleanDatos=()=>{
  document.getElementById("correo").value="";
  document.getElementById("contraseña").value="";
 const result= document.getElementById("result")
 result.innerHTML = "";
}



var usuarios = [
  { correo: 'dilan.naranjo@hotmail.com', contraseña: '12345678' },
  { correo: 'julian@hotmail.com', contraseña: '12345678' },
  { correo: 'prueba@hotmail.com', contraseña: '12345678' }
];

console.log("Usuario: " + usuarios[0].correo +" contraseña: "+ usuarios[0].contraseña);
console.log('Usuario: ', usuarios[1].correo +" contraseña: "+ usuarios[1].contraseña);
console.log('Usuario: ', usuarios[2].correo +" contraseña: "+ usuarios[2].contraseña);

function autenticarUsuario(correo, contraseña) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // busco en el array de usuarios
      var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.correo === correo && usuario.contraseña === contraseña;
      });

      // ya verifique que el correo y la contraseña coincidiera 
      if (usuarioEncontrado) {
        // Resolvemos la promesa con el usuario encontrado
        resolve(usuarioEncontrado);
      } else {
        // Rechazamos la promesa con un mensaje de error
        reject();
      }
    }, 2000); 
  });
}

document.getElementById('formulario').addEventListener('submit', function(IngresoUsuario) {
  IngresoUsuario.preventDefault();

  var correo = document.getElementById('correo').value;
  var contraseña = document.getElementById('contraseña').value;

  autenticarUsuario(correo, contraseña)
    .then(function(usuario) {
      console.log('Usuario autenticado:', usuario);
      window.location.href = 'home.html';
    })
    .catch(function(error) {
      alert('Usuario o contraseña no encontrado', error);
    });
});

  
  

  
  



