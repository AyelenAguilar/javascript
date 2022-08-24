const sect= document.getElementById("sect")

fetch("./json/sectores.json")
.then(response => response.json())
.then(sectores =>{
    sectores.forEach((sector, indice) =>{
        sect.innerHTML +=`
        <tr class="tabla">
        <th scope="row" id="sector${indice} class="cardNombre" "> ${sector.sector}</th>
        <td class="cardPrecio">$${sector.precio}</td>
        <td class="cardExtra">$${sector.extra}</td>
        <td>
        <button  class="boton comprarEntrada" >Comprar</button>
        </td>
        </tr>    
        `
    })
})


//arreglar el carrito de compras

const comprar=document.querySelectorAll('.comprarEntrada')
comprar.forEach(añadirBoton =>{
    añadirBoton.addEventListener('click', botonAgregar)
})

const container= document.querySelector('.carrito')

function botonAgregar(event){
    const boton=event.target;
    const table=boton.closest('.tabla');

    const cardNombre= table.querySelector('.cardNombre').textContent;
    const cardPrecio= table.querySelector('.cardPrecio').textContent;
    const cardExtra= table.querySelector('cardExtra').textContent;
    agregarAlCarrito(cardNombre, cardPrecio, cardExtra)
}

function agregarAlCarrito(cardNombre, cardPrecio, cardExtra){
    const carritoDeCompras= document.createElement('div');
    
    const agregarDiv=`
    
            <p>SECTOR:${cardNombre} ${cardPrecio} ${cardExtra} </p>
            `
    

    carritoDeCompras.innerHTML= agregarDiv;
    container.append(carritoDeCompras);
}


function botones(){

const verSectores= document.getElementById("verSectores")

verSectores.addEventListener('click',()=>{
    Swal.fire({
        imageUrl: 'imgsectores.jpg',
        imageHeight: 450,
        imageAlt: 'A tall image'
    })
})}
botones()

const compra= document.getElementById("botonCompra")

compra.addEventListener('click',() => {
    document.getElementById("divForm")
    divForm.innerHTML=
    `
    <div class="form__index">
    <h2>Ingresa tus datos</h2>
    <form class="row g-3">
    <div class="col-6">
    <label class="form-label"for="Nombre">Nombre</label>
    <input class="form-control"  id="nombre"  type="text" ></div>
    <div class="col-6">
    <label class="form-label"  for="Apellido">Apellido</label>
    <input class="form-control" id="apellido"  type="text"></div>
    
    <div class="col-6">
    <button  type="submit" id="enviar" class="btn btn-dark">Enviar</button></div>`

})

const arrayNombre=[]
const arrayApellido=[]

const enviar= document.getElementById("divForm")

divForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre=document.getElementById('nombre').value
    let apellido= document.getElementById('apellido').value
    const nombreUsuario= {nombre,apellido}
    const nombreApellido={apellido}

    arrayNombre.push(nombreUsuario, nombreApellido)

    localStorage.setItem('usuarios', JSON.stringify(nombreUsuario,nombreApellido))

JSON.parse(localStorage.getItem('usuarios'))

    Swal.fire({
        title: 'Está seguro/a que quiere confirmar la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Volver`,
        }).then((result) => {
        
        if (result.isConfirmed) {
        Swal.fire('Compra realizada exitosamente!', '', 'success')
        } else if (result.isDenied) {
        Swal.fire('La compra se ha interrumpido', '', 'error')
        }
    })
})




