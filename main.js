

/*** RACCOLGO GLI ELEMENTI HTML ***************************************************/

/* elemento contenitore */
const squareContaienr_El= document.getElementById("square-container");
console.log(squareContaienr_El);

/* elemento square */
//stringa contnetente elemento html costumizzato con le  variabili delle if 
let square 
/* color */
let squareColor
/* testo */
let squareText

/**** INIZIO CILCO FOR ******************************/
/* devo fare un contatore  che vada da 1 a 100. */

for(let i=1; i<=100; i++){
    console.log("i");
    squareText=i;
    squareColor= "bg-base";

    if (i % 3 === 0){    

        console.log(`${i % 3 === 0}`);
        squareText="fizz";
        squareColor= "bg-fizz";
    }

    
square = `<div class="square ${squareColor}">${squareText}</div>`;
/* stampo solo alla fine */
squareContaienr_El.innerHTML +=square;
}



/* if multiplo di 3 */
//if i%3===0 color
//  fizz




/* if multiplo di 5 */
//if i%5===0 color
// buzz

/* if multipli di 3 e 5 */
//if i%3===0 && //if i%5===0  
// fizzbuzz color

/* altrimenti numero */ 
//color 
//num


/* square= `<div class="square ${squareColor}"> ${i +1 }</div>` */


//}



//stampo una volta sola  ec.innerhtml= stringa + scritta + colore