function welcomeSystem(text) {
    return text;
}

var album = {
    title: "Black night",
    released: 1990,
    showInfo: function() {
        console.log(`O seu título é: ${this.showInfo} e foi lançado em ${this.released}`)
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