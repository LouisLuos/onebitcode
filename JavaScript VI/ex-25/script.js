async function getCountrys() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    console.log(response)
}

getCountrys()