class Animal {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }

    run() {
        console.log(this.name + ` runs using ${this.legs}`);
    }
}

class monkey extends Animal{
    constructor(name,legs,food){
        super(name,legs)
            this.food = food
    }eat(){
        console.log(this.name + " " + `eats ${this.food}`)

    }
}

const manga = new monkey("hanuma",4,"Apple")
console.log(manga)

manga.eat()