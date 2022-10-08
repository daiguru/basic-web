import Book from "./objectFile.js";

const robloxBook = new Book(
  "Roblox: top adventure games",
  "Harper",
  2018,
)
const guysRead = new Book(
  "Guys Read: True stories",
  "Candace Fleming, Douglas Florian, Nathan Hale, Thanhha Lai, Sy Montgomery, Jim Murphy, T.Edward Nickens, Elizabeth Partridge, Steve Sheinkin, and James Sturm",
  2014,
)
const lolongTime = new Book(
  "A Lolong Time Ago: a prehistory of the Philippines",
  "Michelline Suarez, Joonee Garcia, and Divine Reyes",
  2016,
)
const wallet = {
  color:"green",
  moneyInside:"1200 pesos",
  pouches:9,
  moveMoney: function(money) {
    this.moneyInside = money + " pesos";
    return "The money inside is now " + this.moneyInside;
  }
}
function allBooks() {
  let books = document.querySelectorAll("Book")
  return "BOOKS RETRIEVED"
  console.log(books)
}

console.log("My wallet: ", wallet);
console.log("Roblox book: ", robloxBook);
console.log("Guys Read: ", guysRead);
console.log("A lolong time ago: ", lolongTime);

export function allBooks();