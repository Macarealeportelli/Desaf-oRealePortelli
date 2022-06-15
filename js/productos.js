let productos = []
let carrito = []
let IVA = 1.21

class Producto {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
}

function listarProductos() {
    console.table(productos)
} 

// function listarProductos() {
//     productos.forEach((producto)=>{
//         console.table(producto)
//     })
// }

function agregarProducto() {
    debugger
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let precio = parseInt(prompt("Ingresa el precio:"))
        productos.push(new Producto(id, nombre, precio))
}

function iterarArray() {
    debugger
    for (let producto of productos) {
        console.table(producto)
    }
}

function buscarProducto(){
    let aBuscar = prompt("Ingrese el nombre del producto a buscar")
    let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar))
    console.clear()
    console.table(resultado)
}


function creoID() {
    return parseInt(Math.random() * 10000)
}


generadorAutomatico()
//FUNCION QUE SE USA PARA LLENAR AUTOMÁTICAMENTE EL ARRAY DE OBJETOS A USAR
function generadorAutomatico() {
    productos.push(new Producto(1234, "CUADERNO FLOWERS", 600))
    productos.push(new Producto(2345, "AGENDA PICASSO", 2300))
    productos.push(new Producto(3456, "COMBO UNIVERSITARIO", 3000))
    productos.push(new Producto(4567, "COMBO PEDIÁTRICO", 2700))
    productos.push(new Producto(5678, "COMBO OFICINA", 4050))
    productos.push(new Producto(6789, "CUADERNO PINK", 1700))
    productos.push(new Producto(7890, "AGENDA MOON", 1900))
    productos.push(new Producto(7890, "AGENDA POCKET FLOWERS", 1400))
}

function generarCarrito() {
    carrito.push(new Producto(1234, "CUADERNO FLOWERS", 600))
    carrito.push(new Producto(2345, "AGENDA PICASSO", 2300))
    carrito.push(new Producto(3456, "COMBO UNIVERSITARIO", 3000))
}

let carritoPrecioFinal = []

const pFCarrito = () => {
    generarCarrito()
    for(let item of carrito) {
        precioFinal = item.precioFinal()
        carritoPrecioFinal.push(precioFinal)
    }
    return carritoPrecioFinal
}

const calcularCarrito = () => {
    pFCarrito()
   let suma = carritoPrecioFinal.reduce((total, value) => total + value)
      
    return console.log("Precio Final de Cada Producto: " + carritoPrecioFinal, "Total del Carrito:" + suma)
}