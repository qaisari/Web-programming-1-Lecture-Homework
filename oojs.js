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
      document.body.appendChild(soundElement);
    }
  
    render() {
      const animalCard = document.createElement("div");
      animalCard.className = "animal-card";
  
      const nameElement = document.createElement("h2");
      nameElement.textContent = this.name;
  
      const soundButton = document.createElement("button");
      soundButton.textContent = "Make Sound";
      soundButton.addEventListener("click", () => this.makeSound());
  
      animalCard.appendChild(nameElement);
      animalCard.appendChild(soundButton);
  
      document.getElementById("game-container").appendChild(animalCard);
    }
  }
  
  // Extended class for specific animal
  class Dog extends Animal {
    constructor(name) {
      super(name, "Woof"); // Calls parent constructor
      this.breed = "Labrador";
    }
  
    fetch() {
      const actionElement = document.createElement("p");
      actionElement.textContent = `${this.name} fetched the ball!`;
      actionElement.className = "animal-action";
      document.body.appendChild(actionElement);
    }
  
    render() {
      super.render(); // Calls parent's render method
  
      const fetchButton = document.createElement("button");
      fetchButton.textContent = "Play Fetch";
      fetchButton.addEventListener("click", () => this.fetch());
  
      const card = document.querySelector(".animal-card:last-child");
      card.appendChild(fetchButton);
    }
  }
  
  // Create animals
  const genericAnimal = new Animal("Generic", "Meep");
  const dog = new Dog("Buddy");
  
  // Render to DOM
  genericAnimal.render();
  dog.render();
  