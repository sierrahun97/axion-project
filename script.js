// script.js
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

function ingresar(boton_precionado) {
    // Captura del precio y la imagen
    const precioElement = boton_precionado.parentElement.nextElementSibling.querySelector('.precio');
    const precio = precioElement ? precioElement.innerText : '0';
    const imagen = boton_precionado.parentElement.querySelector('img').src;

    // Crear elementos del carrito
    const carritoItems = document.getElementById('carrito-items');
    const crearitem_carrito = document.createElement('div');
    const crearitem_precio = document.createElement('p');
    const crear_imagen = document.createElement('img');
    const cerrar_item = document.createElement('button');

    crearitem_carrito.classList.add('carrito-item');
    cerrar_item.innerText = "X";

    crearitem_precio.classList.add('precio'); // Añadir clase precio
    crearitem_precio.innerText = precio;
    crear_imagen.src = imagen;

    // Añadir elementos al carrito
    crearitem_carrito.appendChild(crear_imagen);
    crearitem_carrito.appendChild(crearitem_precio);
    crearitem_carrito.appendChild(cerrar_item);

    carritoItems.appendChild(crearitem_carrito);

    // Actualizar total del carrito
    total_carrito();
    eliminar(cerrar_item);
}

function eliminar(boton_eliminar) {
    boton_eliminar.addEventListener('click', () => {
        boton_eliminar.parentElement.remove();  
        total_carrito();
    });
}

function total_carrito() {
    const carrito = document.getElementById('carrito-items');
    const totalvruni = carrito.querySelectorAll('.precio');
    const totales_array = Array.from(totalvruni);

    let suma = 0;
    totales_array.forEach(element => {
        const valor = parseFloat(element.textContent.replace(/[^0-9.]/g, ''));
        if (!isNaN(valor)) {
            suma += valor;
        }
    });

    const totalapagar = document.getElementById('total');
    totalapagar.innerText = Total: $${suma.toFixed(2)};
}

document.addEventListener('DOMContentLoaded', function() {
    const carrito = document.getElementById('carrito');
    const toggleCarritoBtn = document.getElementById('toggle-carrito');

    toggleCarritoBtn.addEventListener('click', function() {
        // Toggle visibility of the carrito
        if (carrito.style.display === 'block') {
            carrito.style.display = 'none';
        } else {
            carrito.style.display = 'block';
        }
    });
});