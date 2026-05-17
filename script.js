const themeButton = document.querySelector(".icon-button");

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("alt-theme");
});

const cards = document.querySelectorAll(".work-card");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});