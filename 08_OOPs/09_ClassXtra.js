// Super Method for methods

class Animal{
    makeSound(){
        return "Generic Animal Sound"
    }
}

class Dog extends Animal {
    makeSound(){
        return super.makeSound() + " - Woof!"
    }
}

const myDog = new Dog();
console.log(myDog.makeSound()); // Generic Animal Sound - Woof!

// Static Method - We already know that in JavaScript the static method is a method that belongs to the class itself rather than instances of that class, that means we can call the static method directly on the class

class MathOperation{
    static add(x,y) {
        console.log(x+y);
    }
    static subtract(x,y) {
        console.log(x-y);
    }
}

MathOperation.add(16,7) // 23
MathOperation.subtract(16,7) // 9

const child = new MathOperation()
// child.add(5,7) --> will throw error, static method is not accessible from instances of that class


// Methods Overriding - re-declaring a method of pParent class in the child class

class WildAnimals {
    makeSound() {
        return `Generic Sound`;
    }
}
class Tiger extends WildAnimals {
    makeSound() {
        return `Roar!!!` // this is called methods overriding
    }
}

const tigerChild = new Tiger
console.log(tigerChild.makeSound()) // Roar!!!