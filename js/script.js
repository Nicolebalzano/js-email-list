// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// **Bonus**
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
// - Far sì che le email vengono stampati solo quando arrivano tutti i 10 email
const emailContainer = document.getElementById("contenitore-email");
const secondEmailContainer = document.getElementById("secondo-contenitore-email");
const spinnerElem = document.querySelector(".spinner-border");


for (let i = 1; i <= 10; i++) {
    firstTenEmails = [];
    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((resp) => {   
    const email = resp.data.response;
    
setTimeout(() => {
    emailContainer.innerHTML += `<li class="list-group-item list-group-item-action fs-2 mb-0">${email}</li>`;
   firstTenEmails.push(email);
   spinnerElem.classList.add("d-none");

}, 2000);      

// buttonElem.addEventListener ("click", moreEmails);
// function moreEmails(){
//      axios
//     .get("https://flynn.boolean.careers/exercises/api/random/mail")
// .then((resp) => {   
//     emailContainer.classList.add("d-none");
//     const secondListEmail = resp.data.response;
// secondEmailContainer.innerHTML += `<li>${secondListEmail}</li>`})

// }
})

}



