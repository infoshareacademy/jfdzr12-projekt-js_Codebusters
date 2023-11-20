# Projekt: JavaScript - obiekty i kolekcje

## Dodanie wartości brutto produktu

Napisz funkcję, która dla listy produktów zwróci nową tablicę produktów z wyliczoną wartością brutto dla każdego z nich.
Wejściowa lista nie powinna zostać zmieniona.

Przykład działania dla pojedynczego produktu

```js
const item = {
  name: 'Candy',
  value: 2,
}

enrichWithGrossValue(item, 0.23) // { name: 'Candy', value: { net: 2, gross: 2.46 } }

```

## Dodanie produktu do koszyka

Napisz funkcję, która do listy zamawianych produktów doda nowy.

Przykładowe wywołanie:

```js
addToBasket(basket, {name: 'Lolipop', value: 1.78})
```

## Łączenie zamówień

Napisz funkcję, która doda do koszyka produkty z poprzedniego zamówienia.
Poprzednie zamówienie nie powinno zostać zmienione.

Przykładowe wywołanie:

```js
const recentOrder = {
  date: '2023-11-05',
  products: [{
    name: 'Candy',
    value: 2,
  }]
}

const basket = [{
  name: 'Lolipop',
  value: 1.78,
}]

addToBasket(basket, recentOrder)
```

## Kalkulator wartości zamówienia

Napisz funkcję, która dla listy zamawianych produktów zwróci całkowitą wartość zamówienia (kwotę do zapłaty).
Funkcja powinna pozwolić na uwzględnienie rabatu.

Przykładowy produkt:

```js
const item = {
  name: 'Candy',
  value: {
    net: 1,
    gross: 1.23,
  }
}
```
