

/*** RACCOLGO GLI ELEMENTI HTML ***************************************************/

/* elemento contenitore */
const squareContaienr_El = document.getElementById("square-container");
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

for (let i = 1; i <= 100; i++) {

    //console.log("i");
    /* valori di default assegnati alle variabili globali precndeti vengono riassegnate ad ogni if*/
    squareText = i;
    squareColor = "bg-base";

    /* se è sia multiplo di 3 che di 5  */
    //è prioritario metterlo in cima essendo le voci successive suoi sottoinsiemi (se posti in cima sottraggono alla if gli elementi, che quindi non vi entrano mai perchè non soddisfano entrambe le condizioni)

    if (i % 3 === 0 && i % 5 === 0) {
        //console.log(`${i % 3 === 0 && i % 5 === 0}`);
        squareText = `fizz<br>buzz`;
        squareColor = "bg-fizzbuzz";

    } else if (i % 3 === 0) {

        //console.log(`${i % 3 === 0}`);
        squareText = "fizz";
        squareColor = "bg-fizz";

    } else if (i % 5 === 0) {

        //console.log(`${i % 5 === 0}`);
        squareText = "buzz";
        squareColor = "bg-buzz";
    }
    /* l'elemento che verrà aggiunto avrà le caratteristiche definite in base alle if del ciclo */
    square = `<div class="square ${squareColor}">${squareText}</div>`;
    /* stampo solo alla fine */
    squareContaienr_El.innerHTML += square;
}
