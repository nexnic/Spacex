//API url

const urlLaunches = "https://api.spacexdata.com/v4/launches/";
const urlUpcoming = "https://api.spacexdata.com/v4/launches/upcoming";
//varialbe for skrive ny html sider
const fontIkon = `<script src="https://kit.fontawesome.com/1d04c2db3e.js" crossorigin="anonymous"></script>`
const ikon = '<link rel="icon" href="./assets/img/logo/Component 1(1).png">';
const css = '<link rel="stylesheet" href="/css/style.css">';
const js = '<script src="/js/crewapi.js"></script>';
//veriable for skrive siden
const crewSit = ("<html><head><title></title>${fontIkon}${ikon}${css}</head><body>${js}</body></html>");

// Hente element. 
const crewbtn = document.getElementById('crewSite')

//API function fetch 
async function apifetch(url) {
    const response = await fetch(url)
    const apiSpaceX = await response.json();


    for (i = 0; i <= apiSpaceX.length; i++) {
    }
}
function crewContent() {
    apifetch(urlCrew)

    crewcontainer.innerHTML = "";
    for (let i = 0; i < apiSpaceX; i++) {
        console.log(apiSpaceX);
    }
}


//Dette satt til hvis id crewbtn blir trykket på så vil siden bli lage. 
crewbtn.addEventListener("click", () => {
    let xet = window.open("");
    newFunction();


    function newFunction() {
        xet.document.write(`<html><head><title>Met the crew</title>${css}</head><body><div class="crew_container">${js}</body></html>`);
    }
})





apifetch(urlCrew);
apifetch(urlLaunches);