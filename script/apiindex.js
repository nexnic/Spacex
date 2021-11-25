const urlC = "https://api.spacexdata.com/v4/crew";
const crewPageContainer = document.querySelector(".crew");

async function apiCallCrew(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  for (let n = 0; n < result.length; n++) {
    crewPageContainer.innerHTML += `
      <div class="crew__item">
        <div class="crew__item-header"> 
          <img src="${result[n].image}" alt="Img off crew member${result[n].name}" class="img-crew"/>
        </div>
        <div class="crew__item-main">
        <p>${result[n].name}</p>
        <p>${result[n].agency}</p>
        </div>
    </div>
    `;
  }
}
apiCallCrew(urlC);
