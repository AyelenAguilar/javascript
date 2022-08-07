// RESERVA DE LUGAR EN LA FILA VIRTUAL PARA LA VENTA DE ENTRADAS DE UN CONCIERTO


const opciones= document.getElementById('opciones')


opciones.innerHTML=` <div class="card"><p id="campoVip">CAMPO VIP</p>
<button class="boton">Ver precios</button></div>
<div class="card"><p id="campoTrasero">CAMPO TRASERO</p>
<button class="boton">Ver precios</button></div>
<div class="card" ><p  id="platea">PLATEA GENERAL</p>
<button class="boton">Ver precios</button></div>
<div class="card"><p  id="reservar">RESERVAR LUGAR EN LA FILA</p>
<button class="boton">Reservar lugar en fila</button> </div>`



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





