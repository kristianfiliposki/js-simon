
let container=document.getElementById("container");
let numeriCasuali=[];
let numeriInseriti=[];
let numero1="";
let numero2="";
let numero3="";
let numero4="";
let numero5="";

function genNumb(arrey,elemento){
    for (let i = 0; i < 5; i++) {
        let numero=arrey[i]
        numero=(Math.floor(Math.random() * 100));
        arrey.push(numero);
    }
    let risultato=(elemento.innerHTML+=arrey);
    return risultato;
}

genNumb(numeriCasuali,container);
console.log(numeriCasuali)
setTimeout(function (){
    container.classList.add("hidden");  
},1000*2)


setTimeout(function (){
    let i = 0
    while (i < 5){
        let numero = numeriInseriti[i];
        numero=Number(prompt("scrivi il numero visualizzato"));
        numeriInseriti.push(numero);
        i++;}
    for (let i = 0; i < numeriInseriti.length; i++) {
        let numero = numeriInseriti[i];
            if(numeriCasuali.includes(numero)){
                console.log()
                console.log("è corretto")
            }
            else if(!(numeriCasuali.includes(numero))){
                alert("hai perso!")
            }
        }
    console.log(numeriInseriti);
},1000*2.3);

