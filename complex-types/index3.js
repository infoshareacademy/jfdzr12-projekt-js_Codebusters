// Napisz funkcję, która doda do koszyka produkty z poprzedniego zamówienia.
// Poprzednie zamówienie nie powinno zostać zmienione.

// Przykładowe wywołanie:

// ```js
// const recentOrder = {
//   date: '2023-11-05',
//   products: [{
//     name: 'Candy',
//     value: 2,
//   }]
// }

// const basket = [{
//   name: 'Lolipop',
//   value: 1.78,
// }]

// addToBasket(basket, recentOrder)
// ```

const recentOrder = {
  date: "2023-11-05",
  products: [
    {
      name: "Candy",
      value: 2,
    },
  ],
};

const basket = {
  name: "Lolipop",
  value: 1.78,
};
const newRecentOrder = Object.create(recentOrder);
Object.assign(newRecentOrder, recentOrder);

newRecentOrder.products.push(basket);
console.log(newRecentOrder);
