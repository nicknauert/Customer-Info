const peepCont = document.querySelector(".peepCont");
console.log(customers);

function popPeeps(picture, first, last, email, street, city, state, zip, phone){
  let div = document.createElement("div")

  let person = `
      <img src="${picture}">
      <h3>${first} ${last}</h3>
      <p id="email">${email}</p>
      <p>${street}</p>
      <p>${city}, ${state}, ${zip}</p>
      <p>${phone}</p>`;

  div.innerHTML = person;
  peepCont.appendChild(div);
}


function roster(){
    for (i=0; i<12; i++){
      popPeeps(customers.results[i].picture.large, customers.results[i].name.first, customers.results[i].name.last, customers.results[i].email, customers.results[i].location.street, customers.results[i].location.city, customers.results[i].location.state, customers.results[i].location.postcode, customers.results[i].phone);
  }
}
roster();
