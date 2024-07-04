function metrosCubicos(china, pesosMetros){
    return china * pesosMetros;
}

function kiloGramos(espania , pesosKilos){
    return espania * pesosKilos;
}

function bultosCantidas(estadosUnidos , pesosBultos){
    return estadosUnidos * pesosBultos;
}

function numeroDecimal(numero){
    return numero.toLocaleString('es-AR' ,{ minimunFractionDigits: 2 , maximunFractionDigits: 2});
}

//!Funcion de convertir
function convertir(){
    let pesosMetros = 20.32;
    let pesosKilos = 47.00;
    let pesosBultos = 68.26;

    let fleteChina = prompt('¿Querés saber el costo de tu flete internacional? \n Ingresá opción 1 para China \n Ingresá opción 2 para España \n Ingresá opción 3 para Estados Unidos');
    if (fleteChina === '1'){
        let china = parseFloat(prompt('Ingrese los metros cúbicos de su mercadería:'))
        if (isNaN(china) || china <= 0 ){
            alert('Por favor ingrese un valor correcto. Gracias');
        }
        let totalChina = metrosCubicos(china, pesosMetros);
        alert(`Su monto a abonar de ${china} mtrs3 son $ ${numeroDecimal(totalChina)}`);
    }else if (fleteChina === '2'){
        let espania = parseFloat(prompt('Ingrese los Kilos de su mercadería:'))
        if (isNaN(espania) || espania <= 0 ){
            alert('Por favor ingrese un valor correcto. Gracias');
        }
        let totalEspania = kiloGramos(espania, pesosKilos);
        alert(`Su monto a abonar de ${espania} Kg son $ ${numeroDecimal(totalEspania)} `)
    }else if (fleteChina === '3'){
        let estadosUnidos = parseFloat(prompt('Ingrese la cantidad de bultos:'));
        if (isNaN(estadosUnidos) || estadosUnidos <= 0){
            alert('Por favor ingresá un valor correcto. Gracias')
        }
        let totalEstadosUnidos = bultosCantidas (estadosUnidos, pesosBultos);
        alert(`Su monto a abonar de ${estadosUnidos} bultos son $ ${numeroDecimal(totalEstadosUnidos)}`)
    }else{
        alert('¡Opción no válida! \n Por favor ingrese la opción correcta')
    }
    }

    convertir()
