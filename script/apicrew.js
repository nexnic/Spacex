const urlC = "https://api.spacexdata.com/v4/crew";
const crewPageContainer = document.querySelector('.crew--information');

async function apiCallCrew(url) {
    const response = await fetch(url)
    const result = await response.json();
    console.log(result);


    for (let n = 0; n < result.length; n++) {


        crewPageContainer.innerHTML += `<div class="item-crew"><img src="${result[n].image}" alt="Img off crew member${result[n].name}" class="crew-img"/></div>`;
    }
}
apiCallCrew(urlC);