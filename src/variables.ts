// variables.ts — Exercise 3: Variables with Types

// 1. Primitive Types
let username: string = "Pradeep";
let age: number = 28;
let isActive: boolean = true;

console.log("Username:", username);
console.log("Age:", age);
console.log("Is Active:", isActive);

// 2. Arrays
let skills: string[] = ["TypeScript", "JavaScript", "Node.js"];
let scores: Array<number> = [90, 85, 95];

console.log("Skills:", skills);
console.log("Scores:", scores);

// 3. Tuple
let personTuple: [string, number, boolean] = ["Alice", 30, true];
console.log("Person Tuple:", personTuple);

// 4. Enum
enum Role {
  Admin,
  User,
  Guest
}
let myRole: Role = Role.Admin;
console.log("My Role:", Role[myRole]);

// 5. Union Type
let id: string | number = 123;
console.log("ID as number:", id);
id = "ABC123";
console.log("ID as string:", id);

// 6. Unknown & Any
let data: unknown = 10;
let anything: any = "Could be anything";

data = "Hello";
// Narrow before using unknown
if (typeof data === "string") {
  console.log("Data length:", data.length);
}

anything = 42;
console.log("Anything:", anything);

// 7. Function using union and primitive types
function displayUser(userName: string, userId: string | number): string {
  return `User: ${userName}, ID: ${userId}`;
}

console.log(displayUser(username, id));

// 8. Bonus: Discount calculation
let price: number = 200;
let discountedPrice: number = price * 0.9; // 10% discount
console.log("Original Price:", price, "Discounted Price:", discountedPrice);

// 9. Contacts array of tuples
let contacts: [string, string][] = [
  ["Alice", "1234567890"],
  ["Bob", "9876543210"]
];

contacts.forEach(([name, phone]) => {
  console.log(`Contact - Name: ${name}, Phone: ${phone}`);
});

// 10. Status enum
enum Status {
  Pending,
  InProgress,
  Completed
}

let taskStatus: Status = Status.InProgress;
console.log("Task Status:", Status[taskStatus]);
