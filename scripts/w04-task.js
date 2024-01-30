/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {
    name: "Daniel Vilchez",
    photo: "images/myprofileimg.jpg",
    favoriteFoods: [
        'Pizza',
        'Burger',
        'Lasagna',
        'Tacos',
        'Sushi',
    ],

    hobbies: [
        'Football',
        'Videogames',
        'Watch Movies'
    ],

    placesLived: [] // Inicializa placesLived como una matriz vacía
};

/* Populate Profile Object with placesLive objects */
// Agrega lugares vividos al objeto myProfile.placesLived
myProfile.placesLived.push(
    {
        place: 'Lima, Peru',
        length: '18 years'
    }
);

/* DOM Manipulation - Output */
/* Name */
// Asignar el valor de la propiedad name del objeto myProfile al elemento HTML con un ID de "name"
// contenido de texto (propiedad textContent)
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
// Asignar el valor de la propiedad photo como src atributo del HTML <img> con un ID de "photo"
// src (fuente de la imagen) 
document.querySelector('#photo').src = myProfile.photo;
// Asignar el valor de la propiedad name como alt atributo del HTML <img> con un ID de "photo"
// alt (texto alternativo de la imagen)
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
// Suponiendo que tienes un elemento HTML con un ID de "favorite-foods" para mostrar la lista de comidas favoritas
const favoriteFoodsList = document.querySelector('#favorite-foods');
// Itera sobre la matriz favoriteFoods usando forEach y agrega cada comida a la lista en tu página HTML
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
// mostrar la lista de pasatiempos con el ID hobbies
const hobbiesList = document.querySelector('#hobbies');
// Iterar sobre la matriz hobbies usando forEach y agrega cada pasatiempo a la lista en tu página HTML
myProfile.hobbies.forEach(hobby => {
    const listItem = document.createElement('li');
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
// mostrar la lista de lugares vividos con el ID places-lived
// Crea un nuevo elemento <dl> (lista de descripción) y almacena la referencia en la variable placesLivedList.
const placesLivedList = document.createElement('dl');

// Itera sobre cada lugar en la matriz placesLived del objeto myProfile.
myProfile.placesLived.forEach(place => {
  // Crea un nuevo elemento <dt> (término) para representar el lugar.
  const termElement = document.createElement('dt');
  // Asigna el lugar al contenido del elemento <dt>.
  termElement.textContent = place.place;

  // Crea un nuevo elemento <dd> (descripción) para representar la duración.
  const descriptionElement = document.createElement('dd');
  // Asigna la duración al contenido del elemento <dd>.
  descriptionElement.textContent = place.length;

  // Agrega el elemento <dt> como hijo de la lista de descripción.
  placesLivedList.appendChild(termElement);
  // Agrega el elemento <dd> como hijo de la lista de descripción.
  placesLivedList.appendChild(descriptionElement);
});

// Agrega la lista de descripción completa al elemento con el ID "places-lived" en tu HTML.
document.querySelector('#places-lived').appendChild(placesLivedList);

