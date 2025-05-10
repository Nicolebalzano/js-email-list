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
const buttonElem = document.querySelector(".btn");



for (let i = 1; i <= 10; i++) {
    firstTenEmails = [];
    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((resp) => {   
    const email = resp.data.response;
    
setTimeout(() => {
    emailContainer.innerHTML += `<li class=" fs-4 mb-3">${email}</li>`;
   spinnerElem.classList.add("d-none");
    buttonElem.classList.remove("d-none");
}, 2000);   buttonElem.addEventListener("click", function(){
  firstTenEmails.push(email);
  console.log(firstTenEmails);
emailContainer.innerHTML = "";
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((resp) => {
    const nextEmail = resp.data.response;
   emailContainer.innerHTML += `<li class=" fs-4 mb-3">${nextEmail}</li>`;
   firstTenEmails.push(nextEmail);
  })
})   
})

}


