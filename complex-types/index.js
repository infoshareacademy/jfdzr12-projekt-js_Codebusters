const products = [
  { name: "Candy", value: 2 },
  { name: "Milk", value: 3 },
  { name: "Bread", value: 5 },
  { name: "Ham", value: 6 },
];

let grossValue = () => {
  let gross = products.value + products.value * 0.23;
  return gross;
};

const netGross = Object.create(products);
Object.assign(netGross, products);

let net = products.value;
let gross = grossValue();

let valueNetGross = {
  net: net,
  gross: gross,
};

products.value = valueNetGross;

const productsGross = products.map((product) => {
  let grossValue = () => {
    let gross = product.value + product.value * 0.23;
    return gross;
  };

  let gross = grossValue();

  products.value = valueNetGross;

  let name = product.name;
  let value = product.value;

  return {
    name: name,
    value: {
      net: value,
      gross: gross,
    },
  };
});

console.log(productsGross);
