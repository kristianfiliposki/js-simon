
let container=document.getElementById("container");
let numeriCasuali=[];
let dati=44;

setTimeout(genNumb(numeriCasuali),5*1000)

function genNumb(arrey){
    for (let i = 0; i < 5; i++) {
        let numero=arrey[i]
        numero=(Math.floor(Math.random() * 100));
        arrey.push(numero);
        
        
    }
    console.log(arrey);
}

/*  scrivo i numeri generati */ 
/*  container.innerHTML=(genNumb(numeriCasuali))
 */

/* setTimeout(myfunction,4000);

 function myfunction(){
    console.log(`cioa mamma`)
}
 */



/* creon una funzione di numeri */
function reading(numeri){
    console.log(numeri)
}
/* tali dati appaiono dopo 3s */
setTimeout(reading(dati),3000);