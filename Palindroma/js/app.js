//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma:
//la funzione deve ritornare true se la parola è palindroma
//deve ritornare false se la parola non è palindroma
//alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

const ParolaUtente = prompt("Inserire una parola")

const arreyRow = []

for (let i = 0; i < ParolaUtente.length; i++) {
    const IndexParola = ParolaUtente[i]
    arreyRow.push(IndexParola)
}
console.log(arreyRow);

const arreyRowReverse = []

for (let j = ParolaUtente.length - 1; j >= 0; j--) {
    const IndexParolaReverse = ParolaUtente[j]
    arreyRowReverse.push(IndexParolaReverse)
}
console.log(arreyRowReverse);


function PalidromaParola(ParolaUtente1, ParolaUtente2) {
    let result = false
    for (let i = 0; i < ParolaUtente.length; i++) {
        if (ParolaUtente1[i] === ParolaUtente2[i]) {
            
            result = true
        }



    }
    if ( result === true ){
        console.log("La parola è palindroma");
    } else {
        console.log("La parola non è palindroma");
    }
    return result
}
 const palidromo = PalidromaParola(arreyRow, arreyRowReverse)
 console.log(palidromo);


