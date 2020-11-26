//Laços de repetição

//for é movido por declaração

for(var a = 0; a < 10; a++) {
    console.log(`Repetindo porque ${a} é menor que 10.`)
}



for(var a = 0; a < 10; a++) {
    console.log(`Repetindo porque ${a} é menor que 10.`)
}


var avengers = ['Ironman', 'Spiderman', 'Thor', 'Captian America', 'Black Panter', 'Black Window']

avengers.forEach(function(value, key) {
    console.log(`${value} na posição ${key}`)
})