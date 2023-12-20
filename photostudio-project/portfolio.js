import { getPhotosData } from "./api/getData.js";
import { addOrdersData } from "./api/pushData.js";

function overlayDisplay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function overlayNone() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
  document.body.style.overflow = "auto";
}

function showPortfolioPhotos() {
  getPhotosData().then((elements) => {
    const allPhotosContainer = document.querySelector(".portfolio__photos");
    elements.forEach((element) => {
      const portfolioItemContainer = document.createElement("div");
      portfolioItemContainer.classList.add("portfolio__items");
      allPhotosContainer.prepend(portfolioItemContainer);

      const portfolioImage = document.createElement("img");
      portfolioImage.classList.add("portfolio__photo");
      portfolioImage.src = `${element.url}`;
      portfolioImage.setAttribute("data-id", `${element.id}`);
      portfolioItemContainer.prepend(portfolioImage);
    });

    const photos = document.querySelectorAll(".portfolio__photo");

    photos.forEach((photo) => {
      photo.addEventListener("click", (e) => {
        // MODAL CREATE
        const modal = document.createElement("div");
        modal.classList.add("portfolio__modal");
        document.body.prepend(modal);

        overlayDisplay();

        // PORTFOLIO MODAL - IMAGE CREATE AND DISPLAY
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("portfolio__image-container");
        modal.prepend(imageContainer);

        const image = document.createElement("img");
        image.classList.add("portfolio__image");

        const foundProduct = elements.find(
          (element) => element.id == photo.getAttribute("data-id")
        );

        image.src = `${foundProduct.url}`;
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
          overlayNone();
        }
      });
    });
  });
}

function showBasketModal() {
  const basketButton = document.querySelector(".header__links--basket");
  basketButton.addEventListener("click", (e) => {
    const basketModal = document.createElement("div");
    basketModal.classList.add("basket__modal");
    document.body.prepend(basketModal);

    overlayDisplay();

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
      overlayNone();
    }

    applyDiscountToBasket();
  });
}

function showDiscountModal() {
  window.addEventListener("mouseout", function (event) {
    if (
      sessionStorage.getItem("discountModalShown") ||
      event.toElement ||
      event.relatedTarget ||
      document.getElementById("discount__modal")
    ) {
      return;
    }

    const discountModal = document.createElement("div");
    discountModal.id = "discount__modal";
    document.body.prepend(discountModal);

    overlayDisplay();

    // TITLE CREATE AND DISPLAY
    const discountTitle = document.createElement("h3");
    discountTitle.classList.add("discount__title");
    discountTitle.innerText = `SUPER PROPOSITION!`;
    discountModal.append(discountTitle);

    // PRICE MODAL CLOSE BUTTON
    const discountButtonClose = document.createElement("button");
    discountButtonClose.innerHTML = "x";
    discountButtonClose.classList.add("discount-modal__button-close");
    discountModal.append(discountButtonClose);

    discountButtonClose.addEventListener("click", discountCloseModal);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        discountCloseModal();
      }
    });

    function discountCloseModal() {
      discountModal.remove();
      overlayNone();
    }

    let countdownTime = 30;

    function startDiscountTimer() {
      let discountTimeTrue = localStorage.getItem("discountApplied");
      if (!discountTimeTrue) {
        localStorage.setItem("discountApplied", "true");
      }

      let discountTimer = setInterval(function () {
        countdownTime--;
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        discountTitle.innerText = `Limited time offer! Order now and get 10% discount. ${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds} Hurry up!`;
        if (countdownTime <= 0) {
          discountCloseModal();
        }
      }, 1000);

      setTimeout(function () {
        localStorage.removeItem("discountApplied");
      }, 60000);
    }

    startDiscountTimer();

    sessionStorage.setItem("discountModalShown", "true");
  });
}

function applyDiscountToBasket() {
  let basket = JSON.parse(localStorage.getItem("boughtProducts"));
  let discount = JSON.parse(localStorage.getItem("discountApplied"));

  if (basket && discount) {
    const discountPercentage = 10;
    const discountFactor = 1 - discountPercentage / 100;

    basket.forEach((element) => {
      element.price *= discountFactor;
    });

    localStorage.setItem("boughtProducts", JSON.stringify(basket));
  }
}

showPortfolioPhotos();
showBasketModal();
showDiscountModal();
