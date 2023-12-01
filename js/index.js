const herramientas = [
    {referencia:"001", nombre:'Tornillo', precio:"800", disponibles:"100", vendidos:"3" },
    {referencia:"002", nombre:"Destornillador", precio:"10.000", disponibles:"100", vendidos:"15"},
    {referencia:"003", nombre:"Alicate", precio:"12.000", disponibles:"80", vendidos:"25"},
    {referencia:"004", nombre:"Matillo", precio:"25.000", disponibles:"100", vendidos:"2"},
    {referencia:"005", nombre:"Llave N10", precio:"7.000", disponibles:"75", vendidos:"20"},
    {referencia:"006", nombre:"Llave N11", precio:"6.000", disponibles:"60", vendidos:"11"},
    {referencia:"007", nombre:"Llave N12", precio:"7.000", disponibles:"85", vendidos:"23"},
    {referencia:"008", nombre:"Llave THOR", precio:"45.000", disponibles:"20", vendidos:"3"},
    {referencia:"009", nombre:"Porra", precio:"35.000", disponibles:"10", vendidos:"0"},
    {referencia:"010", nombre:"Bisturí", precio:"2.000", disponibles:"25", vendidos:"10"},
    {referencia:"011", nombre:"Cinta métrica", precio:"15.000", disponibles:"30", vendidos:"5"},
    {referencia:"012", nombre:"Destornillador de precisión", precio:"15.000", disponibles:"40", vendidos:"10"},
    {referencia:"013", nombre:"Escuadra", precio:"3.500", disponibles:"50", vendidos:"15"},
    {referencia:"014", nombre:"Pintura en aerosol", precio:"18.000", disponibles:"20", vendidos:"8"},
    {referencia:"015", nombre:"Sierra manual", precio:"22.000", disponibles:"15", vendidos:"3"},
    {referencia:"016", nombre:"Pala de jardín", precio:"30.000", disponibles:"5", vendidos:"2"},
    {referencia:"017", nombre:"Nivel de burbuja", precio:"7.500", disponibles:"60", vendidos:"18"},
    {referencia:"018", nombre:"Cepillo metálico", precio:"5.200", disponibles:"25", vendidos:"7"},
    {referencia:"019", nombre:"Pistola de silicona", precio:"12.500", disponibles:"35", vendidos:"12"},
    {referencia:"020", nombre:"Lima metálica", precio:"4.000", disponibles:"45", vendidos:"9"},
    {referencia:"021", nombre:"Serrucho", precio:"28.000", disponibles:"10", vendidos:"4"},
    {referencia:"022", nombre:"Taladro inalámbrico", precio:"55.000", disponibles:"8", vendidos:"2"},
    {referencia:"023", nombre:"Llave ajustable", precio:"9.000", disponibles:"55", vendidos:"21"},
    {referencia:"024", nombre:"Broca para concreto", precio:"6.500", disponibles:"70", vendidos:"30"},
    {referencia:"025", nombre:"Lámina de lija", precio:"2.500", disponibles:"90", vendidos:"40"},
    {referencia:"026", nombre:"Guantes de trabajo", precio:"7.800", disponibles:"65", vendidos:"28"},
    {referencia:"027", nombre:"Máscara de protección", precio:"14.000", disponibles:"30", vendidos:"10"},
    {referencia:"028", nombre:"Cerradura de seguridad", precio:"32.000", disponibles:"12", vendidos:"5"},
    {referencia:"029", nombre:"Clavos para madera", precio:"1.200", disponibles:"120", vendidos:"50"},
    {referencia:"030", nombre:"Cadena metálica", precio:"20.000", disponibles:"18", vendidos:"7"},
    {referencia:"031", nombre:"Pala de punta", precio:"32.000", disponibles:"8", vendidos:"2"},
    {referencia:"032", nombre:"Martillo de goma", precio:"15.000", disponibles:"20", vendidos:"5"},
    {referencia:"033", nombre:"Tijeras para chapa", precio:"6.500", disponibles:"35", vendidos:"12"},
    {referencia:"034", nombre:"Nivel láser", precio:"48.000", disponibles:"10", vendidos:"3"},
    {referencia:"035", nombre:"Sierra de mano", precio:"18.500", disponibles:"15", vendidos:"4"},
    {referencia:"036", nombre:"Cizalla para metal", precio:"22.000", disponibles:"5", vendidos:"1"},
    {referencia:"037", nombre:"Pico de loro", precio:"14.000", disponibles:"30", vendidos:"8"},
    {referencia:"038", nombre:"Brocha para pintura", precio:"3.200", disponibles:"40", vendidos:"18"},
    {referencia:"039", nombre:"Cincel para madera", precio:"7.000", disponibles:"25", vendidos:"6"},
    {referencia:"040", nombre:"Llave de tubo", precio:"9.800", disponibles:"55", vendidos:"17"},
    {referencia:"041", nombre:"Cinta aislante", precio:"2.500", disponibles:"70", vendidos:"22"},
    {referencia:"042", nombre:"Escalera de aluminio", precio:"85.000", disponibles:"8", vendidos:"3"},
    {referencia:"043", nombre:"Filtro para agua", precio:"30.000", disponibles:"12", vendidos:"6"},
    {referencia:"044", nombre:"Manguera para jardín", precio:"18.000", disponibles:"20", vendidos:"9"},
    {referencia:"045", nombre:"Pegamento para PVC", precio:"5.700", disponibles:"40", vendidos:"15"},
    {referencia:"046", nombre:"Llave hexagonal", precio:"4.500", disponibles:"60", vendidos:"28"},
    {referencia:"047", nombre:"Llave de cadena", precio:"10.200", disponibles:"22", vendidos:"7"},
    {referencia:"048", nombre:"Soplete de gas", precio:"27.000", disponibles:"18", vendidos:"5"},
    {referencia:"049", nombre:"Desatascador de cañerías", precio:"12.500", disponibles:"30", vendidos:"10"},
    {referencia:"050", nombre:"Alicates de corte", precio:"9.000", disponibles:"45", vendidos:"20"},
];
    
