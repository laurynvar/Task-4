/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

fetch("./cars.json")
  .then((response) => response.json())
  .then((result) => {
    drawCards(result);
  })
  .catch((error) => console.error(error));

function drawCards(dataArray) {
  dataArray.forEach((data) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    cardWrapper.style.backgroundColor = "gray";
    cardWrapper.style.marginTop = "10px";

    const descriptionWrapper = document.createElement("div");
    descriptionWrapper.classList.add("description-wrapper");
    descriptionWrapper.style.padding = "10px";

    const brandEl = document.createElement("h2");
    brandEl.textContent = data.brand;
    brandEl.style.color = "white";

    const modelsEl = document.createElement("p");
    modelsEl.textContent = data.models;

    descriptionWrapper.append(brandEl, modelsEl);
    cardWrapper.append(descriptionWrapper);
    output.append(cardWrapper);
  });
}
