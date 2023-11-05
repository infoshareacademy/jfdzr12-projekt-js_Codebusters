// Napisz funkcję, która do listy zamawianych produktów doda nowy.

// Przykładowe wywołanie:

// ```js
// addToBasket(basket, {name: 'Lolipop', value: 1.78})
// ```

const products = [
  { name: "Candy", value: 2 },
  { name: "Milk", value: 3 },
  { name: "Bread", value: 5 },
  { name: "Ham", value: 6 },
];

function addToBasket() {
  return products.unshift({ name: "Lolipop", value: 1.78 });
}
addToBasket();

console.log(products);
