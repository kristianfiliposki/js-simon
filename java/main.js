
let numeriCasuali=[];
let container=document.getElementById("container");
container.innerHTML=funzione;


function genNumb(arrey){
    for (let i = 0; i < 5; i++) {
        let numero=arrey[i]
        numero=(Math.floor(Math.random() * 100));
        arrey.push(numero);
        
    }
    return  arrey;
}

function hidden(elementoNascosto) {
    elementoNascosto.classList.add("hidden");
}


const funzione= genNumb(numeriCasuali);
setTimeout(hidden(container),  3000);
