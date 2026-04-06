class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog barks");
        console.log("puppyyy");// dog-- animal  dog is a animal .. all properties inherit 
        console.log("puppyy");
    }
}

class Puppy extends Dog {
    play(): void {
        console.log(this.name + " is playing");// puppy---->dog puppy is a dog 
    }
}

function processAnimal(age: number, isHungry: boolean): void {

    if (age > 5) {
        console.log("Adult Animal");
        console.log("#####");
        if (isHungry) {
            console.log("Feed the animal");
        } else {
            console.log("Animal is not hungry");
        }

    } else {
        console.log("Young Animal");
    }

    for (let i = 0; i < 3; i++) {
        console.log("Checking health " + i);
    }
}

// Execution
const p = new Puppy("Tommy");
p.makeSound();
p.play();

processAnimal(6, true);