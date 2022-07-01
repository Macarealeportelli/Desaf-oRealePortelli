import {  productos } from './stock.js'

let carritoCompras = []
let carritoPrecioFinal = []

const guardoCarrito = () => {
    if (carritoCompras.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoCompras))
    }
}

const recuperoCarrito = () => {
    debugger
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))){
        miCarrito.forEach(producto => {
            carritoCompras.push(producto)
        })
    }
}
recuperoCarrito()

const removerDeCarrito = (producto) => {
    const productoARemover = document.getElementById(`${producto.id}`)
    productoARemover.remove()
    item = carritoCompras.indexOf(productoARemover.innerText)
    if (item >=0){
        carritoCompras.splice(item, 1)
        //guardoCarrito
    }
    console.warn(`${producto} ha sido eliminado del carrito`)
}

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
    guardoCarrito()
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

