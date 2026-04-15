const darkBtn = document.getElementById("darkBtn");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const icon = document.getElementById("themeIcon");


darkBtn.addEventListener("click", () => {
  icon.style.transform = "rotate(180deg) scale(0.8)";

  setTimeout(() => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      icon.src = "https://cdn-icons-png.flaticon.com/128/14629/14629698.png"; // sun
    } else {
      icon.src = "https://cdn-icons-png.flaticon.com/128/1687/1687788.png"; // moon
    }

    icon.style.transform = "rotate(0deg) scale(1)";
  }, 150);
});


menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");

  menuBtn.style.transform = "rotate(180deg) scale(0.8)";

  setTimeout(() => {
    if (menu.classList.contains("show")) {
      menuBtn.textContent = "✖";
    } else {
      menuBtn.textContent = "☰";
    }
    menuBtn.style.transform = "rotate(0deg) scale(1)";
  }, 150);
});


const words = [
  "Digital Experiences",
  "Stunning Websites",
  "Brand Identities"
];

let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[i];

  if (isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j--);
  } else {
    document.getElementById("typing").textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

typeEffect();

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});


document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

  
    menu.classList.remove("show");
    menuBtn.textContent = "☰";

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});