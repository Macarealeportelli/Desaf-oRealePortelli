// let productos = []

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
    productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    productos.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
    productos.push(new Producto(4567, "IPAD PRO 12", 219890))
    productos.push(new Producto(5678, "LENOVO GAMER 15", 409090))
    productos.push(new Producto(6789, "MACBOOK PRO 15", 459000))
    productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800))
    //productos.push(new Producto(7890, "IPAD MINI 7.9", 189900))
}

function generarCarrito() {
    carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    carrito.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    carrito.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
}