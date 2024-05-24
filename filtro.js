// Tenemos un li de productos

// Agregar punto y coma al final
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

//Cambiando a Id en lugar de Name
const listaProductos = document.getElementById("lista-de-productos");
const inputProducto = document.getElementById("inputProducto");
const btnFiltrar = document.getElementById("btnFiltrar");

// Función para mostrar productos en la lista
function mostrarProductos(array) {
  // Limpiar lista de productos antes de mostrar nuevos productos
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }
  
  for (let i = 0; i < array.length; i++) {
    const producto = array[i];
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);

    listaProductos.appendChild(divProducto);
  }
}

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);

// Filtrar productos al hacer clic en el botón
btnFiltrar.addEventListener("click", () => {
  const texto = inputProducto.value.toLowerCase();
  const productosFiltrados = filtrarProductos(productos, texto);
  mostrarProductos(productosFiltrados);
});

// Función para filtrar productos
function filtrarProductos(array, texto) {
  const productosFiltrados = [];
  for (let i = 0; i < array.length; i++) {
    const producto = array[i];
    if (
      producto.nombre.toLowerCase().includes(texto) ||
      producto.tipo.toLowerCase().includes(texto) ||
      producto.color.toLowerCase().includes(texto)
    ) {
      productosFiltrados.push(producto);
    }
  }
  return productosFiltrados;
}