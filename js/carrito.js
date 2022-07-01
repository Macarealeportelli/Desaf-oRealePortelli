import {  productos } from './stock.js'

let carritoCompras = []
let carritoPrecioFinal = []

export const agregarACarrito = (productoId) => {
    const contenedorCarrito = document.getElementById('carrito')
    const btnCalcularCarrito = document.getElementById('btn-calcularCarrito')
    const renderProductoCarrito = () => {
        let producto = productos.find( producto => producto.id == productoId )
        carritoCompras.push(producto)

        producto.cantidad = 1
        //condicional para q vea la cantidad de productos

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
        <img src=${producto.img} style="width: 60px; height: 60px" alt="...">
        <p>${producto.name}</p>
        <p>Precio: $ ${producto.price}</p> 
        <p id="cantidad${producto.id}">Cantidad: 1 </p>
        <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button> `
        
        contenedorCarrito.appendChild(div)
    }
    renderProductoCarrito()
    console.table(carritoCompras)

    // calculamos precio final de productos y carrito
    // let precioFinal = (producto) => {
    //     return parseFloat((producto.price * IVA).toFixed(2))
    // }

    // const pFCarrito = () => {
    //     for(let item of carritoCompras) {
    //         precioFinal = item.precioFinal()
    //         carritoPrecioFinal.push(precioFinal)
    //     }
    //     return carritoPrecioFinal
    // }
    // btnCalcularCarrito.addEventListener('click', () => {
    //     pFCarrito()
    //     let suma = carritoPrecioFinal.reduce((total, value) => total + value)
        
    //     return console.log("Precio Final de Cada Producto: " + carritoPrecioFinal, "Total del Carrito:" + suma)
    // })
}


