var casa = {
    nombre : "Casa Alondras",
    capacidad : 12,
    ubicacion: "San Isidro",
    calle: "Paseo de las Alondras",
    disponible: true
}

console.log("prueba de conexion de scripts")

document.addEventListener('DOMContentLoaded', function(){
    fetch('scripts/inmuebles.json')
    .then(response => {
        if (!response.ok){
            throw new Error('Error al acceder a lista de inmuebles');
        }
        return response.json();
    })
    .then(data => {
        console.log('nombre',data.nombre);
    
document.getElementById('output').innerHTML =
 '<p><strong>Nombre:</strong> </p>' 
;
})
.catch(error => {
    console.error('Error:', error);
    document.getElementById('output').innerHTML = '<p>Error al cargar lso inmuebles</p>'
});
});
