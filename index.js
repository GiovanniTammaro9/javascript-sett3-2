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