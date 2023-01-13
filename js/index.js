const URL = "https://restcountries.com/v3.1/all";

const body = document.querySelector("body");

async function getCountries(){
    const res = await fetch(URL);
    const data = await res.json();

    data.forEach(country => {
        console.log(country.name.common);
        const title = `<h2>Name: ${country.name.common}</h2>`;
        const official = `<p>Official Name${country.name.official}</p>`

        body.innerHTML += title;
        body.innerHTML += official;
    });
}

getCountries();