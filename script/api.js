const url = "https://api.spacexdata.com/v4/launches";

const launchesCores = document.querySelector(".launches__cores");
const launchesfail = document.querySelector(".launches__fail");
const launchesUpcoming = document.querySelector(".launches__upcoming");

async function api(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  for (i = 0; result.length >= i; i++) {
    if (
      result[i].upcoming == true &&
      result[i].name != null &&
      result[i].links.patch.small != null
    ) {
      console.log(result[i].name);
      console.log([convert_launch_date(result[i].launch_date_utc)]);
      console.log(result[i].links.patch.small);

      launchesUpcoming.innerHTML += ` 
        <div class="launche">
            <div class="launche__header">
                <h3>${result[i].name}</h3>
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
    } //this is for cores if it managed to use they again which launches
    else if (
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
                <h3>${result[i].name}</h3>
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
    } else if (
      result[i].success == false &&
      //if any of this is equal to zero not if them
      result[i].name != null &&
      result[i].links.patch.small != null &&
      result[i].details != null &&
      result[i].links.webcast != null &&
      result[i].links.wikipedia != null
    ) {
      launchesfail.innerHTML += ` 
        <div class="launche">
            <div class="launche__header">
                <h3>${result[i].name}</h3>
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
}

function convert_launch_date(launchDate) {
  let date = new Date(launchDate * 1000);
  return date.toLocaleDateString();
}
api(url);
