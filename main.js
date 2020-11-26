

function welcome() {
    var welcome = "Hello Javascript - Automação"
    var name = "Antonio";
    document.getElementById("welcome").append("Hello ", name, "- Automação")
    console.log(welcome)

}


function soma(n1,n2) {
    return n1 + n2
}

welcome()
console.log(soma(1,65))


var album = {
    title: "Black night",
    released: 1990,
    showInfo: function() {
        console.log(`O seu título é: ${this.title} e foi lançado em ${this.released}`)
    }
}

album.showInfo();


var newalbum = new Object();

newalbum.title = "I'm legend";
newalbum.released = 1990;

newalbum.showInfo = function() {
    console.log(`${this.title}`)
}

newalbum.showInfo();

newalbum.tracks = ["Meu album", "Primeiro", "Sei lá"]
newalbum.showTracks = function() {
    this.tracks.forEach(function(value, key) {
        console.log(value);
    });
}
