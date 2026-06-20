/**
 * ============================================================================
 * JAVASCRIPT: ZERO TO HERO MASTERCLASS
 * ============================================================================
 * A complete, self-contained curriculum ranging from absolute basics 
 * to advanced architectural patterns. 
 * 
 * TABLE OF CONTENTS:
 * 1. Variables & Data Types
 * 2. Operators & Math
 * 3. Control Flow & Logic
 * 4. Loops & Iteration
 * 5. Functions & Scope
 * 6. Arrays & Array Methods
 * 7. Objects & Prototypes
 * 8. Object-Oriented Programming (Classes)
 * 9. Advanced Functions (Closures, Currying, Context)
 * 10. Asynchronous JavaScript (Promises, Async/Await)
 * 11. Error Handling
 * 12. Modern ES6+ Features (Destructuring, Maps, Sets)
 * 13. Generators & Iterators
 * 14. Design Patterns (Singleton, Observer, Factory)
 * 15. Mini-Project: Reactive State Manager
 * ============================================================================
 */

// ============================================================================
// SECTION 1: VARIABLES & DATA TYPES
// ============================================================================

// 1.1 Variable Declarations
var legacyVar = "Avoid using var in modern JS"; 
let modernVar = "Use let for variables that will change";
const CONSTANT_VAR = "Use const for variables that won't be reassigned";

// 1.2 Primitive Data Types
const stringType = "Hello, World!";
const numberType = 42;
const floatType = 3.14159;
const booleanType = true;
const nullType = null; // Intentional absence of value
let undefinedType; // Declared but not initialized
const symbolType = Symbol("unique_identifier"); // Unique and immutable
const bigIntType = 9007199254740991n; // For very large integers

// 1.3 Type Checking
console.log(typeof stringType); // "string"
console.log(typeof nullType);   // "object" (This is a famous JS bug)


// ============================================================================
// SECTION 2: OPERATORS & MATH
// ============================================================================

// 2.1 Arithmetic
let x = 10;
let y = 3;
const sum = x + y;       // 13
const diff = x - y;      // 7
const product = x * y;   // 30
const quotient = x / y;  // 3.333...
const remainder = x % y; // 1 (Modulo)
const power = x ** y;    // 1000 (Exponentiation)

// 2.2 Unary Operators
x++; // Increment (x is now 11)
x--; // Decrement (x is now 10)

// 2.3 Comparison (Always use strict equality ===)
console.log(10 == "10");  // true (Type coercion happens - BAD)
console.log(10 === "10"); // false (Strict equality - GOOD)
console.log(10 !== "10"); // true (Strict inequality)

// 2.4 Logical Operators
const andOp = (true && false); // false
const orOp = (true || false);  // true
const notOp = !true;           // false

// 2.5 The Math Object
const rounded = Math.round(4.6);   // 5
const floored = Math.floor(4.9);   // 4
const ceiled = Math.ceil(4.1);     // 5
const random = Math.random();      // 0.0 to 0.999...
const max = Math.max(10, 20, 5);   // 20


// ============================================================================
// SECTION 3: CONTROL FLOW & LOGIC
// ============================================================================

// 3.1 If/Else Statements
let age = 20;
if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age < 18) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// 3.2 Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// 3.3 Ternary Operator (Inline If/Else)
const status = age >= 18 ? "Allowed" : "Denied";

// 3.4 Short-Circuit Evaluation
const defaultName = null || "Guest"; // "Guest"
const triggerAction = true && function() { console.log("Fired!"); };


// ============================================================================
// SECTION 4: LOOPS & ITERATION
// ============================================================================

// 4.1 For Loop
for (let i = 0; i < 5; i++) {
    // Executes 5 times
}

// 4.2 While Loop
let counter = 0;
while (counter < 3) {
    counter++;
}

// 4.3 Do-While Loop (Guarantees at least one execution)
let doCounter = 0;
do {
    doCounter++;
} while (doCounter < 0);

// 4.4 For...in (Iterates over object keys)
const obj = { a: 1, b: 2 };
for (const key in obj) {
    // console.log(key, obj[key]);
}

// 4.5 For...of (Iterates over iterable values like Arrays/Strings)
const arr = [10, 20, 30];
for (const val of arr) {
    // console.log(val);
}


// ============================================================================
// SECTION 5: FUNCTIONS & SCOPE
// ============================================================================

// 5.1 Function Declaration (Hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}

// 5.2 Function Expression (Not hoisted)
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

// 5.3 Arrow Functions (Lexical `this`, concise syntax)
const multiply = (a, b) => a * b;
const square = x => x * x;

// 5.4 Default Parameters
function createUser(name = "Anonymous", role = "User") {
    return { name, role };
}

// 5.5 Rest Parameters
function sumAll(...numbers) {
    let total = 0;
    for (const num of numbers) total += num;
    return total;
}

// 5.6 IIFE (Immediately Invoked Function Expression)
(function() {
    const privateVar = "I am isolated";
})();


// ============================================================================
// SECTION 6: ARRAYS & ARRAY METHODS
// ============================================================================

