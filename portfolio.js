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
buttonClose.innerHTML = "x";
buttonClose.classList.add("modal__button-close");

photos.forEach((photo) => {
  photo.addEventListener("click", (e) => {
    // MODAL CREATE
    const modal = document.createElement("div");
    modal.classList.add("portfolio__modal");
    portfolioSection.prepend(modal);

    // OVERLAY CREATE
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    portfolioSection.prepend(overlay);

    // OVERLAY DISPLAY
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";

    //IMAGE CREATE AND DISPLAY
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("portfolio__image-container");
    modal.prepend(imageContainer);

    const image = document.createElement("img");
    image.classList.add("portfolio__image");
    const foundProduct = products.find(
      (element) => element.id == photo.attributes["data-id"].value
    );
    image.src = `${foundProduct.image}`;
    imageContainer.prepend(image);

    //INFO CONTAINER CREATE AND DISPLAY
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("portfolio__info-container");
    modal.append(infoContainer);

    //TITLE CREATE AND DISPLAY
    const title = document.createElement("h2");
    title.classList.add("portfolio__title");
    title.innerText = `${foundProduct.title}`;
    infoContainer.prepend(title);

    //CLOSE MODAL
    modal.append(buttonClose);
    buttonClose.addEventListener("click", (e) => {
      modal.remove();
      // OVERLAY NONE
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });
});
