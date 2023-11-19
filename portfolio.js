const products = [
  {
    id: "0",
    image: "examples_photos/family.jpg",
    title: "Family photoshoot",
    tags: ["family", "love"],
    location: "Studio",
    cost: "10$",
  },
  {
    id: "1",
    image: "examples_photos/newborn.jpg",
    title: "Newborn photoshoot",
    tags: ["newborn", "baby"],
    location: "Home, studio",
    cost: "15$",
  },
  {
    id: "2",
    image: "examples_photos/wedding.jpg",
    title: "Wedding photoshoot",
    tags: ["wedding", "love"],
    location: "Outdoors, studio",
    cost: "10$",
  },
  {
    id: "3",
    image: "examples_photos/air.jpg",
    title: "Air2Air sessions",
    tags: ["air2air", "nature"],
    location: "Outdoors, air",
    cost: "100$",
  },
];

const photos = document.querySelectorAll(".photos");
console.log(photos);

const portfolioSection = document.querySelector(".portfolio_photos");
const buttonClose = document.createElement("button");
buttonClose.innerHTML = "X";
buttonClose.classList.add("modal__button-close");

photos.forEach((photo) => {
  photo.addEventListener("click", (e) => {
    const modal = document.createElement("div");
    modal.classList.add("portfolio__modal");
    portfolioSection.prepend(modal);

    const image = document.createElement("img");
    image.classList.add("portfolio__image");

    const foundProduct = products.find(
      (element) => element.id == photo.attributes["data-id"].value
    );

    image.src = `${foundProduct.image}`;
    modal.prepend(image);

    modal.append(buttonClose);
    buttonClose.addEventListener("click", (e) => {
      modal.remove();
    });
  });
});
