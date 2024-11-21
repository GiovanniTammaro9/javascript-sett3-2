const listaNumeriInteri = {
    titolo: "lista dei numeri interi",
    elementi: [
        "uno",
        "due",
        "tre"
    ]
};

const listaNumeriInteriinJson = JSON.stringify(listaNumeriInteri);
console.log(listaNumeriInteriinJson);

//utilizzo il JSON.parse
const oggettoJson = `{"nome": "mario"}`;
const oggettoReale = JSON.parse(oggettoJson);
console.log(oggettoReale.nome);

//manipolazione di dati JSON

let jsonString = `[{"nome": "Giovanni", "cognome": "Tammaro", "eta": "29"}, {"nome": "federica", "cognome": "longobardi", "eta": "27"}]`;
//converto la stringa in un array di oggetti
let persone = JSON.parse(jsonString);
//aggiungo una nuova persona all'array
persone.push({"nome": "ciro", "cognome": "de nicola", "eta": "42"});
//converto l'array aggiornato in una stringa JSON
let updatejsonString = JSON.stringify(persone);

console.log(updatejsonString);

//template 
let nome = "Giovanni";
let cognome = "Tammaro";

let stringa = `${nome} ${cognome}`;
console.log(stringa);

//stringa multilinea con template literals
let name = "giovanni";
let surname = "tammaro";
let eta = "29";
let città = "napoli";

let stringaMultilinea = `
name: ${name}
surname: ${surname}
eta: ${eta}
citta: ${città}
`;


console.log(stringaMultilinea);

// funzione con template literals

function creaStringaPersona(persona) {
    return `
    altezza: ${persona.altezza}
    hobbie: ${persona.hobbie}
    interessi: ${persona.interessi}
    `;
};

let persona = {
    altezza: "1.90",
    hobbie: "videogiochi",
    interessi: "calcio"

};

let StringaPersona = creaStringaPersona(persona);
console.log(StringaPersona);