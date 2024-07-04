class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
};

class Flat {
 residents = [];

 addResidents(inhabitant) {
    this.residents.push(inhabitant);
 }
};

class House {
    flats = [];
    constructor(maxFlatsInHouse) {
        this.maxFlatsInHouse = maxFlatsInHouse;
    }

    addFlats(flat) {
        if (this.maxFlatsInHouse > this.flats.length) {
            this.flats.push(flat);
        } else console.log("Перевищує максимальну кількість квартир!");
    }
}

let Danil = new Human('Danil', 'Man');
let DimaK = new Human('Dima', 'Man');
let Anna = new Human('Anna', 'Women');
let Serge = new Human('Serge', 'Man');

let flatOne = new Flat();
let flatTwo = new Flat();
let flatThree = new Flat();
let flatFour = new Flat();

flatOne.addResidents(Serge);
flatTwo.addResidents(Danil);
flatThree.addResidents(DimaK);
flatThree.addResidents(Anna);

let home = new House(3);

home.addFlats(flatOne);
home.addFlats(flatThree);
home.addFlats(flatTwo);
// home.addFlats(flatFour); // Якщо розкоментувати в консоль буде виводитись текст помилки.

console.log(home);

