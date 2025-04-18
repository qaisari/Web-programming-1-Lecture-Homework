// Base Animal class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        const soundElement = document.createElement("p");
        soundElement.textContent = `${this.name} says: ${this.sound}!`;
        soundElement.className = "animal-sound";
        document.getElementById("message-container").appendChild(soundElement); // Append to the message container
    }
    
    fetch() {
        const actionElement = document.createElement("p");
        actionElement.textContent = `${this.name} fetched the ball!`;
        actionElement.className = "animal-action";
        document.getElementById("message-container").appendChild(actionElement); // Append to the message container
    }

    render() {
        const animalCard = document.createElement("div");
        animalCard.className = "animal-card";

        const nameElement = document.createElement("h2");
        nameElement.textContent = this.name;

        const soundButton = document.createElement("button");
        soundButton.textContent = "Make Sound";
        soundButton.addEventListener("click", () => this.makeSound());

        const fetchButton = document.createElement("button");
        fetchButton.textContent = "Play Fetch";
        fetchButton.addEventListener("click", () => this.fetch());

        animalCard.appendChild(nameElement);
        animalCard.appendChild(soundButton);
        animalCard.appendChild(fetchButton);

        document.getElementById("game-container").appendChild(animalCard);
    }
}

// Extended class for Dog
class Dog extends Animal {
    constructor(name) {
        super(name, "Woof"); // Calls parent constructor
    }
}

// Extended class for Cat
class Cat extends Animal {
    constructor(name) {
        super(name, "Meow"); // Calls parent constructor
    }
}

// Create animals
const dog = new Dog("Dog");
const cat = new Cat("Cat");

// Render to DOM
dog.render();
cat.render();