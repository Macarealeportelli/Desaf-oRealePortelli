import {productos} from './stock.js'

let cuadernoType = ['liso', 'rayado', 'punteado', 'cuadriculado']
let size = ['A6', 'A5', 'A4']
let agendaType = ['Semana a la vista', 'Dos días por hoja', 'Día por hoja']
let combos = ['Pediátricos', 'Universitarios', 'Oficina']

let type = ""

// definición de clase para luego listar los productos de la tienda
class Product{
    constructor(product, type, size) {
        this.product = product
        this.type = type
        this.size = size
    }
}

// próximamente los prompt de selección serán reemplazados por opciones de inputs del tipo select en html
// los confirm y los alert serán reemplazados por modales de confirmación
const iniciarCompra = () =>{
    let compra = confirm("Hola, bienvenid@ a CAHIER, desea adquirir algún producto?")

    if (compra) {
        elegirProducto()
    } else {
        Swal.fire({
            title: 'Gracias por tu compra!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}

const elegirProducto=()=>{
    let product = prompt("Elije una opción de producto: 1. Cuadernos 2. Agendas 3. Combos")
    selectType(product)
    confirmarCompra(product, type, size)
}

const selectType=(product)=>{
    if(product == 1 ) {
        type = prompt("Elegí una opción para el tipo de cuaderno: a. Liso, b. Rayado, c. Puntedo, d. Cuadriculado")
        selectSize()
        return type
    } else if (product == 2 ){
        type = prompt("Elegí una opción para el tipo de agenda: a. Semana a la vista, b. Dos días por hoja, c. Día por hoja")
        selectSize()
        return type
    } else {
        type = prompt("Elegí una opción para el tipo de combo: a. Pediátrico, b. Universitario, c. Oficina")
        return type
    }
}

const selectSize=()=>{
    size = prompt("Elegi una opción para el tamaño de tu cuaderno o agenda: 1. A6 (11x15cm), 2. A5 (15x21cm), 3. A4 (21x29,7cm)")
    return size
}

const confirmarCompra=(product, type, size)=>{
    if(size != "") {
        confirm("Esta fue tu selección: Producto: " + product + "Tipo: " + type +"Tamaño: "+ size + "Deseas continuar?")
    } else {
        confirm("Esta fue tu selección: Producto: " + product + "Tipo: " + type  + "Deseas continuar?")
    }
}

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

const listarProductos = (productos) => {
    console.table(productos)
} 

const agregarProducto = () => {
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

const buscarProducto = ()=>{
    let aBuscar = prompt("Ingrese el nombre del producto a buscar")
    let resultado = ''
    console.clear()
    if (aBuscar === aBuscar.toUpperCase()) {
        resultado = productos.find((producto)=> producto.name.includes(aBuscar))
        console.table(resultado)
        return resultado
    } else {
        console.log(aBuscar)
        let newABuscar= aBuscar.toUpperCase()
        resultado = productos.filter((producto) => producto.name.includes(newABuscar))
        console.table(resultado)
        return resultado
    }
}

const filtrarProductos = () => {
    let filtrar = prompt("Ingrese el producto a filtrar")
    let resultado = ''
    if (filtrar === filtrar.toUpperCase()) {
        resultado = productos.filter((producto) => producto.name.includes(filtrar))
        console.table(resultado)
        return resultado
    } else {
        // console.log(filtrar)
        let newFiltrar = filtrar.toUpperCase()
        resultado = productos.filter((producto) => producto.name.includes(newFiltrar))
        console.table(resultado)
        return resultado
    }
}

function creoID() {
    return parseInt(Math.random() * 10000)
}


// generadorAutomatico()
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

//funcion que agregará productos al carrito
// const agregarACarrito = () => {
//    let nuevoProducto = buscarProducto()
//    carrito.push(nuevoProducto)
//    return console.table(carrito) 
// }

export {filtrarProductos, buscarProducto}
