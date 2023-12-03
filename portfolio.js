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

    // PRICE CREATE AND DISPLAY
    const price = document.createElement("p");
    price.classList.add("portfolio__price");
    price.innerText = `${foundProduct.cost}`;
    infoContainer.append(price);

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
    buttonBuy.innerHTML = "Add to basket";
    infoContainer.append(buttonBuy);

    buttonBuy.addEventListener("click", addToLocalStorage);

    //ADD TO LOCAL STORAGE
    function addToLocalStorage() {
      let basket = JSON.parse(localStorage.getItem("boughtProducts"));

      // if empty
      if (!basket) {
        basket = [];
      }

      basket.push(foundProduct);
      console.log(basket);

      localStorage.setItem("boughtProducts", JSON.stringify(basket));
    }

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

console.log("Add basket section");

const basketSection = document.querySelector(".header__links--basket");

console.log("BASKET SECTION", basketSection);

// BASKET MODAL CREATE
basketSection.addEventListener("click", (e) => {
  const basketModal = document.createElement("div");
  basketModal.classList.add("basket__modal");
  basketSection.prepend(basketModal);

  let basket = JSON.parse(localStorage.getItem("boughtProducts"));
  console.log(basket);

  //BASKET PRODUCT CONTAINER

  // if(!basket) {
  //   const emptybasket
  // }

  basket.forEach((element) => {
    const basketProductContainer = document.createElement("div");
    basketProductContainer.classList.add("basket__items-container");
    basketModal.prepend(basketProductContainer);

    // BASKET IMAGE CREATE AND DISPLAY
    const basketImageContainer = document.createElement("div");
    basketImageContainer.classList.add("basket__image-container");
    basketProductContainer.prepend(basketImageContainer);

    const basketImage = document.createElement("img");
    basketImage.classList.add("basket__image");
    basketImage.src = `${element.image}`;

    basketImageContainer.prepend(basketImage);

    // TITLE CREATE AND DISPLAY
    const basketTitle = document.createElement("p");
    basketTitle.classList.add("basket__title");
    basketTitle.innerText = `${element.title}`;
    basketImageContainer.append(basketTitle);

    // PRICE CREATE AND DISPLAY
    const basketPrice = document.createElement("p");
    basketPrice.classList.add("basket__price");
    basketPrice.innerText = `${element.cost}`;
    basketImageContainer.append(basketPrice);
  });

  // PRICE CLOSE MODAL
  const basketButtonClose = document.createElement("button");
  basketButtonClose.innerHTML = "x";
  basketButtonClose.classList.add("price-modal__button-close");
  basketModal.append(basketButtonClose);

  basketButtonClose.addEventListener("click", basketCloseModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      basketCloseModal();
    }
  });

  // OVERLAY CREATE
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  portfolioSection.prepend(overlay);

  function basketCloseModal() {
    basketModal.remove();
    // OVERLAY NONE
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
