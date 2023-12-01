const cleanDatos=()=>{
    document.getElementById("referencia").value="";
    document.getElementById("nombre").value="";
    document.getElementById("precio").value="";
    document.getElementById("disponibles").value="";
    document.getElementById("vendidos").value="";
   const result= document.getElementById("result")
   result.innerHTML = "";
  }


  document.addEventListener('DOMContentLoaded', function() {
    const referencia = sessionStorage.getItem('referencia');
    const nombre = sessionStorage.getItem('nombre');
    const precio = sessionStorage.getItem('precio');
    const disponibles = sessionStorage.getItem('disponibles');
    const vendidos = sessionStorage.getItem('vendidos');

    document.getElementById('referencia').value = referencia;
    document.getElementById('nombre').value = nombre;
    document.getElementById('precio').value = precio;
    document.getElementById('disponibles').value = disponibles;
    document.getElementById('vendidos').value = vendidos;
});
 
function Actualizar() {
    // Obtener los valores editados del formulario de actualización
    const referencia = document.getElementById('referenciaActualizar').value;
    const nombre = document.getElementById('nombreActualizar').value;
    const precio = document.getElementById('precioActualizar').value;
    const disponibles = document.getElementById('disponiblesActualizar').value;
    const vendidos = document.getElementById('vendidosActualizar').value;

    console.log("datos de la nueva herramienta:");

    // Obtener el array de herramientas almacenado en sessionStorage
    let herramientas = JSON.parse(sessionStorage.getItem('herramientas'));

    // Encontrar la herramienta correspondiente en el array
    const herramientaActualizada = herramientas.find(tool => tool.referencia === referencia);

    // Actualizar los valores de la herramienta encontrada
    if (herramientaActualizada) {
        herramientaActualizada.nombre = nombre;
        herramientaActualizada.precio = precio;
        herramientaActualizada.disponibles = disponibles;
        herramientaActualizada.vendidos = vendidos;

        // Actualizar el array en el almacenamiento local
        sessionStorage.setItem('herramientas', JSON.stringify(herramientas));
    }

    // Redirigir de vuelta a la página principal (index.html)
    window.location.href = 'index.html';
}



