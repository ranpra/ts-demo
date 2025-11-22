// functions.ts — Exercise 4: Optional, Default & Rest Parameters

export {}; // Make this file a module to avoid global conflicts

// 1️⃣ Function with Optional Parameter
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old!`;
  }
  return `Hello ${name}!`;
}

console.log(greet("Pradeep"));        // Hello Pradeep!
console.log(greet("Pradeep", 28));    // Hello Pradeep, you are 28 years old!

// 2️⃣ Function with Default Parameter
function greetWithDefault(name: string, age: number = 18): string {
  return `Hello ${name}, you are ${age} years old!`;
}

console.log(greetWithDefault("Pradeep"));      // Uses default age 18
console.log(greetWithDefault("Pradeep", 28));  // Uses 28

// 3️⃣ Combining Optional & Default Parameters
function displayInfo(name: string, age?: number, country: string = "UAE"): string {
  if (age) {
    return `${name}, Age: ${age}, Country: ${country}`;
  }
  return `${name}, Country: ${country}`;
}

console.log(displayInfo("Pradeep"));               // Pradeep, Country: UAE
console.log(displayInfo("Pradeep", 28));           // Pradeep, Age: 28, Country: UAE
console.log(displayInfo("Pradeep", 28, "India"));  // Pradeep, Age: 28, Country: India

// 4️⃣ Rest Parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2, 3));            // 6
console.log(sumAll(10, 20, 30, 40));     // 100

// 5️⃣ Practice Task: Multiply with Default Parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5));    // 10
console.log(multiply(5, 3)); // 15

// 6️⃣ Practice Task: Full Name with Optional Last Name
function fullName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

console.log(fullName("Pradeep"));            // Pradeep
console.log(fullName("Pradeep", "Kumar"));   // Pradeep Kumar

// 7️⃣ Practice Task: Greet with any number of languages
function greetLanguages(name: string, ...languages: string[]): void {
  console.log(`${name} knows: ${languages.join(", ")}`);
}

greetLanguages("Pradeep", "TypeScript", "JavaScript", "Node.js");
// Output: Pradeep knows: TypeScript, JavaScript, Node.js
