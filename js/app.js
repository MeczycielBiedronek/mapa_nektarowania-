// Selektory wojewodztw
const dolnyslask = document.querySelector(".dolnyslask");
const swietokrzyskie = document.querySelector(".swietokrzyskie");
const gornyslask = document.querySelector(".gornyslask");
const malopolska = document.querySelector(".malopolska");
const wielkopolska = document.querySelector(".wielkopolska");
const opole = document.querySelector(".opole");
const mazowsze = document.querySelector(".mazowsze");
const asd = document.querySelector("#asd");


const showTime = document.querySelector(".showTime");

const robinia = {start: 35, trwanie: 12, wystepowanie: 'polska'};
const lipa = {start: 55, trwanie: 10, wystepowanie: 'polska'};
const plants = [lipa, robinia];

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
// Użytkownik określa rodzaj rośliny i czas
const plantSelect = document.querySelector("#plantSelect");
const timeSelect = document.querySelector("#timeSelect");
// 
let statePlant = plantSelect.value;
let stateTime = timeSelect.value;
//

// sprawdza dane i pokazuje na mapie
const porownaj = () => {
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
    stateTime = parseInt(timeSelect.value);
    showTime.innerHTML = `${stateTime} dzień roku.`
    porownaj();

});
// zmienia rosline
plantSelect.addEventListener("change", ()=>{
    statePlant = plantSelect.value;
    porownaj();
});
