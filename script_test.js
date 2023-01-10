const { expect } = require("chai");
const code = require("./script.js");

describe("higherOrLower", function () {
  it("is a function that returns a string", function () {
    expect(code.higherOrLower).to.be.a("function");
    const result = code.higherOrLower(10, 10);
    expect(result).to.be.a("string");
  });

  it("returns higher if value1 is greater than value2", function () {
    const result = code.higherOrLower(10, 5);
    expect(result).to.equal("higher");
  });

  it("returns lower if value1 is less than value2", function () {
    const result = code.higherOrLower(9.9, 10);
    expect(result).to.equal("lower");
  });

  it("returns equal if value1 is equal to value2", function () {
    const result = code.higherOrLower(15.2, 15.2);
    expect(result).to.equal("equal");
  });
});

describe("dvdCollection", function () {
  const test = [
    ["c", "b", "a", "j"],
    ["e", "d", "k", "f", "l"],
    ["g", "i", "h"],
  ];

  it("is a function that returns an array of strings", function () {
    expect(code.dvdCollection).to.be.a("function");
    const result = code.dvdCollection(...test);
    expect(result).to.be.an("array");
    result.forEach((item) => expect(item).to.be.a("string"));
  });

  it("returns an array with the correct length", function () {
    const result = code.dvdCollection(...test);
    const totalLength = test.reduce((sum, movies) => sum + movies.length, 0);
    expect(result).to.have.lengthOf(totalLength);
  });

  it("returns the correct strings in alphabetical order", function () {
    const result = code.dvdCollection(...test);
    expect(result).to.eql("abcdefghijkl".split(""));
  });
});

describe("studentBody", function () {
  const test = [
    { name: "Stella", age: 25, grade: 11 },
    { name: "Mohammed", age: 31, grade: 13 },
    { name: "Brian", age: 19, grade: 18 },
  ];

  it("is a function that returns an object", function () {
    expect(code.studentBody).to.be.a("function");
    const result = code.studentBody(test);
    expect(result).to.be.an("object");
  });

  it("returns an object with the correct keys", function () {
    const result = code.studentBody(test);
    expect(result).to.have.all.keys(["total", "age", "grade"]);
  });

  it("returns an object containing the correct values", function () {
    const result = code.studentBody(test);
    expect(result).to.eql({
      total: 3,
      age: (25 + 31 + 19) / 3,
      grade: (11 + 13 + 18) / 3,
    });
  });
});

describe("fruitBasket", function () {
  const test = ["dragonfruit", "mango", "persimmon", "kiwi"];

  it("is a function that returns an array of objects", function () {
    expect(code.fruitBasket).to.be.a("function");

    const result = code.fruitBasket(test);
    expect(result).to.be.an("array");
    expect(result).not.to.be.empty;
    result.forEach((fruit) => expect(fruit).to.be.an("object"));
  });

  it("returns an array with the same length as the input array", function () {
    const result = code.fruitBasket(test);
    expect(result).to.have.lengthOf(test.length);
  });

  it("returns an array of objects with the correct properties and methods", function () {
    const result = code.fruitBasket(test);
    test.forEach((fruitName, i) => {
      const fruit = result[i];
      expect(fruit.name).to.equal(fruitName);
      expect(fruit.weight).to.be.within(1, 10);
      expect(fruit.eat()).to.equal(`You ate a ${fruitName}!`);
      expect(fruit.throwAway()).to.equal(`You threw away a ${fruitName}!`);
    });
  });
});

describe("getBooksByLanguage", function () {
  const test = [
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

  it("is a function that returns an object", function () {
    expect(code.getBooksByLanguage).to.be.a("function");
    const result = code.getBooksByLanguage(test);
    expect(result).to.be.an("object");
  });

  it("returns an object with the correct keys", function () {
    const result = code.getBooksByLanguage(test);
    expect(result).to.have.all.keys(["zh", "fi", "da"]);
  });

  it("returns an object where each value is an array of strings", function () {
    const result = code.getBooksByLanguage(test);
    for (const language in result) {
      const books = result[language];
      expect(books).to.be.an("array");
      books.forEach((book) => expect(book).to.be.a("string"));
    }
  });

  it("returns an object with the correct languages and titles", function () {
    const result = code.getBooksByLanguage(test);
    const expected = {
      zh: ["金雲翹傳", "封神演義", "肉蒲團"],
      fi: ["Kalevala", "Seitsemän veljestä: Kertomus", "Työmiehen vaimo"],
      da: ["Samlede Værker, Andet Bind", "Kongens Fald", "The Gold Horns"],
    };

    for (const language in result) {
      expect(result[language]).to.have.members(expected[language]);
    }
  });
});

describe.skip("coinMachine", function () {
  it("is a function", function () {
    expect(code.coinMachine).to.be.a("function");
  });

  it("returns an object", function () {
    const result = code.coinMachine(123);
    expect(result).to.be.an("object");
  });

  it("returns an object with the correct number of quarters, dimes, nickels, and pennies", function () {
    const result = code.coinMachine(123);
    expect(result).to.be.an("object");
    expect(result).to.deep.equal({
      quarters: 4,
      dimes: 2,
      nickels: 0,
      pennies: 3,
    });
  });
});
