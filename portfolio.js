const products = [
  {
    id: "0",
    image: "examples_photos/family.jpg",
    title: "Family photoshoot",
    tags: ["family", "love"],
    location: "studio",
    cost: "10$",
  },
  {
    id: "1",
    image: "examples_photos/newborn.jpg",
    title: "Newborn photoshoot",
    tags: ["newborn", "baby"],
    location: "home, studio",
    cost: "15$",
  },
  {
    id: "2",
    image: "examples_photos/wedding.jpg",
    title: "Wedding photoshoot",
    tags: ["wedding", "love"],
    location: "outdoors, studio",
    cost: "10$",
  },
  {
    id: "3",
    image: "examples_photos/air.jpg",
    title: "Air2Air sessions",
    tags: ["air2air", "nature"],
    location: "outdoors, air",
    cost: "100$",
  },
];

const photos = document.querySelectorAll(".photos");
console.log(photos);

const portfolioSection = document.querySelector(".portfolio_photos");

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

    // IMAGE CREATE AND DISPLAY
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

    // INFO CONTAINER CREATE AND DISPLAY
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("portfolio__info-container");
    modal.append(infoContainer);

    // TITLE CREATE AND DISPLAY
    const title = document.createElement("h2");
    title.classList.add("portfolio__title");
    title.innerText = `${foundProduct.title}`;
    infoContainer.prepend(title);

    // TAGS CREATE AND DISPLAY
    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("portfolio__tags-container");

    foundProduct.tags.forEach((tag) => {
      const tagDiv = document.createElement("div");
      tagDiv.classList.add("portfolio__tag");
      tagDiv.innerText = tag;
      tagsContainer.prepend(tagDiv);
      infoContainer.append(tagsContainer);
    });

    // LOCATION CREATE AND DISPLAY
    const locationText = document.createElement("p");
    locationText.classList.add("portfolio__location-text");
    locationText.innerText = `Location: ${foundProduct.location}`;

    infoContainer.append(locationText);

    // BUTTON BUY CREATE AND DISPLAY
    const buttonBuy = document.createElement("button");
    buttonBuy.classList.add("portfolio__button-buy");
    buttonBuy.innerHTML = `Buy for ${foundProduct.cost}`;
    infoContainer.append(buttonBuy);

    buttonBuy.addEventListener("click", errorModal);

    // CLOSE MODAL
    const buttonClose = document.createElement("button");
    buttonClose.innerHTML = "x";
    buttonClose.classList.add("modal__button-close");
    modal.append(buttonClose);

    buttonClose.addEventListener("click", closeModal);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });

    function closeModal() {
      modal.remove();
      // OVERLAY NONE
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    }

    function errorModal() {
      const errorModal = document.createElement("div");
      errorModal.classList.add("portfolio__error-modal");
      const errorText = document.createElement("p");
      errorText.classList.add("portfolio__error-text");
      errorText.innerText =
        "Could not proceed your order. Please try again later";
      errorModal.prepend(errorText);
      portfolioSection.prepend(errorModal);

      errorModal.append(buttonClose);

      buttonClose.addEventListener("click", closeErrorModal);
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeErrorModal();
        }
      });

      function closeErrorModal() {
        errorModal.remove();
      }
    }
  });
});
