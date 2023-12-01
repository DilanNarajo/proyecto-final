
const cleanDatos=()=>{
  document.getElementById("correo").value="";
  document.getElementById("contraseña").value="";
 const result= document.getElementById("result")
 result.innerHTML = "";
}

var usuarios = [
  { correo: 'dilan.naranjo@hotmail.com', contraseña: 'Dilan123' },
  { correo: 'julian@hotmail.com', contraseña: '12345678' },
  { correo: 'prueba@hotmail.com', contraseña: '12345678' }
];

console.log("Usuario: " + usuarios[0].correo +" contraseña: "+ usuarios[0].contraseña);
console.log('Usuario: ', usuarios[1].correo +" contraseña: "+ usuarios[1].contraseña);
console.log('Usuario: ', usuarios[2].correo +" contraseña: "+ usuarios[2].contraseña);

function validarContraseña(contraseña, correo) {
  let errores = [];

  if (contraseña.length < 8  ) {
    errores.push('La contraseña debe tener al menos 8 caracteres.');
  }

  if (!/[A-Z]/.test(contraseña )) {
    errores.push('La contraseña debe contener al menos una mayúscula.');
  }

  if (!/\d/.test(contraseña) ) {
    errores.push('La contraseña debe contener al menos un número.');
  }
  return errores;

}

function autenticarUsuario(correo, contraseña) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // busco en el array de usuarios
      var validacion = validarContraseña(contraseña);

      

      var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.correo === correo && usuario.contraseña === contraseña;
      });

      if (usuarioEncontrado) {
        resolve(usuarioEncontrado);
      } else {
        reject('Usuario o contraseña no encontrados.');
      }
    }, 2000);
  });
}document.getElementById('formulario').addEventListener('submit', function(IngresoUsuario) {


  IngresoUsuario.preventDefault();

  var correo = document.getElementById('correo').value;
  var contraseña = document.getElementById('contraseña').value;

  autenticarUsuario(correo, contraseña)
    .then(function(usuario) {
      console.log('Usuario autenticado:', usuario);
      window.location.href = 'home.html';
    })
    .catch(function(error) {
      alert( error);
    });
});

  
  

  
  



