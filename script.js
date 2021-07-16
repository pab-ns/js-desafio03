// Formula Factorial
let factorial_numero = (x) => {
    if (x > 1){
        return x * factorial_numero (x-1)
    } else {
        return x
    }
}

// Ingresar nº y obtener resultado
let number = () =>{
    let ask = prompt("Ingrese número entre 1 y 20"); // pedir nº
    let numUser = parseInt(ask); // transformar a valor número

    if (numUser < 1 || numUser > 20){ // condición mínima y alerta
        alert("Número fuera de rango"); 
    } else {
        // multipliación 1 hasta nº ingresado
        for (let i = 1; i <= numUser; i++) {
            let multiply = i * numUser;
            console.log(`${i} x ${numUser} = ${multiply}`);
        }   
        // Mostar resultado de factorial
        for (let i = 1; i <= numUser; i++) {
            console.log(`Factorial de ${i} es = ${factorial_numero(i)}`);
        }
        
    }
}

number();

//console.log(`Factorial de ${i} es = ${factorial_numero(i)}`);



// function factorial_numero(x){
//     if (x > 1){
//         return x * factorial_numero (x-1)
//     } else {
//         return x
//     }
// }

// document.write(`El factorial del número ${numberUser} es: ${factorial_numero(numberUser)}`)


        // factorial
        // let factorial = () =>{
        //     if (i > 1){
        //         return i * factorial (i-1)
        //     } else {
        //         return i;
        //     }
        // }