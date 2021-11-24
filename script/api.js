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
                        <a class="btn " href="${result[i].links.webcast}" target="popup"
                        onclick="window.open('${result[i].links.webcast}','popup','width=600,height=600'); return false;"
                        alt="link to youtube">
                            <i class="fab fa-youtube"></i>
                        </a
                    </il>
                    <il>
                    <a class="btn " href="${result[i].links.wikipedia}" target="popup"
                    onclick="window.open('${result[i].links.wikipedia}','popup','width=600,height=600'); return false;"
                    alt="link to youtube">
                            <i class="fab fa-wikipedia-w"></i>
                        </a>
                    </il>
                 </ul>
            </div>

        </div>
        `;
      }
    }
  } else if (url == urlL) {
    for (let i = 0; i <= result.length; i++) {
      if (
        result[i].cores.reused == true &&
        result[i].cores.landing_attempt == true &&
        result[i].cores.landing_success == true
      ) {
      }
    }
  }
}

apiCall(urlC);
apiCall(urlL);
apiCall(urlL);
