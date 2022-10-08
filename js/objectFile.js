class Book {
  constructor(
    name,
    author,
    yearPublished,
    daysSincePublish,
  ) {
    this.name = name;
    this.author = author;
    this.yearPublished = yearPublished;
    this.daysSincePublish = new Date() - yearPublished;
  }
}
let a = 15;
let b = 15;
if (a == b) {
  console.log("a and b match!");
} else {
  console.error("a and b don't match...");
}

export default Book;