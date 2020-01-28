// Selektory wojewodztw
const dolnyslask = document.querySelector(".dolnyslask");
const swietokrzyskie = document.querySelector(".swietokrzyskie");
const gornyslask = document.querySelector(".gornyslask");
const malopolska = document.querySelector(".malopolska");
const wielkopolska = document.querySelector(".wielkopolska");
const opole = document.querySelector(".opole");
const mazowsze = document.querySelector(".mazowsze");
// Selektory UI
const showTime = document.querySelector(".showTime");
const plantSelect = document.querySelector("#plantSelect");
const timeSelect = document.querySelector("#timeSelect");

// Rośliny
const robinia = {start: 35, trwanie: 12, wystepowanie: 'polska'};
const lipa = {start: 55, trwanie: 10, wystepowanie: 'polska'};
const plants = [lipa, robinia];

// Województwa + opóźnienia klimatyczne
const wojewodztwa = {
    dolnyslask: 0,
    swietokrzyskie: 12,
    gornyslask: 1,
    malopolska: 10,
    wielkopolska: 2,
    opole: 3,
    mazowsze: 13,
    asd: 2,
}
// Pobierz dzisiejszą date
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
const oneDay = 1000 * 60 * 60 * 24;
const day = Math.floor(diff / oneDay);

// Konwersja na datę

let trM = [0, 31, 31+28, 31+31+28, 30+31+31+28, 31+30+31+31+28, 30+31+30+31+31+28, 31+30+31+30+31+31+28, 31+31+30+31+30+31+31+28, 30+31+31+30+31+30+31+31+28, 31+30+31+31+30+31+30+31+31+28, 30+31+30+31+31+30+31+30+31+31+28, 31+30+31+30+31+31+30+31+30+31+31+28];
let mieArr = [null, 'Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia']  
// rok przestępny
if (now.getYear() == 120 || now.getYear() == 124 || now.getYear() == 128 || now.getYear() == 132 || now.getYear() == 136 || now.getYear() == 140) 
{
    // dodaje 1 dzien do miesiecy od lutego
   for (let i = 2; i<13; i++){
       trM[i]+=1
   }
    timeSelect.setAttribute('max', 366)
}
console.log(trM[1],trM[2],trM[11])
// Dodaj datę do elementu input Range
timeSelect.setAttribute('value', day)

// 
let statePlant = plantSelect.value;
let stateTime = timeSelect.value;
let mie;
let dzi;
//
// INT do d/m
const presentTime = () => {
    stateTime = parseInt(timeSelect.value);
    for (let i = 0; i<12; i++){
        if (stateTime > trM[i] && stateTime<= trM[i+1]){
            dzi = stateTime - trM[i];
            mie = mieArr[i+1];
        }
    }
    showTime.innerHTML = `${dzi} ${mie}`
}



showTime.innerHTML = `${stateTime} dzień roku.`
// sprawdza dane i pokazuje na mapie
const porownaj = () => {
    presentTime();
    Object.entries(wojewodztwa).forEach(([key,value])=>{
        // oblicza czy kwitnie w danym czasie
        if(stateTime >= eval(statePlant).start + value && stateTime <= eval(statePlant).start + eval(statePlant).trwanie + value){
            eval(key).classList.add('kwitnie');
        } else {
            eval(key).classList.remove('kwitnie');
        }
    })
    
};

// zmienia czas
timeSelect.addEventListener("input", ()=>{
    
    porownaj();

});
// zmienia rosline
plantSelect.addEventListener("change", ()=>{
    statePlant = plantSelect.value;
    porownaj();
});
porownaj();