let herramientas = [
    {referencia:"001", nombre:'Tornillo', precio:"800", disponibles:"100", vendidos:"3"},
    {referencia:"002", nombre:"Destornillador", precio:"10.000", disponibles:"100", vendidos:"15"},
    {referencia:"003", nombre:"Alicate", precio:"12.000", disponibles:"80", vendidos:"25"},
    {referencia:"004", nombre:"Matillo", precio:"25.000", disponibles:"100", vendidos:"2"},
    {referencia:"005", nombre:"Llave N10", precio:"5.000", disponibles:"75", vendidos:"20"},
    {referencia:"006", nombre:"Llave N11", precio:"6.000", disponibles:"60", vendidos:"11"},
    {referencia:"007", nombre:"Llave N12", precio:"7.000", disponibles:"85", vendidos:"23"},
    {referencia:"008", nombre:"Llave THOR", precio:"45.000", disponibles:"20", vendidos:"3"},
    {referencia:"009", nombre:"Porra", precio:"35.000", disponibles:"10", vendidos:"0"},
    {referencia:"010", nombre:"Bisturí", precio:"2.000", disponibles:"25", vendidos:"10"},
];

let crearTabla= function(lista){
    let stringTabla= "<tr><th>Referencia</th><th>Nombre</th><th>Precio</th><th>Disponibles</th><th>Vendidos</th></tr>";
    for( let herramientas of lista){
        let fila= "<tr> <td>"
        fila+= herramientas.referencia;
        fila+="</td> "

        fila+= "<td>"
        fila+= herramientas.nombre;
        fila+="</td>"

        fila+= "<td>"
        fila+= herramientas.precio;
        fila+="</td>"

        fila+= "<td>"
        fila+= herramientas.disponibles;
        fila+="</td>"

        fila+= "<td>"
        fila+= herramientas.vendidos;
        fila+="</td>"

        fila+="</tr>";
        stringTabla+= fila;
        console.log(stringTabla);


    }
    return stringTabla;
}

document.getElementById("tablaHerramientas").innerHTML=crearTabla(herramientas);