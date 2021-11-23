const urlC = "https://api.spacexdata.com/v4/company";
const urlL = "https://api.spacexdata.com/v4/launches";
const headerContainer = document.querySelector(".text_box");
const midPageContainer = document.querySelector(".launches");

async function apiCall(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  if (url == urlC) {
    console.log(result);
    headerContainer.innerHTML += `<h2>Founder ${result.founder}</h2><br />
        <h3>Employees ${result.employees}</h3><br />
        <h3>Founded ${result.founded}</h3><br />
        `;
  } else if (url == urlL) {
    for (let i = 0; i <= result.length; i++) {
      if ((result[i].success = true && result[i].details != null)) {
        console.log(`${result[i].name}`);
        console.log(`${result[i].links.patch.small}`);
        console.log(`${result[i].details}`);
        console.log(`${result[i].links.wikipedia}`);
        console.log(`${result[i].links.webcast}`);

        midPageContainer.innerHTML += ` 
        <div class="launche">
            <div class="launche__header">
                <h4>${result[i].name}</h4>
            <div>
            <div class="launche__mid">
                <img class="launche__img" src="${result[i].links.patch.small}" alt="see picture off patch ${result[i].name}">
            </div>
            <div class="launche__buttom">
                 <p>${result[i].details}</p>
                 <ul class="launche__list">
                    <il>
                        <a class="btn btn__launche" href="${result[i].links.webcast}" alt="link to youtube">
                    </il>
                    <il>
                        <a class="btn btn__launche" href="${result[i].links.wikipedia}" alt="link to youtube">
                    </il>
                 </ul>
            </div>

        </div>
        `;
      }
    }
  }
}

apiCall(urlC);
apiCall(urlL);
