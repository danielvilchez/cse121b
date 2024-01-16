/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Daniel Vilchez";
const currentYear = new Date().getFullYear();
const profilePicture = "images/myprofileimg.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
// Cambiar el nombre en el HTML por la variable "fullName"
// <strong> y </strong>: Estas son etiquetas HTML que representan texto fuerte o enfatizado
// ${fullName} permite insertar dinámicamente el valor de la variable fullName dentro de la cadena
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Asignar el año actual al contenido del elemento con id "year"
yearElement.textContent = currentYear;

// Establecer la propiedad src del elemento de imagen con la ruta del archivo
// El método setAttribute se utiliza para establecer atributos en elementos HTML
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `'Profile image ${fullName}'`);

/* Step 5 - Array */
const favoriteFood = ["Pizza", " Burger", " Lasagna", " Tacos", " Sushi"];

// Modificar el elemento con id "food" para mostrar la variedad de comidas favoritas
foodElement.innerHTML = `${favoriteFood}`;

// Agregar otra comida favorita
const newFavoriteFood = "Ice Cream";
favoriteFood.push(newFavoriteFood);

// Modificar el elemento con id "food" para mostrar "favoriteFood"" + "newFavoriteFood"
foodElement.innerHTML += `<br>${favoriteFood}`;

// Eliminar el primer elemento de la matriz de comidas favoritas
favoriteFood.shift();

// Modificar "favoriteFood" después de eliminar el primer elemento
foodElement.innerHTML += `<br>${favoriteFood}`;

// Eliminar el último elemento de la matriz de "favoriteFood"
favoriteFood.pop();

// Modificar "favoriteFood" después de eliminar el último elemento
foodElement.innerHTML += `<br>${favoriteFood}`;


