const url = "https://api.spacexdata.com/v4/crew";
const crewContainer = document.querySelector(".crew_container");
const css = '<link rel="stylesheet" href="/css/style.css">';
const js = '<script src="/js/crewapi.js"></script>';



async function getCrew() {
    const response = await fetch(url)
    const results = await response.json();
    console.log(results);



    for (let i = 0; i = results.length; i++) {
        crewContainer.innerHTML *=
            `<div class="crew">
            <h3>${results[i].name}</h3>
            </div>`;
    }
};

function newFunction() {
    document.write(`<html><head><title>Met the crew</title>${css}</head><body><div class="crew_container">${js}</body></html>`);
}
newFunction();
getCrew();

{/* <img href="${api[i].image}"></img> */ }