const elementosPorPagina = 10;
let paginaActual = 1;

function mostrarResultados(pagina) {
    const tabla = document.getElementById('tablaHerramientas');
    tabla.innerHTML = '';

    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    const herramientasPagina = herramientas.slice(inicio, fin);
    const fila1 = `
    <table>
      <thead>
       <tr>
        <td>REFERENCIA</td>
        <td>NOMBRE</td>
        <td>PRECIO</td>
        <td>DISPONIBILIDAD</td>
        <td>VENDIDOS</td>
        <td>IR</td>
       </tr>
      </thead>
    </table>
`;
tabla.innerHTML = fila1;
    for (let i = 0; i < herramientasPagina.length; i++) {
        
        const herramienta = herramientasPagina[i];
        const fila = `
        <table>
            <tbody>    
               <tr>
                <td>${herramienta.referencia}</td>
                <td>${herramienta.nombre}</td>
                <td>${herramienta.precio}</td>
                <td>${herramienta.disponibles}</td>
                <td>${herramienta.vendidos}</td>
                <td><button onclick='ver(${i})'>VER</button></td>
               </tr>
            </tbody>
        </table>
        `;
        tabla.innerHTML += fila;
    }
}

function mostrarPaginacion() {
    const paginacion = document.getElementById('paginacion');
    paginacion.innerHTML = ''; // Limpiar paginación

    const numPaginas = Math.ceil(herramientas.length / elementosPorPagina);

    for (let i = 1; i <= numPaginas; i++) {
        const boton = document.createElement('button');
        boton.innerText = i;
        boton.addEventListener('click', function() {
            paginaActual = i;
            mostrarResultados(paginaActual);
        });
        paginacion.appendChild(boton);
    }
}

mostrarResultados(paginaActual);
mostrarPaginacion();



function aplicarFiltros() {
    const filtroNombre = document.getElementById('filtroNombre').value.trim().toLowerCase();
    const filtroPrecio = document.getElementById('filtroPrecio').value.trim().toLowerCase();

    const herramientasFiltradas = herramientas.filter(herramienta => {
        const nombre = herramienta.nombre.toLowerCase();
        const precio = herramienta.precio.toLowerCase();

        const coincideNombre = nombre.includes(filtroNombre);
        const coincidePrecio = precio.includes(filtroPrecio);

        return coincideNombre && coincidePrecio;
    });

    mostrarResultadosFiltrados(herramientasFiltradas);
}

function limpiarFiltros() {
    document.getElementById('filtroNombre').value = '';
    document.getElementById('filtroPrecio').value = '';

    mostrarResultados(paginaActual);
}

function mostrarResultadosFiltrados(herramientasFiltradas) {
    const tabla = document.getElementById('tablaHerramientas');
    tabla.innerHTML = '';

    const fila1 = `
        <tr>
            <th>REFERENCIA</th>
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>DISPONIBILIDAD</th>
            <th>VENDIDOS</th>
            <th>IR</th>
        </tr>
    `;
    tabla.innerHTML = fila1;
    for (let i = 0; i < herramientasFiltradas.length; i++) {
        const herramienta = herramientasFiltradas[i];
        const fila = `
            <tr>
                <td>${herramienta.referencia}</td>
                <td>${herramienta.nombre}</td>
                <td>${herramienta.precio}</td>
                <td>${herramienta.disponibles}</td>
                <td>${herramienta.vendidos}</td>
                <td><button onclick="ver();">VER</button></td>
            </tr>
        `;
        tabla.innerHTML += fila;
    }
    // Volver a generar la paginación basada en los resultados filtrados
    mostrarPaginacion();
}
function capturarInformacion(posicion) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const herramienta = herramientas[posicion];
            resolve(herramienta);
        }, 1500);
    });
}

function ver(posicion) {
    capturarInformacion(posicion)
        .then((herramienta) => {
            sessionStorage.setItem('referencia', herramienta.referencia);
            sessionStorage.setItem('nombre', herramienta.nombre);
            sessionStorage.setItem('precio', herramienta.precio);
            sessionStorage.setItem('disponibles', herramienta.disponibles);
            sessionStorage.setItem('vendidos', herramienta.vendidos);
            window.location.href = 'detalle.html';
        })
        .catch((error) => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el array de herramientas almacenado en sessionStorage
    const herramientas = JSON.parse(sessionStorage.getItem('herramientas'));

    // Lógica para generar la tabla de herramientas con los datos actualizados
    // Usa el array 'herramientas' para mostrar la tabla actualizada
});
