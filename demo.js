const LinkedList = require("./linked-list");

console.log("Creating new list...");
const list = new LinkedList();
console.log(`Initial length: ${list.length()}`);

console.log("\nAppending elements...");
list.append("a");
list.append("b");
list.append("c");
console.log(`Length after append: ${list.length()}`);
console.log(`Elements: ${list.get(0)}, ${list.get(1)}, ${list.get(2)}`);

console.log("\nInserting element at position 1...");
list.insert("x", 1);
console.log(
  `Elements after insert: ${list.get(0)}, ${list.get(1)}, ${list.get(
    2
  )}, ${list.get(3)}`
);

console.log("\nDeleting element at position 2...");
const deleted = list.delete(2);
console.log(`Deleted element: ${deleted}`);
console.log(
  `Elements after delete: ${list.get(0)}, ${list.get(1)}, ${list.get(2)}`
);

console.log('\nFinding first and last occurrence of "a"...');
list.append("a");
console.log(`First 'a' at: ${list.findFirst("a")}`);
console.log(`Last 'a' at: ${list.findLast("a")}`);

console.log("\nReversing list...");
list.reverse();
console.log(
  `Elements after reverse: ${list.get(0)}, ${list.get(1)}, ${list.get(2)}`
);

console.log("\nCreating clone...");
const cloned = list.clone();
cloned.append("d");
console.log(`Original length: ${list.length()}`);
console.log(`Clone length: ${cloned.length()}`);

console.log("\nExtending list with clone...");
list.extend(cloned);
console.log(`Extended list length: ${list.length()}`);

console.log('\nDeleting all "a" elements...');
list.deleteAll("a");
console.log(`Length after deleteAll: ${list.length()}`);

console.log("\nClearing list...");
list.clear();
console.log(`Length after clear: ${list.length()}`);
