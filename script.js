// RESERVA DE LUGAR EN LA FILA VIRTUAL PARA LA VENTA DE ENTRADAS DE UN CONCIERTO

function entradas(){

    let precios
    do {
        precios= prompt('Elija una opción para ver los precios + gastos por servicio o reservar:\n\n 1.Campo vip \n 2.Campo trasero \n 3.Platea general \n 4. Reservar lugar en la fila').toLowerCase()
    
        if(precios==1){
            alert("CAMPO VIP $15000 + Gastos por servicio($1000)")
        }
        else if(precios==2){
            alert("CAMPO TRASERO $12500+ Gastos por servicio ($800)")
        }
        else if(precios==3){
            alert("PLATEA GENERAL $9000+ Gastos por servicio ($500)")
        }
        else if(precios==4){
            break
        }else{
            alert("Ingrese una de las opciones")
        }
        
    } while (precios !=4);

}

entradas()

let nombre= true
while(nombre){

    let nombre= prompt("Ingrese nombre y apellido").toLowerCase()
    let email= prompt("Ingrese un email").toLowerCase()

    alert(`Hola ${nombre}! \n En el lapso de 42hs te va a estar llegando un mail a ${email} con tu nro de lugar en la fila virtual para el dia de la venta oficial, gracias por elegirnos!`)
    break
    
}
