const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputTelefono = document.querySelector("#inputPhone")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")

let datosDeInput = ""

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosUser()
    Swal.fire({
        title: 'Gracias por tu compra!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    })
    setTimeout(function(){
        volver()
    }, 2000)
})

const volver = () => {
    window.location.href = '/index.html';
}

const guardarDatosUser = () => {
    // debugger
    const datosUser = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        email: inputEmail.value,
        telefono: inputTelefono.value
    }
    let str = JSON.stringify(datosUser)
    localStorage.setItem("datosUser", str)
}

const recuperarDatosUser = () => {
    if (localStorage.getItem("datosUser")){
        const datosUser = JSON.parse(localStorage.getItem("datosUser"))
        inputNombre.value = datosUser.nombre
        inputApellido.value = datosUser.apellido
        inputEmail.value = datosUser.email
        inputTelefono.value = datosUser.telefono
    }
    const carrito = JSON.parse(localStorage.getItem("carrito"))

    document.querySelector("#totalCarrito").innerText = JSON.parse(localStorage.getItem("totalCarrito"))

    // console.log(carrito)
    let listado = []
    for(let item of carrito){
        listado += item.name + " - "
        console.log(listado)
    }
    document.querySelector("#productosComprados").innerText = listado
}

recuperarDatosUser()