/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    // Obtener los valores de los controles de formulario y convertirlos a números
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Llamar a la función 'add' y asignar el resultado al elemento con ID 'sum'
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Agregar un detector de eventos de "clic" al botón con ID 'addNumbers'
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    // Obtener los valores de los controles de formulario y convertirlos a números
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // Llamar a la función 'subtract' y asignar el resultado al elemento con ID 'difference'
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

// Agregar un detector de eventos de "clic" al botón con ID 'subtractNumbers'
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
// Función de multiplicación 'multiply'
const multiply = (factor1, factor2) => factor1 * factor2;

// Función 'multiplyNumbers'
const multiplyNumbers = () => {
    // Obtener los valores de los controles de formulario y convertirlos a números
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    // Llamar a la función de flecha 'multiply' y asignar el resultado al elemento con ID 'product'
    document.querySelector('#product').value = multiply(factor1, factor2);
}

// Agregar un detector de eventos de "clic" al botón con ID 'multiplyNumbers'
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Función 'divideNumbers'
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    // Llamar a la función 'divide' y asignar el resultado al elemento con ID 'quotient'
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Agregar un detector de eventos de "clic" al botón con ID 'divideNumbers'
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Obtener referencia al botón "Get Total Due"
const getTotalButton = document.getElementById("getTotal");

// Agregar un detector de eventos al hacer clic en el botón
getTotalButton.addEventListener("click", function () {
    // Paso 1: Obtener el valor del subtotal ingresado por el usuario
    const subtotalValue = parseFloat(document.getElementById("subtotal").value);

    // Paso 2: Verificar si la casilla de membresía está marcada para aplicar un descuento
    const membership = document.getElementById("member").checked;
    const discount = membership ? 0.15 : 0; // Descuento del 15% si es miembro, 0% de descuento si no lo es

    // Paso 3: Calcular el total aplicando el descuento y mostrarlo en el elemento 'total'
    const totalAmount = subtotalValue - subtotalValue * discount;
    document.getElementById("total").textContent = `$ ${totalAmount.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Asignar el valor de la variable de matriz al elemento HTML con un ID de 'array'.
// join(', ') se utiliza para convertir la matriz a una cadena, separando los elementos por comas para una presentación más limpia.
document.getElementById("array").textContent = numbersArray.join(', ');

// Método filter() para hallar números impares
// La función de filtro function(number) verifica si el número es impar usando el operador de módulo (%).
// Si el resto es diferente de cero significa que el número es impar.
let oddNumbers = numbersArray.filter(function (number) {
    return number % 2 !== 0; // Filtra los números impares
});

/* Output Odds Only Array */
// Asignar el resultado al elemento HTML con un ID de 'odds'.
document.getElementById("odds").textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
// El método filter() encuentra todos los números pares y asigna al elemento con ID 'evens'.
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', '); //La expresión number % 2 === 0 verifica si un número es par.
// numbersArray.filter(number => number % 2 === 0) devuelve una matriz de números pares.

/* Output Sum of Org. Array */
// Sumar elementos de la matriz y asignar al elemento con ID 'sumOfArray':
// método reduce() para sumar todos los elementos de la matriz
document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);
// La expresión '(sum, number) => sum + number' define una función de reducción que suma cada elemento al acumulador sum.
// 'numbersArray.reduce((sum, number) => sum + number)' devuelve la suma de todos los elementos.

/* Output Multiplied by 2 Array */
// Utilizamos el método map() para multiplicar cada elemento por 2 y luego join(', ') para mostrarlos como una cadena separada por comas.
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(', ');

/* Output Sum of Multiplied by 2 Array */
// Sumar los elementos después de multiplicar por dos con map() y reduce() y asignar al elemento con ID 'sumOfMultiplied'
// Utilizamos map() para multiplicar cada elemento por 2
// luego reduce() para sumar esos elementos multiplicados y asignar el resultado al elemento con ID 'sumOfMultiplied'.
document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
