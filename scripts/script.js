
console.log("prueba de conexion de scripts")

async function cargarDatos () {
    const respuesta = await fetch('../scripts/inmuebles.json');
    const datos = await respuesta.json();

    const lista = document.getElementById('lista-inmuebles');

    datos.inmuebles.forEach(inmuebles => {
        const item = document.createElement('li')
        item.textContent = `${inmuebles.nombre} Con capacidad para ${inmuebles.capacidad} personas`
        lista.appendChild(item)
    });

    console.log(lista)
}

cargarDatos()