const fruits = ["Apple", "Banana", "Cherry"];

// 6.1 Mutating Methods
fruits.push("Date");       // Adds to end
fruits.pop();              // Removes from end
fruits.unshift("Apricot"); // Adds to beginning
fruits.shift();            // Removes from beginning
fruits.splice(1, 1, "Blueberry"); // Removes 1 item at index 1, inserts "Blueberry"

// 6.2 Non-Mutating Methods
const extraFruits = ["Mango", "Kiwi"];
const allFruits = fruits.concat(extraFruits);
const slicedFruits = allFruits.slice(1, 3); // Copies from index 1 up to (not including) 3

// 6.3 Higher-Order Array Methods (Crucial for modern JS)
const numbers = [1, 2, 3, 4, 5, 6];

// .map() - Transforms each element, returns new array
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10, 12]

// .filter() - Returns new array with elements that pass the condition
const evens = numbers.filter(num => num % 2 === 0); // [2, 4, 6]

// .reduce() - Accumulates values into a single result
const sumTotal = numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0); // 21

// .find() - Returns first matching element
const found = numbers.find(num => num > 3); // 4

// .some() / .every() - Returns boolean
const hasLargeNum = numbers.some(num => num > 5); // true
const allPositive = numbers.every(num => num > 0); // true


// ============================================================================
// SECTION 7: OBJECTS & PROTOTYPES
// ============================================================================

// 7.1 Object Literals & Methods
const userProfile = {
    username: "dev_guru",
    level: 99,
    login() {
        console.log(`${this.username} logged in.`);
    }
};

// 7.2 Accessing & Modifying
userProfile.level = 100; // Dot notation
userProfile["username"] = "master_dev"; // Bracket notation

// 7.3 Object Methods
const keys = Object.keys(userProfile); // ["username", "level", "login"]
const values = Object.values(userProfile); // ["master_dev", 100, f]
const entries = Object.entries(userProfile); // [["username", "master_dev"], ...]

// 7.4 Prototypal Inheritance (Under the hood of JS)
const animalProto = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
};

const dog = Object.create(animalProto);
dog.name = "Rex";
dog.bark = function() { console.log("Woof!"); };
// dog.eat(); // Inherited from animalProto


// ============================================================================
// SECTION 8: OBJECT-ORIENTED PROGRAMMING (CLASSES)
// ============================================================================

// 8.1 ES6 Class Syntax
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log(`${this.make} ${this.model} engine started.`);
    }
}

// 8.2 Inheritance & Super
class ElectricVehicle extends Vehicle {
    // Private field (ES2022)
    #batteryLevel = 100;

    constructor(make, model, range) {
        super(make, model); // Calls parent constructor
        this.range = range;
    }

    get battery() {
        return this.#batteryLevel;
    }

    set battery(level) {
        if (level < 0 || level > 100) throw new Error("Invalid battery level");
        this.#batteryLevel = level;
    }

    startEngine() {
        console.log("Silently starting electric motor...");
    }

    static info() {
        console.log("EVs run on electricity.");
    }
}

const tesla = new ElectricVehicle("Tesla", "Model S", 400);
tesla.startEngine(); // Polymorphism in action
ElectricVehicle.info(); // Static method call


// ============================================================================
// SECTION 9: ADVANCED FUNCTIONS & CONTEXT
// ============================================================================

// 9.1 Closures (Function remembering its lexical scope)
function createCounter() {
    let count = 0; // Private state
    return function() {
        return ++count;
    };
}
const myCounter = createCounter();
myCounter(); // 1
myCounter(); // 2

// 9.2 Currying
const add = a => b => c => a + b + c;
const add5 = add(5);
const add5and10 = add5(10);
const finalSum = add5and10(15); // 30

// 9.3 Explicit Binding (`call`, `apply`, `bind`)
const person = { name: "Alice" };
function introduce(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

introduce.call(person, "Hi", "!"); // Immediately invokes, arguments comma-separated
introduce.apply(person, ["Hello", "."]); // Immediately invokes, arguments in array
const boundIntroduce = introduce.bind(person); // Returns new function
boundIntroduce("Hey", "~"); 


// ============================================================================
// SECTION 10: ASYNCHRONOUS JAVASCRIPT
// ============================================================================

// 10.1 Callbacks (The old way)
function fetchData(callback) {
    setTimeout(() => {
        callback({ data: "Server response" });
    }, 1000);
}

// 10.2 Promises (The ES6 way)
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userId) reject(new Error("ID required"));
            resolve({ id: userId, username: "john_doe" });
        }, 1000);
    });
}

fetchUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error))
    .finally(() => console.log("Operation complete"));

// 10.3 Async / Await (The Modern way)
async function getDashboardData() {
    try {
        const user = await fetchUserData(1);
        
        // Promise.all for concurrent execution
        const [posts, comments] = await Promise.all([
            Promise.resolve(["Post 1", "Post 2"]),
            Promise.resolve(["Comment 1"])
        ]);
        
        return { user, posts, comments };
    } catch (err) {
        console.error("Dashboard failed to load", err);
    }
}


