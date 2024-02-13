// Definición de una función de flecha para cargar la API de países
const loadCountryAPI = () => {
    // Obtener datos de la URL de la API de países mediante la función fetch
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json()) // Convertir la respuesta a formato JSON
        .then(data => displayCountries(data)); // Llamar a la función para mostrar los países en la interfaz
}

// Función para mostrar todos los países en la interfaz
const displayCountries = countries => {
    // Mapear los datos de los países y llamar a la función getCountry para cada país
    const countriesHTML = countries.map(country => getCountry(country));
    // Obtener el contenedor HTML donde se mostrarán los países y establecer su contenido
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' '); // Unir la lista de países en un solo string y establecerlo como HTML
}

// Función para obtener los datos de un país y formatearlos en HTML
const getCountry = (country) => {
    console.log(country); // Imprimir los datos del país en la consola
    return `
        <div class="country-div">
            <img src="${country.flags.png}">
            <h2>${country.name.common}</h2>
            <hr>
            <h4>Population: ${country.population}</h4>
            <h4>Region: ${country.region}</h4>
            <h4>Capital: ${country.capital}</h4>
        </div>
    `;
}

// Llamar a la función para cargar la API de países y mostrar el resultado en la consola
loadCountryAPI();
