
/*1- realiza la multiplicacion del siguiente arreglo [10,"5","7",9,23,"17"] */

// const multi = [10,"5","7",9,23,"17"]

// const result = multi.map(x=>Number(x)).reduce((sum, index)=> sum* index)
 

// console.log(result)




//2- Crear un array que solo traiga elementos que contengan solo 6 caracteres
// const array = ["gallina", "numero", "animal", "pollo", "carnes"]
// const result = array.filter(x=> x.length===6)
// console.log(result)


//3- Imprime la tabla de multiplicar del 7 usando foreach
// const table=[1,2,3,4,5,6,7,8,9,10]

// table.forEach((element)=>{
//     console.log(`7 x ${element} = ${7*element} `)
// })


//4- Crear el siguiente arreglo  ["manzana","limon", "sandia", "pera","toronja","naranja"] 
//y verifica que incluye snadia

//  const frutas = ["manzana","limon", "sandia", "pera","toronja","naranja"] 
//  const resultado = frutas.includes("sandia")
//  if (resultado===true) {
//     console.log(`Sandia esta incluida en la lista`)
//  } else {
//     console.log(`Sandia No esta incluida en la lista`)

//  }
 


//5- en el siguiente arreglo de usuarios busca el usuario con el email rosario@gmail.com
// const usuario = [
//     {
//         nombre:"rafael perez",
//         email:"rafael@gmail.com"
//     },
//     {
//         nombre:"rosario perez",
//         email:"rosario@gmail.com"
        
//     },
//     {
//         nombre:"Rodrigo Avila",
//         email:"rodrigoavila@gmail.com"
//     },
//     {
//         nombre:"Alberto campos",
//         email:"alberto@gmail.com"
//     }
// ]

// const result = usuario.find(x=> x.email==="rosario@gmail.com")
// if (result===undefined) {
//     console.log(`el usuario no fue encontrado`) 
// } else {
//     console.log(`Usuario encontrado`)
//     console.log(result)
// }




//5.1- en el siguiente arreglo [1,6,3,4,2,56,10] ordenalos de manera descendente
// const numeros = [1,6,3,4,2,56,10]
// const result = numeros.sort((a,b)=>(b-a))
// console.log(result)



//6- en el siguiente arreglo[1,2,3,4,5,6,7] verifica si todos los numeros son mayores a 5
// const numeros = [1,2,3,4,5,6,7]

// const result = numeros.find(x=> x<=5)

// if (result === undefined) {
//     console.log(`todos los numeros son mayores a 5`)
// } else {
//     console.log(`No todos los numeros son mayores a 5`)
// }





/*7- agrega 3 arreglos que contengan al menos dos elementos, cada arreglo sera diferente, 
1 arreglo numerico, 1 arreglo string y 1 arreglo boleano y concatenalos usando el metodo concat*/

// const arreglosSt = ["Avion", "Carro"]
// const arregloN = [1,2]
// const arregloB = [true, false]

// const result = arreglosSt.concat(arregloB, arregloN)
// console.log(result)
// console.log(arregloB)





//8- Crea un arreglo numerico y elimina el primer elemento
// const numeros =[1,2,3,4,5,6,7]

// const result = numeros.shift()
// console.log(result)
// console.log(numeros)





//9- Busca el indice en que se encuentra el numero 5 en este arreglo
// const numeros =[12,6,7,8,11,10,9,5,3,43]
// const result = numeros.findIndex((x=> x===5))
// console.log(`el numero 5 se encuentra en el indice ${result}`)



//10- Crea un arreglo que inicie en 1  y termine en 1o luego crea un copia de dicho arreglo
//y a cada numero multiplicalo por 3

const numeros = [1,2,3,4,5,6,7,8,9,10]

const result = numeros.map((x)=> x*3)
console.log(result)

