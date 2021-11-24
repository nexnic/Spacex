const url = "https://api.spacexdata.com/v4/launches";

const launchesCores = document.querySelector(".launches__cores");
const launchesSuccess = document.querySelector(".launches__success");
const launchesUpcoming = document.querySelector(".launches__upcoming");

async function api(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  for (i = 0; result.length >= i; i++) {
    //console.log(result[i].cores[0]);
    //console.log(result[i].cores[0].landing_attempt);
    //console.log(result[i].cores[0].landing_success);

    //this is for cores if it managed to use they again which launches
    if (
      result[i].cores[0].landing_attempt == true &&
      result[i].cores[0].landing_success == true &&
      //if any of this is equal to zero not if them
      result[i].name != null &&
      result[i].links.patch.small != null &&
      result[i].details != null &&
      result[i].links.webcast != null &&
      result[i].links.wikipedia != null
    ) {
      //console.log(result[i].name);
      //console.log(result[i].links.patch.small);
      //console.log(result[i].details);
      //console.log(result[i].links.webcast);
      //console.log(result[i].links.wikipedia);

      launchesCores.innerHTML += ` 
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
    //this is for spacex calculating result as success
    else if (
      result[i].success == true &&
      result[i].details != null &&
      //if any of this is equal to zero not if them
      result[i].name != null &&
      result[i].links.patch.small != null &&
      result[i].details != null &&
      result[i].links.webcast != null &&
      result[i].links.wikipedia != null
    ) {
      //console.log(result[i].name);
      //console.log(result[i].links.patch.small);
      //console.log(result[i].details);
      //console.log(result[i].links.webcast);
      //console.log(result[i].links.wikipedia);

      launchesSuccess.innerHTML += ` 
        <div class="launche">
            <div class="launche__header">
                <h4>${result[i].name}</h4>
                
            <div>
            <div class="launche__mid">
                <img class="launche__img" src="${
                  result[i].links.patch.small
                }" alt="see picture off patch ${result[i].name}">
            </div>
            <div class="launche__buttom">
                 <p>Launch date ${convert_launch_date(result[i].date_unix)}</p>
                 <p>${result[i].details}</p>
                 <ul class="launche__list">
                    <il>
                        <a class="btn " href="${
                          result[i].links.webcast
                        }" target="popup"
                        onclick="window.open('${
                          result[i].links.webcast
                        }','popup','width=600,height=600'); return false;"
                        alt="link to youtube">
                            <i class="fab fa-youtube"></i>
                        </a
                    </il>
                    <il>
                    <a class="btn " href="${
                      result[i].links.wikipedia
                    }" target="popup"
                    onclick="window.open('${
                      result[i].links.wikipedia
                    }','popup','width=600,height=600'); return false;"
                    alt="link to youtube">
                            <i class="fab fa-wikipedia-w"></i>
                        </a>
                    </il>
                 </ul>
            </div>
        </div>
        `;
    } else if (
      result[i].upcoming == true &&
      result[i].name != null &&
      result[i].links.patch.small != null
    ) {
      console.log(result[i].name);
      console.log([timeZone(result[i].launch_date_utc)]);
      console.log(result[i].links.patch.small);
      convert_launch_date();
      //console.log([CountDown(result[i].date_utc)]);
      let time = timeZone(result[i].launch_date_local);

      launchesUpcoming.innerHTML += ` 
        <div class="launche">
            <div class="launche__header">
                <h4>${result[i].name}</h4>
            <div>
            <div class="launche__mid">
                <img class="launche__img" src="${
                  result[i].links.patch.small
                }" alt="see picture off patch ${result[i].name}">
            </div>
            <div class="launche__buttom">
            <p>Launch date <br /> ${convert_launch_date(
              result[i].date_unix
            )}</p>
            
            </div>
        </div>
        `;
    }
  }
}

api(url);

function convert_launch_date(launchDate) {
  let date = new Date(launchDate * 1000);
  return date.toLocaleDateString();
}

/*const urlC = "https://api.spacexdata.com/v4/company";
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

function timeZone(date_utc) {
  var now = new Date();
  var end = new Date(Date.UTC(2037, 3 - 1, 31, 19, 0, 0, 0));

  if (now % end) {
    console.log(`${end}`);
  } else {
    console.log("Launch day!");
  }
}
*/
