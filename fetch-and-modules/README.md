# Projekt: JavaScript – Fetch API i moduły

Ciąg dalszy rozbudowy projektu [HTML i CSS](https://github.com/infoshareacademy/jfdzr12-project-html-css)

Implementacja każdego z poniższych zadań powinna zostać wykonana jako osobny moduł.

## Pobieranie treści

Widok portfolio powinien zawierać dynamiczne zdjęcia, których listę otrzymujemy w odpowiedzi serwera.

Do wykonania zadania niezbędne będzie [zainstalowanie `json-server`](https://github.com/typicode/json-server#getting-started) i uruchomienie go z bazą danych w pliku `db.json` zawierającym [przykładowy zestaw zdjęć](https://picsum.photos).

Przykładowe uruchomienie serwera:
```shell
json-server db.json
```

Przykładowe zapytanie HTTP:
```http request
GET http://localhost:3000/photos
```

## Złożenie zamówienia

Korzystając z formularza utworzonego w zadaniu [Formularze i Storage API – Złożenie zamówienia](../forms-and-storage/README.md#złożenie-zamówienia), wyślij zamówienie do serwera po kliknięciu przycisku zakupu.

W tym celu tworzona została pusta kolekcja `orders` w pliku [`db.json`](../db.json).

Przykładowe zapytanie HTTP:
```http request
POST http://localhost:3000/orders
Content-Type: application/json

{
  "items": [{
    "id": "10"
  }, {
    "id": "12",
    "discount": 0.1
  }]
}
```
