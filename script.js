function seleccionarProducto(nombreProducto) {const producto = document.getElementById("producto");

producto.value = nombreProducto;

document.getElementById("personaliza").scrollIntoView({
behavior: "smooth"});}


document.getElementById("formularioPedido").addEventListener("submit", function(event) 


{event.preventDefault();

const nombre = document.getElementById("nombre").value;

alert("¡Gracias, " + nombre +
"! Hemos recibido tu solicitud de personalización.");});