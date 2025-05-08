## 1. Interface vs Type in TypeScript
TypeScript provides two ways to define the structure of an object: interface and type. Although they serve the same purpose, there are some important differences between them.

## Interface
interface Person {
  name: string;
  age: number;
}
This is defined using the interface keyword, which works similarly to how a class is defined. One interface can extend another interface, just like classes do.

Use cases: In large projects (especially those using OOP concepts), it's better to use interface.

## Type
type Person = {
  name: string;
  age: number;
};
This is defined using the type keyword, and it works like defining an object. One type can be combined with another using intersection.

Use cases: In small to medium-sized projects, type is more suitable.

## 2. What is the use of the keyof keyword in TypeScript?
The keyof keyword in TypeScript is used to get the keys of a given object type as a union of string literals.

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;
// PersonKeys will be 'name' | 'age' | 'email'
In this example, keyof Person results in a type that represents all the keys of the Person interface, which are 'name', 'age', and 'email'.

Use cases:
You can use keyof to ensure that only valid keys of an object are used as values, preventing errors when accessing or manipulating object properties.

function getValue(obj: Person, key: keyof Person) {
  return obj[key]; 
}
