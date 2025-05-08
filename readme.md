## Interface vs Type in TypeScript
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