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
})

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
    // for (let i = 0 ; i< carrito.length ; i++) {
    //     document.querySelector("#productosComprados").innerText = carrito.join(" - ")
    // }

// para q esta parte funcione deberia recorrer el carrito y mostrar cada uno de los elementos,
// pero como es un objeto no me sale como desglosarlo :/
    document.querySelector("#productosComprados").innerText = carrito.join(" - ")
}

recuperarDatosUser()