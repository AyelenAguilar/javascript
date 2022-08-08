// RESERVA DE LUGAR EN LA FILA VIRTUAL PARA LA VENTA DE ENTRADAS DE UN CONCIERTO

const boton1= document.getElementById("campoVip")

boton1.addEventListener('click', () => {
    
    document.getElementById("campoVip").innerHTML=
    `<div> 
    <p>SECTOR: CAMPO VIP $15000 + 1000(gastos por servicio)</p>
    </div>`

})

const boton2= document.getElementById("campoTrasero")

boton2.addEventListener('click', () => {
    document.getElementById("campoTrasero").innerHTML=
    `<div> 
    <p>SECTOR: CAMPO TRASERO $12500 + 800(gastos por servicio)</p>
    </div>`
})

const boton3 = document.getElementById("platea")

boton3.addEventListener('click',() => {
    document.getElementById("platea"). innerHTML=
    `<div> 
    <p>SECTOR: PLATEA GENERAL $9000 + 500(gastos por servicio)</p>
    </div>`

} )

const botonReserva = document.getElementById("botonReserva")

botonReserva.addEventListener('click', () =>{
    document.getElementById("divForm")

    divForm.innerHTML = `
    <div class="form__index">
    <h2>¡Reserva tu lugar en la fila completando este formulario!</h2>
    <form class="row g-3">
    <div class="col-6">
    <label class="form-label" for="Nombre">Nombre</label>
    <input class="form-control" type="text" id="Nombre"></div>
    <div class="col-6">
    <label class="form-label" for="Apellido">Apellido</label>
    <input class="form-control" type="text" id="Apellido"></div>
    <div class="col-6">
    <label class="form-label" for="email">Correo electrónico</label>
    <input class="form-control" type="email" id="email"></div>
    <div class="col-6">
    <label class="form-label" for="numTel">Número de teléfono</label>
    <input class="form-control" type="text" id="numTel"></div>
    <div class="col-12">
    <button type="submit" class="btn btn-dark">Enviar</button></div>
    `
})




class datos{

    constructor(sector, precio, extra){
    this.sector= sector
    this.precio= precio
    this.extra= extra

    }
}

    const dato1= new datos("campo vip", 15000, 1000)
    const dato2= new datos("campo trasero", 12500, 800)
    const dato3= new datos("platea general", 9000, 500)

    const informacion=[dato1, dato2, dato3, ]
    console.table(informacion)
    console.log(informacion.length)

const precioEntradas=[
    {sector:'CAMPO VIP', precio: 15000, extra: 1000},
    {sector:'CAMPO TRASERO', precio: 12500, extra: 800},
    {sector:'PLATEA GENERAL', precio: 9000, extra: 500},
]

const buscar= precioEntradas.find((precioEntradas)=> precioEntradas.sector=== "PLATEA GENERAL")
const buscar2= precioEntradas.find((precioEntradas)=> precioEntradas.sector=== "CAMPO TRASERO")
console.log(buscar)
console.log (buscar2)





