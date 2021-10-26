const url = "https://api.spacexdata.com/v4/launches/upcoming";

async function upCommingLau() {
    const response = await fetch(url)
    const launches = await response.json();
    console.log(launches);
}

upCommingLau();