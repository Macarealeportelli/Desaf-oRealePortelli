const modalContenedor = document.getElementById('modal-container');

const abrirCarrito = document.getElementById('open')

const cerrarCarrito = document.getElementById('cerrar')

const modalCarrito = document.querySelector('.modal-carrito')




abrirCarrito.addEventListener('click', () => {
    console.log('hiciste click para abrir carrito')
    modalContenedor.classList.remove('modal-active')
})

cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('modal-active')
})

modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})