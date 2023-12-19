import { getPhotosData } from "./api/getData.js";
import { addOrdersData } from "./api/pushData.js";

// const products = [
//   {
//     id: "0",
//     image: "examples_photos/family.jpg",
//     title: "Family photo shoot",
//     tags: ["family", "love"],
//     location: "studio",
//     cost: 10,
//   },
//   {
//     id: "1",
//     image: "examples_photos/newborn.jpg",
//     title: "Newborn photo shoot",
//     tags: ["newborn", "baby"],
//     location: "home, studio",
//     cost: 15,
//   },
//   {
//     id: "2",
//     image: "examples_photos/wedding.jpg",
//     title: "Wedding photo shoot",
//     tags: ["wedding", "love"],
//     location: "outdoors, studio",
//     cost: 10,
//   },
//   {
//     id: "3",
//     image: "examples_photos/air.jpg",
//     title: "Air2Air sessions",
//     tags: ["air2air", "nature"],
//     location: "outdoors, air",
//     cost: 100,
//   },
// ];

const allPhotosContainer = document.querySelector(".portfolio__photos");

//PORTFOLIO
getPhotosData().then((elements) => {
  elements.forEach((element) => {
    const portfolioItemContainer = document.createElement("div");
    portfolioItemContainer.classList.add("portfolio__items");
    allPhotosContainer.prepend(portfolioItemContainer);

    const portfolioImage = document.createElement("img");
    portfolioImage.classList.add("portfolio__photo");
    portfolioImage.src = `${element.url}`;
    portfolioItemContainer.prepend(portfolioImage);
  });

  const photos = document.querySelectorAll(".portfolio__photo");

  photos.forEach((photo) => {
    photo.addEventListener("click", (e) => {
      // MODAL CREATE
      const modal = document.createElement("div");
      modal.classList.add("portfolio__modal");
      document.body.prepend(modal);

      // OVERLAY CREATE AND DISPLAY
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";

      // PORTFOLIO MODAL - IMAGE CREATE AND DISPLAY
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("portfolio__image-container");
      modal.prepend(imageContainer);

      const image = document.createElement("img");
      image.classList.add("portfolio__image");

      const foundProduct = elements.find((element) => element.url == photo.src);

      console.log(foundProduct);

      console.log(e.target);
      image.src = `${e.target.src}`;
      imageContainer.prepend(image);

      // INFO CONTAINER CREATE AND DISPLAY
      const infoContainer = document.createElement("div");
      infoContainer.classList.add("portfolio__info-container");
      modal.append(infoContainer);

      // AUTHOR CREATE AND DISPLAY
      const title = document.createElement("h2");
      title.classList.add("portfolio__title");
      title.innerText = `${foundProduct.author}`;
      infoContainer.prepend(title);

      // PRICE CREATE AND DISPLAY
      const price = document.createElement("p");
      price.classList.add("portfolio__price");
      price.innerText = `${foundProduct.price}$`;
      infoContainer.append(price);
      /*
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
*/

      // IMAGE SIZES CREATE AND DISPLAY
      const locationText = document.createElement("p");
      locationText.classList.add("portfolio-modal__size-text");
      locationText.innerText = `Size: ${foundProduct.height} x ${foundProduct.width} px`;
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

        if (!basket) {
          basket = [];
        }

        basket.push(foundProduct);
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
    });
  });
});

// BASKET
const basketButton = document.querySelector(".header__links--basket");

// BASKET MODAL CREATE
basketButton.addEventListener("click", (e) => {
  const basketModal = document.createElement("div");
  basketModal.classList.add("basket__modal");
  document.body.prepend(basketModal);

  // OVERLAY CREATE AND DISPLAY
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";

  let basket = JSON.parse(localStorage.getItem("boughtProducts"));

  if (!basket) {
    const basketEmptyContainer = document.createElement("div");
    basketEmptyContainer.classList.add("basket__empty-container");
    basketModal.prepend(basketEmptyContainer);

    const basketEmptyText = document.createElement("p");
    basketEmptyText.classList.add("basket__empty-text");
    basketEmptyText.innerHTML = "Your basket is empty";
    basketEmptyContainer.prepend(basketEmptyText);
  } else {
    const basketProductsContainer = document.createElement("div");
    basketProductsContainer.classList.add("basket__products-container");
    basketModal.prepend(basketProductsContainer);

    basket.forEach((element) => {
      const basketProductContainer = document.createElement("div");
      basketProductContainer.classList.add("basket__product-container");
      basketProductsContainer.prepend(basketProductContainer);

      const basketImageContainer = document.createElement("div");
      basketImageContainer.classList.add("basket__image-container");
      basketProductContainer.prepend(basketImageContainer);

      const basketImage = document.createElement("img");
      basketImage.classList.add("basket__image");
      basketImage.src = `${element.url}`;
      basketImageContainer.prepend(basketImage);

      // TITLE CREATE AND DISPLAY
      const basketTitle = document.createElement("p");
      basketTitle.classList.add("basket__title");
      basketTitle.innerText = `${element.author}`;
      basketProductContainer.append(basketTitle);

      // PRICE CREATE AND DISPLAY
      const basketPrice = document.createElement("p");
      basketPrice.classList.add("basket__price");
      basketPrice.innerText = `${element.price}$`;
      basketProductContainer.append(basketPrice);
    });

    const basketTotalCostContainer = document.createElement("div");
    basketTotalCostContainer.classList.add("basket__total-cost-container");
    basketModal.appendChild(basketTotalCostContainer);

    const productsCost = basket.map((element) => element.price);
    const productsTotalCost = productsCost.reduce((acc, cur) => acc + cur, 0);

    const basketTotalCostText = document.createElement("p");
    basketTotalCostText.classList.add("basket__total-cost-text");
    basketTotalCostText.innerHTML = `Total cost: ${productsTotalCost}$`;
    basketTotalCostContainer.appendChild(basketTotalCostText);

    const basketBuyButton = document.createElement("button");
    basketBuyButton.classList.add("basket__buy-button");
    basketBuyButton.innerHTML = "Buy";
    basketTotalCostContainer.appendChild(basketBuyButton);

    basketBuyButton.addEventListener("click", (e) => {
      localStorage.clear();
      basketCloseModal();
    });
  }

  // PRICE MODAL CLOSE BUTTON
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

  function basketCloseModal() {
    basketModal.remove();
    // OVERLAY NONE
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
