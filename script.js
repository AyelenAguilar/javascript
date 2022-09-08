const sectores=[
    {sector:"CAMPO VIP",
    precio: 15000,
    extra: 1000,
    id: 1
},

    {sector:"CAMPO TRASERO",
    precio: 12500,
    extra: 800,
    id: 2
},

    {sector:"PLATEA GENERAL",
    precio: 9000,
    extra: 500,
    id: 3
}
]

//pinta el dom con mis datos
const pintarDom=document.getElementById('sect');
sectores.forEach((sector)=>{
    sect.innerHTML+=
    `<tr class="tabla">
    <th scope="row" class="titulo" > ${sector.sector}</th>
    <td class="precio" >$${sector.precio}</td>
    <td class="extra">$${sector.extra}</td>
    <td>
    <button id="btn" class="boton btn-izq" >Comprar</button>
    </td>
    </tr> `
})



const vaciarCarrito=document.getElementById('vaciarCarrito')
const mostrarCupones= document.getElementById('cupon')
const btn =document.querySelectorAll('.boton')
const carrito=[]
const carBody=document.getElementById('carBody')

btn.forEach(button=>{
    button.addEventListener('click', agregarAlCarrito)

})

function agregarAlCarrito(e){
    const botonAgregar= e.target
    const tabla= botonAgregar.closest('.tabla')
    const tablaTitulo= tabla.querySelector('.titulo').textContent
    const tablaPrecio= tabla.querySelector('.precio').textContent
    const tablaExtra= tabla.querySelector('.extra').textContent
    
    
    const entrada={
        titulo:tablaTitulo,
        precio:tablaPrecio,
        extra:tablaExtra,
        cantidad: 1,
        id:1
    }

    comprarEntrada(entrada)
}


function comprarEntrada(entrada){
    const inputElemento= carBody.getElementsByClassName('input')
    for(let i=0; i< carrito.length; i++){
        if(carrito[i].titulo.trim()===entrada.titulo.trim()){
            carrito[i].cantidad ++;
            const inputValue=inputElemento[i]
            inputValue.value ++;
            totalCompra()
            return null;
        }
    }



carrito.push(entrada)
Toastify({
    text: "Entrada añadida al carrito.",
    duration: 2000,
    stopOnFocus: true,
    close: true,
    gravity: "top",
    position: "right",
    style: {
        background: "rgba(235, 228, 219, 0.836)",
        color:"black",
        border: "1px solid",
    },
}).showToast(); 

crearCarrito()
}

//pintar el carrito

function crearCarrito(){
    carBody.innerHTML=''
    carrito.map(item=>{
        
        const div= document.createElement('div')
        
        carBody.innerHTML+=`
        <div id="row${item.id}">
        <th scope="row" > ${item.titulo}</th>
        <td >${item.precio} +</td>
        <td>${item.extra} =</td>
        <td class="table__cantidad">
        <input type="number" style="width: 50px"  min="1" value=${item.cantidad} class="input">
        <button id="borrar" class="delete btn btn-danger">x</button>
        </td>
        </div>
        `

        carBody.append(div)
        

})
totalCompra()

}

//Total de entradas

function totalCompra(){
let total=0
const totalCarrito= document.querySelector('.total')
carrito.forEach((item)=> {
    const precio= Number(item.precio.replace("$",''))
    const extra= Number(item.extra.replace("$",''))
    total= total + precio* item.cantidad+ extra*item.cantidad
})

totalCarrito.innerHTML=`Total $${total}`
}
// vaciar el carrito (arreglar)
const borrarCarrito=() =>{
    carrito=[]

    crearCarrito()
}
vaciarCarrito.addEventListener('click', borrarCarrito)



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

//muestra el formulario
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
    <label class="form-label"  for="Dni">DNI</label>
    <input class="form-control" id="dni"  type="text"></div>
    <div class="col-6">
    <label class="form-label"  for="tarjeta">Numero de tarjeta</label>
    <input class="form-control" id="nroTarjeta"  type="text"></div>
    
    <div class="col-6">
    <button  type="submit" id="enviar" class="btn btn-dark">Enviar</button></div>`

})

//Guarda los datos del formulario en el localStorage
const arrayLS=[]


const enviar= document.getElementById("divForm")

divForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre=document.getElementById('nombre').value
    let apellido= document.getElementById('apellido').value
    let dni= document.getElementById('dni').value
    let tarjeta= document.getElementById('nroTarjeta').value
    const datosUsuario= {nombre,apellido, dni, tarjeta}

    arrayLS.push(datosUsuario)

    localStorage.setItem('usuarios', JSON.stringify(datosUsuario))

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

//Uso de fetch para pintar cupones(arreglar img)
async function verCupones(){
    const response= await fetch('./json/cupones.json')
    const cuponDescuento= await response.json()
    return cuponDescuento
}

const pintarJson= async() =>{
    const cuponDescuento= await verCupones()
    cuponDescuento.forEach(cupon =>{
        mostrarCupones.innerHTML += `
        <div class="card mb-3" style id="${cupon.indice}""="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src=${cupon.imagen} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${cupon.titulo}</h5>
        <p class="card-text">${cupon.texto}</p>
        <p class="card-text"><small class="text-muted">Click en el botón para ver el código del cupón</small></p>
        <button class="botonCupon">Ver cupón</button>
        </div>
        </div>
        </div>
        </div>
        `

    })
}


pintarJson()





