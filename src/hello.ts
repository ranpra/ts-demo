// hello.ts — First TypeScript file

// Variable with type annotation
let message: string = "Hello TypeScript!";

// Function with typed parameters and return type
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old!`;
  }
  return `Hello ${name}!`;
}

// Array with types
let languages: string[] = ["TypeScript", "JavaScript", "Node.js"];

// Tuple example
let person: [string, number] = ["Alice", 30];

// Log everything
console.log(message);
console.log(greet("Pradeep"));
console.log(greet("Pradeep", 28));
console.log("Languages:", languages);
console.log("Person Tuple:", person);
