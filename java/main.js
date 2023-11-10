
let container=document.getElementById("container");
let numeriCasuali=[];

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


