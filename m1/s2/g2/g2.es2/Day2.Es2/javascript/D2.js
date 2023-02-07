/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*I principali datatype in JavaScript sono i seguenti:*/

let luogo = 'Roma';// Questa è una stringa ovvero una variabile che contiene dei caratteri alfanumerici.
console.log('il tipo di dato contenuto nella variabile luogo è '+ typeof luogo);


let numero = 10;//Questa variabile puo contenere caratteri numerici
console.log('il tipo di dato contenuto nella variabile numero è '+ typeof numero);


let booleano = true;//Questa variabile puo contenere booleani ovvero possono accettare solo 2 valori ovvero true o false, possono essere anche codificati da javascript con 0 e 1
 console.log('il tipo di dato contenuto nella variabile booleano è '+ typeof booleano);

 let persona ={
  nome:'Luca',
  cognome:'Praticò' 
 }
 console.log(persona);
 console.log('il tipo di dato contenuto nella variabile persona è ' + typeof persona);

 let giorniDellaSettimana = [
  'Lunedi',
  'Martedi',
  'Mercoledi',
  'Giovedi',
  'Venerdi',
  'Sabato',
  'Domenica',
];
console.log(giorniDellaSettimana);
console.log('il tipo di dato contenuto nella variabile giorni della settimana è '+ typeof giorniDellaSettimana);

 


 







/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = 'Luca';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 20
let somma = a + b
console.log(somma);



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//name = 'Praticò';




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 4;
let sottrazione = c - x;
console.log(sottrazione);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john';
let name2 = 'John';

console.log(name1 != name2);
name1 = name1.toLowerCase();

console.log(name1 == name2.toLowerCase());


