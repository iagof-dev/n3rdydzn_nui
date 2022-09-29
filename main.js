
const barradevida = document.getElementById("barvida");

const barradecolete = document.getElementById("barcolete");


function pou(){
    if (barradecolete > 0){
        
        var valor = barradevida.style.width - 1;
        console.log(valor);
        colete(valor);
    }
    else{
        
    }
}



//dividir por 10

function vida(valor){
    barradevida.style.width = (valor/10) +"%";
    return barradevida
}
function colete(valor){
    barradecolete.style.width = (valor/10)+"%";
    return barradevida
}