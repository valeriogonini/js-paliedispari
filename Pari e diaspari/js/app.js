console.log("ciao");


//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

const PromptParola = prompt("Scegli tra pari o dispari")
const PromptNumero = parseInt(prompt("Inserisci un numero da 1 a 5"))

console.log(PromptParola, PromptNumero);




if (PromptNumero > 0 && PromptNumero <= 5 &&
    PromptParola === "pari" ||
    PromptParola === "dispari")

    function RandomNumber() {
        const randomNumberOne = parseInt(Math.floor(Math.random() * 5) + 1);
        return randomNumberOne;

    }

const random = RandomNumber()
console.log("Numero random", random);

const sum = PromptNumero + random;
console.log("Somma dei numeri", sum);


function ParieDispari() {
    const rest = sum % 2
    return rest
}

if (ParieDispari() === 0 && PromptParola === "pari") {
    console.log("HAI VINTO IL TUO NUMERO è PARI");
} else if (ParieDispari() !== 0 && PromptParola === "dispari")
    console.log("HAI VINTO IL TUO NUMERO è PARI");
else {
    console.log("Hai perso");
}


