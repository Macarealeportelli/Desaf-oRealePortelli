import {  productos } from './stock.js'

let carritoCompras = []
let carritoPrecioFinal = []
let contadorCarrito = document.getElementById('contador-carrito')

const guardoCarrito = () => {
    if (carritoCompras.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoCompras))
    }
}

export const agregarACarrito = (productoId) => {
    const contenedorCarrito = document.getElementById('carrito')
    const btnCalcularCarrito = document.getElementById('btn-calcularCarrito')
    const renderProductoCarrito = () => {
        let producto = productos.find( producto => producto.id == productoId )
        carritoCompras.push(producto)
        contadorCarrito.innerHTML = carritoCompras.length
        
        const calcularCantidad =()=>{
            let cantidad = 0
            let stock = producto.quantity
            if (producto.id) {
                cantidad ++
                producto.quantity = producto.quantity - 1
                if (stock === 0){
                    return Swal.fire({
                                position: 'top-end',
                                icon: 'warning',
                                title: `Sin stock`,
                                showConfirmButton: false,
                                timer: 1500
                             })
                } 
                return console.log(cantidad, producto.quantity)
            }
        }
        

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
        <img src=${producto.img} style="width: 60px; height: 60px" alt="...">
        <p>${producto.name}</p>
        <p>Precio: $ ${producto.price}</p> 
        `
        
        contenedorCarrito.appendChild(div)
    }
    renderProductoCarrito()
    guardoCarrito()
    console.table(carritoCompras)


    const pFCarrito = () => {
        let totalCarrito = 0
        let precioFinal = 0
        for(let item of carritoCompras) {
           precioFinal = item.price
            totalCarrito += precioFinal
        }
        return totalCarrito
    }
    btnCalcularCarrito.addEventListener('click', () => {
        let strCarrito = JSON.stringify(pFCarrito())
        localStorage.setItem("totalCarrito", strCarrito)
        window.location.href = "checkout.html"
    })
}

