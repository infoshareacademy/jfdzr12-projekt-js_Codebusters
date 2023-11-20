const items = [
  { name: "Candy", value: { net: 2, gross: 2.46 } },
  { name: "Milk", value: { net: 3, gross: 3.69 } },
  { name: "Bread", value: { net: 5, gross: 6.15 } },
  { name: "Ham", value: { net: 6, gross: 7.38 } },
];

const sum = items.reduce(
  (accumulator, item) => accumulator + item.value.gross,
  0
);

let saleValue = Math.floor(sum); //rabat

console.log(Math.floor(saleValue) + "zł");
