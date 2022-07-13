// import { productos } from "./stock.js"
import { agregarACarrito } from "./carrito.js"
import { filtrarProductos, buscarProducto } from "./index.js"

const URL = 'js/productos.json'
const contenedorProdcuctos = document.getElementById('product-container')

const retornoProducto = (producto) => {
    const {img, name, description, price, id} = producto
    return `<div class="card" >
                <img src=${img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="mt-3 card-title">${name}</h4>
                    <p class="mt-3 card-text">${description}</p>
                    <h4 class="mt-3 card-text">$ ${price}</h4>
                    <button id=boton${id} class="btn-addToCart">Agregar a Carrito</button>
                </div>
            </div>`
}


const obtenerProductos = () => {
    let tarjetaAMostrar = ""
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            // for(let producto of data) {
            //     tarjetaAMostrar += retornoProducto(producto)
            //     contenedorProdcuctos.innerHTML = tarjetaAMostrar
            // }
            data.forEach( producto => {
                const div = document.createElement('div')
                div.innerHTML += ` 
                    <div class="card" >
                        <img src=${producto.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h4 class="mt-3 card-title">${producto.name}</h4>
                            <p class="mt-3 card-text">${producto.description}</p>
                            <h4 class="mt-3 card-text">$ ${producto.price}</h4>
                            <button id=boton${producto.id} class="btn-addToCart">Agregar a Carrito</button>
                        </div>
                    </div>
                    `
                //todo lo que respecta a la tarjetita del producto
                contenedorProdcuctos.appendChild(div)
        
                const boton = document.getElementById(`boton${producto.id}`)
                boton.addEventListener('click', () => {
                    agregarACarrito(producto.id)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Se agregó ${producto.name} al carrito`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            })
        })
}

obtenerProductos()


// const mostrarProductos = (productos) => {
//     const contenedorProdcuctos = document.getElementById('product-container')

//     productos.forEach( producto => {
//         const div = document.createElement('div')
//         div.innerHTML += ` 
//             <div class="card" >
//                 <img src=${producto.img} class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h4 class="mt-3 card-title">${producto.name}</h4>
//                     <p class="mt-3 card-text">${producto.description}</p>
//                     <h4 class="mt-3 card-text">$ ${producto.price}</h4>
//                     <button id=boton${producto.id} class="btn-addToCart">Agregar a Carrito</button>
//                 </div>
//             </div>
//          `
//         //todo lo que respecta a la tarjetita del producto
//         contenedorProdcuctos.appendChild(div)

//         const boton = document.getElementById(`boton${producto.id}`)
//         boton.addEventListener('click', () => {
//             agregarACarrito(producto.id)
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: `Se agregó ${producto.name} al carrito`,
//                 showConfirmButton: false,
//                 timer: 1500
//             })
//         })
//     })
// }

// mostrarProductos(productos)

const botonFiltrar = document.getElementById('filtrar-productos')
botonFiltrar.addEventListener('click', () => {
    filtrarProductos(obtenerProductos())
})

const botonBuscar = document.getElementById('buscar-productos')
botonBuscar.addEventListener('click', () => {
    buscarProducto(obtenerProductos())
})