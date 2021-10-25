const url = "https://api.spacexdata.com/v4/launches/";


async function apiSpaceX() {
    const response = await fetch(url)
    const results = await response.json();
    console.log(results);


}

apiSpaceX();