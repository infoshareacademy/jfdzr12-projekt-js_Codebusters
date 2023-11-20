# Projekt: JavaScript (podstawy)

Cel: utrwalenie podstaw JavaScript

## Ekstraktor hashtagów

Bazując na danym ciągu znaków, wypisz wszystkie hashtagi w nim zawarte.

Przykładowo dla napisu `Pierwszy #projekt #javascript` powinno to być
```text
projekt
javascript
```

## Zmiana formatu napisu

Wypisz alternatywną formę napisu w postaci [PascalCase](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Examples_of_multiple-word_identifier_formats).

Przyjmij, że bazowy napis może być zapisany w formacie `camelCase`, `PascalCase`, `snake_case` lub `kebab-case`.

Np. dla `projekt-java-script` wypisany powinien zostać napis `ProjektJavaScript`.

## Generator silnego hasła

Opracuj algorytm generujący silne hasło spełniające następujące wymogi:
- min. 1 mała litera
- min. 1 wielka litera
- min. 1 cyfra
- min. 1 znak specjalny
- o długości 12 znaków

Program powinien być prosty we wprowadzaniu zmian powyższych kryteriów, tak aby możliwe było szybkie, jednolinijkowe zmodyfikowanie:
- minimalnej ilości znaków z wybranych grup
- oczekiwanej długości hasła, w przedziale np. 12-24 znaków