// ============================================================================
// SECTION 11: ERROR HANDLING
// ============================================================================

class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "CustomAPIError";
        this.statusCode = statusCode;
    }
}

function processPayment(amount) {
    try {
        if (typeof amount !== 'number') {
            throw new CustomAPIError("Invalid amount type", 400);
        }
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        console.log(`Processing $${amount}`);
    } catch (error) {
        if (error instanceof CustomAPIError) {
            console.error(`API Error [${error.statusCode}]: ${error.message}`);
        } else {
            console.error(`Standard Error: ${error.message}`);
        }
    } finally {
        console.log("Payment routine finished.");
    }
}


// ============================================================================
// SECTION 12: MODERN ES6+ FEATURES
// ============================================================================

// 12.1 Destructuring
const config = { host: "localhost", port: 8080, ssl: true };
const { host, port, ssl: isSecure } = config;

const rgb = [255, 128, 0];
const [red, green, blue] = rgb;

// 12.2 Spread Operator (Copying/Merging)
const baseConfig = { db: "postgresql", user: "admin" };
const envConfig = { ...baseConfig, port: 5432 }; // Object spread
const combinedArray = [...fruits, ...numbers];   // Array spread

// 12.3 Optional Chaining (?.) & Nullish Coalescing (??)
const deepObject = { api: { endpoints: { getUsers: "/users" } } };
const route = deepObject?.api?.endpoints?.getUsers; // Safe traversal
const fallbackRoute = deepObject?.api?.v2 ?? "/default-route"; // Fallback if null/undefined

// 12.4 Maps (Key-Value pairs of any type)
const cacheMap = new Map();
cacheMap.set('user_1', { name: "Alice" });
cacheMap.set(100, "Numeric Key");
// console.log(cacheMap.get('user_1'));

// 12.5 Sets (Unique values only)
const uniqueIds = new Set([1, 1, 2, 3, 3, 4]); // Set(4) { 1, 2, 3, 4 }
uniqueIds.add(5);
uniqueIds.has(3); // true


// ============================================================================
// SECTION 13: GENERATORS & ITERATORS
// ============================================================================

// Generators allow pausing and resuming functions
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Custom Iterable
const customIterable = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};


// ============================================================================
// SECTION 14: DESIGN PATTERNS
// ============================================================================

// 14.1 Singleton Pattern (Only one instance exists)
class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        this.connectionString = "postgresql://localhost:5432";
        DatabaseConnection.instance = this;
    }
}

// 14.2 Factory Pattern (Creating objects based on conditions)
class CharacterFactory {
    static createCharacter(type, name) {
        switch (type) {
            case 'warrior': return { name, class: 'Warrior', hp: 100, dmg: 15 };
            case 'mage':    return { name, class: 'Mage', hp: 60, dmg: 45 };
            default:        throw new Error("Invalid class");
        }
    }
}

// 14.3 Observer Pattern (Pub/Sub)
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, fn) {
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(fn);
    }
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(fn => fn(data));
        }
    }
}


// ============================================================================
// SECTION 15: MINI-PROJECT - REACTIVE STATE MANAGER (Redux Clone)
// ============================================================================

/**
 * A highly advanced, functional State Management System implementing
 * the Flux architecture (similar to Redux). This demonstrates combining
 * closures, higher-order functions, default params, and the observer pattern.
 */
function createStore(reducer, initialState = {}) {
    let state = initialState;
    const listeners = new Set(); // Using Set for unique subscribers

    const getState = () => state;

    const dispatch = (action) => {
        if (!action || typeof action.type !== 'string') {
            throw new Error('Actions must have a valid string type.');
        }
        // Generate new state via pure reducer function
        state = reducer(state, action);
        // Notify all subscribers
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.add(listener);
        // Return unsubscribe function (Closure)
        return () => listeners.delete(listener);
    };

    // Initialize state
    dispatch({ type: '@@INIT' });

    return { getState, dispatch, subscribe };
}

// --- Using the State Manager ---

// 1. Define initial state
const initialAppState = {
    user: null,
    theme: 'light',
    todos: []
};

// 2. Define a Reducer (Pure function: (state, action) => newState)
function rootReducer(state = initialAppState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        default:
            return state;
    }
}

// 3. Initialize Store
const store = createStore(rootReducer);

// 4. Subscribe to changes
const unsubscribeLog = store.subscribe(() => {
    console.log('[STATE UPDATE]:', store.getState());
});

// 5. Dispatch actions
store.dispatch({ type: 'SET_USER', payload: { id: 99, name: 'CodeNinja' } });
store.dispatch({ type: 'TOGGLE_THEME' });
store.dispatch({ type: 'ADD_TODO', payload: { id: 1, text: 'Master JavaScript', done: false } });

// 6. Cleanup
unsubscribeLog();
store.dispatch({ type: 'TOGGLE_THEME' }); // Will update state, but won't log (unsubscribed)

