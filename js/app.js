import { productos } from "./stock.js"
import { agregarACarrito } from "./carrito.js"

const mostrarProductos = (productos) => {
    const contenedorProdcuctos = document.getElementById('product-container')

    productos.forEach( producto => {
        const div = document.createElement('div')
        div.innerHTML += ` 
            <div class="card" style="width: 18rem;">
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
            alert(`se agregó producto ${producto.name}`)
        })
    })
}

mostrarProductos(productos)