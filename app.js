// nav section
const menuBtn = document.getElementById("menubtn");
const closeBtn = document.getElementById("closebtn");
const navlinks = document.getElementById("navlinks");
const darkBkg = document.querySelector(".dark-bkg");
const navToggle = () => {
  menuBtn.addEventListener("click", () => {
    navlinks.style.transform = "unset";
    darkBkg.classList.add("active-bkg");
  });

  closeBtn.addEventListener("click", () => {
    navlinks.style.transform = "";
    darkBkg.classList.remove("active-bkg");
  });
};
navToggle();

// img carousel
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const productImg = document.querySelector(".product-image");
const thumbnail = document.querySelectorAll(".thumbnail");
const carousel = () => {
  // mobile
  let i = 1;
  const cycle = () => {
    if (i >= 1 && i <= 4) {
      productImg.src = `images/image-product-${i}.jpg`;
    } else if (i === 0) {
      i = 4;
      productImg.src = `images/image-product-${i}.jpg`;
    } else if (i === 5) {
      i = 1;
      productImg.src = `images/image-product-${i}.jpg`;
    }
  };

  previousBtn.addEventListener("click", () => {
    i--;
    cycle();
  });

  nextBtn.addEventListener("click", () => {
    i++;
    cycle();
  });
  // desktop
  thumbnail.forEach((e) => {
    e.addEventListener("click", (img) => {
      const pic = img.target.dataset.id;
      productImg.src = `images/image-product-${pic}.jpg`;
    });
  });
};
carousel();

// input increment
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const cartInput = document.querySelector(".cart-input");
let n = 0;
cartInput.addEventListener("input", (e) => {
  const input = parseInt(e.target.value);
  if (input < 0) {
    return (n = 0);
  } else {
    n = input;
    basket(n);
    return n;
  }
});
const numIncrement = () => {
  minus.addEventListener("click", () => {
    if (n === 0) {
      basket(n);
      cartInput.value = 0;
    } else {
      n--;
      basket(n);
      cartInput.value = n;
    }
  });

  plus.addEventListener("click", () => {
    n++;
    basket(n);
    cartInput.value = n;
  });
};
numIncrement();


// cart basket
const basket = (quantity) => {
}