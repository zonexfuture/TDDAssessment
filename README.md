# TDD: Milestone

## Getting Started

1. Clone this repo.
2. In your terminal, run `npm install`.
3. In your terminal, run `npm test`.
4. Edit `script.js` until you are passing all test cases!
5. _(Optional)_ You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you'd like to only run the tests for the problem you're working on.
6. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Exercises

### TDD 1: higherOrLower

`higherOrLower(value1: number, value2: number)` returns a string indicating whether `value1` is `"higher"`, `"lower"`, or `"equal"` to `value2`.

You can assume that the arguments will be numbers.

```js
higherOrLower(5, 6); // => "lower"
higherOrLower(6.2, 5); // => "higher"
higherOrLower(6, 6); // => "equal"
```

### TDD 2: dvdCollection

`dvdCollection(movies1: string[], movies2: string[], movies3: string[])` is a function that takes three arrays of movie names as arguments and returns a single array of all the strings sorted in ascending alphabetical order.

```js
dvdCollection(
  ["The Hangover", "Zoolander"],
  ["The Godfather", "The Notebook"],
  ["The Matrix", "The Avengers"]
);
// => ["The Avengers", "The Godfather", "The Hangover", "The Matrix", "The Notebook", "Zoolander"]
```

### TDD 3: studentBody

`studentBody(students: {name: string, age: number, grade: number}[])` is a function that takes an array of objects as an argument. Each object contains the name, age, and grade of a student. The function should return an object that contains the total number of students in the array, the average age of all students, and the average grade of all students.

```js
studentBody([
  { name: "Stella", age: 25, grade: 11 },
  { name: "Mohammed", age: 31, grade: 13 },
  { name: "Brian", age: 19, grade: 18 },
]); // => { total: 3, age: 25, grade: 14 }
```

### TDD 4: fruitBasket

`fruitBasket(fruitNames: string[])` is a function that takes an array of strings as an argument, where each string is the name of a fruit. The function outputs an array of objects with the following properties and methods:

- `name: string`: the name of the fruit
- `weight: number`: the weight of the fruit (random number between 1 and 10)
- `eat: () => string`: a function that returns `"You ate a [fruit name]!"` when called
- `throwAway: () => string`: a function that returns `"You threw away a [fruit name]!"` when called

The returned objects can be regular objects or instances of a `Fruit` class that you define.

```js
const fruits = fruitBasket(["pear", "apple", "banana"]); /* => [
  {
    name: 'pear',
    weight: 1,
    eat: [Function: eat],
    throwAway: [Function: throwAway]
  },
  {
    name: 'apple',
    weight: 3,
    eat: [Function: eat],
    throwAway: [Function: throwAway]
  },
  {
    name: 'banana',
    weight: 2,
    eat: [Function: eat],
    throwAway: [Function: throwAway]
  }
]*/

fruits[0].eat(); // => "You ate a pear!"
```

### TDD 5: getBooksByLanguage

`getBooksByLanguage(books: {title: string, language: string}[])` returns an object where each key is a language, and its value is an array of all the books written in that language.

**You will only get credit if you use `reduce`!**

```js
const books = [
  { title: "金雲翹傳", language: "zh" },
  { title: "Kongens Fald", language: "da" },
  { title: "肉蒲團", language: "zh" },
  { title: "Seitsemän veljestä: Kertomus", language: "fi" },
  { title: "The Gold Horns", language: "da" },
  { title: "Kalevala", language: "fi" },
  { title: "Työmiehen vaimo", language: "fi" },
  { title: "封神演義", language: "zh" },
  { title: "Samlede Værker, Andet Bind", language: "da" },
];

getBooksByLanguage(books); /* => {
  zh: [ '金雲翹傳', '封神演義', '肉蒲團' ],
  fi: [ 'Kalevala', 'Seitsemän veljestä: Kertomus', 'Työmiehen vaimo' ],
  da: [ 'Samlede Værker, Andet Bind', 'Kongens Fald', 'The Gold Horns' ]
}*/
```

### OPTIONAL: coinMachine

Our coin machine is broken! We need you to write a function that will take a number in cents as an argument and return the correct change in coins. The function should return an object with the number of quarters, dimes, nickels, and pennies needed to make the change.

```js
coinMachine(99); // => { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }
```
