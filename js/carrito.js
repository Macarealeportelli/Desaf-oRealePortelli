import {  productos } from './stock.js'

let carritoCompras = []

export const agregarACarrito = (productoId) => {
   const contenedorCarrito = document.getElementById('carrito')
    const renderProductoCarrito =()=>{
        let producto = productos.find( producto => producto.id == productoId )
        carritoCompras.push(producto)

        producto.cantidad = 1
        //condicional para q vea la cantidad de productos

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p> 
        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
        <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button> `
        
        contenedorCarrito.appendChild(div)
    }
}