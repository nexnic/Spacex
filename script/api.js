const urlC = "https://api.spacexdata.com/v4/company"
const urlL = "https://api.spacexdata.com/v4/launches"
const headerContainer = document.querySelector('.text_box');
const midPageContainer = document.querySelector('.launches');

async function apiCall(url) {
    const response = await fetch(url)
    const result = await response.json();
    console.log(result);


    if (url == urlC) {
        console.log(result);
        headerContainer.innerHTML += `<h2>Founder ${result.founder}</h2><br />
        <h3>Employees ${result.employees}</h3><br />
        <h3>Founded ${result.founded}</h3><br />
        <div class="text_box-p">
        <p>${result.summary}</p>
        </div> <ul></ul>`
    }

    else if (url == urlL) {
        for (let i = 0; i <= result.length; i++) {

        }
    }



}


let x = [];

function Calc(x) {
    let y = count(x)



}

apiCall(urlC)
apiCall(urlL)
