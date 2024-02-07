/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = []; // Lista vacía

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    // Crear un nuevo elemento <article>
    const article = document.createElement("article");

    // Crear un nuevo elemento <h3> y asignarle el nombre del templo
    // Este elemento <h3> representará el nombre del templo.
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Se crea un elemento <img>
    const img = document.createElement("img");
    // se le asigna la URL de la imagen (temple.imageUrl) como fuente (src)
    img.src = temple.imageUrl;
    // ubicación del templo (temple.location) como texto alternativo (alt).
    img.alt = temple.location;

    // Agregar el <h3> y el <img> al <article>
    // Esto estructura la información del templo dentro del contenedor.
    article.appendChild(h3);
    article.appendChild(img);

    // Agregar el <article> al elemento global templesElement
    // Esto coloca la información del templo en el contenedor designado en el HTML.
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch() */
// Se declara una función de flecha asincrónica llamada getTemples.
const getTemples = async () => {
  // Se declara una constante llamada response que espera la respuesta del método fetch
  // Este método solicita los datos del templo desde la URL proporcionada.
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

  // Convertir la respuesta a un objeto JavaScript y asignar a templeList
  templeList = await response.json();

  // Llamar a la función displayTemples para mostrar los templos en la página
  displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    // Selecciona todos los elementos <article> dentro de templesElement
    const articles = templesElement.querySelectorAll("article");
  
    // Itera sobre cada elemento <article> y lo elimina
    articles.forEach((article) => {
      article.remove();
    });
  };

/* filterTemples Function */
const filterTemples = (temples) => {
  // Llamar a la reset function para borrar la salida actual
  reset();
  // Obtener el valor seleccionado del elemento con ID "filtered"
  const filter = document.querySelector("#filtered").value;
  // Usar una declaración de cambio para filtrar los templos según la selección
  switch (filter) {
    case "utah":
      // Muestra templos ubicados en Utah.
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;

    case "notutah":
      // Muestra templos fuera de Utah.
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
      
    case "older":
      // Muestra templos construidos antes de 1950.
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;

    case "all":
      // Muestra todos los templos sin filtro.
      displayTemples(temples);
      break;
  }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  // Añadir un detector de eventos al cambio en el elemento con ID "filtered" y llamar a filterTemples
  filterTemples(templeList);
});

// Llamar a getTemples al cargar la página para obtener y mostrar los datos del templo
getTemples();
