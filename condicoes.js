



var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log("Posso ir ao show do Iron Maiden")
} else if (idade >=12) {
    console.log("Posso ir ao show do Jonas Brother")
} else {
    console.log("Fique em casa ou assista Baby Shark")
}


//switch em javascript

var ingresso = prompt("Qual o tipo de ingresso?")


switch (ingresso) {

    case 'vip':
        console.log("Vou para o camarote")
        break;
    
    case 'premium':
        console.log("Ficar na pista premium")
        break;

    case 'comum':
        console.log("Vou ficar na arquibancada")
        break;
    default:
        console.log("Tipo de ingresso inválido")
}


