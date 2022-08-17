// COMPRA DE ENTRADAS DE UN CONCIERTO

class Datos{

    constructor(sector, precio, extra){
    this.sector= sector
    this.precio= precio
    this.extra= extra
    }
}

    const dato1= new Datos("SECTOR: campo vip", "$15000","+$1000")
    const dato2= new Datos("SECTOR: campo trasero", "$12500", "+$800")
    const dato3= new Datos("SECTOR: platea general", "$9000","+$500")
    

    const informacion=[dato1, dato2, dato3]

function botones(){

const boton1= document.getElementById("campoVip")

boton1.addEventListener('click', () => {
    
    document.getElementById("campoVip").innerHTML=
    `<div> 
    <p>${dato1.sector}${dato1.precio}${dato1.extra}</p>
    </div>`

})

const boton2= document.getElementById("campoTrasero")

boton2.addEventListener('click', () => {
    document.getElementById("campoTrasero").innerHTML=
    `<div> 
    <p>${dato2.sector} ${dato2.precio} ${dato2.extra}</p>
    </div>`
})

const boton3 = document.getElementById("platea")

boton3.addEventListener('click',() => {
    document.getElementById("platea"). innerHTML=
    `<div> 
    <p>${dato3.sector} ${dato3.precio} ${dato3.extra}</p>
    </div>`

} )

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
    `<div class="form__index">
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



//carrito de compra de entradas 
const entradas=[
    {sector:'CAMPO VIP',
    precio: 15000,
    extra: 1000,
    cantidad: 1
},

    {sector:'CAMPO TRASERO',
    precio: 12500,
    extra: 800,
    cantidad: 1
},

    {sector:'PLATEA GENERAL',
    precio: 9000,
    extra: 500,
    cantidad: 1
}
]



