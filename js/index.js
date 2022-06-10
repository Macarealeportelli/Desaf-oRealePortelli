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
        alert("Gracias por tu visita, esperamos que vuelvas pronto")
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

