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

const listingGrid = document.querySelector("#listing-grid");

if (listingGrid && Array.isArray(window.propertyListings)) {
  const officeCard = listingGrid.querySelector(".office-card");

  window.propertyListings.forEach((listing) => {
  const card = document.createElement("article");
  card.className = "listing-card";
  card.innerHTML = `
    <a class="listing-banner-link" href="${listing.link}" aria-label="Open ${listing.title}">
      <span class="listing-cta">${listing.title}</span>
    </a>
  `;

  listingGrid.insertBefore(card, officeCard);
});
}

const videoGrid = document.querySelector("#video-grid");

if (videoGrid && Array.isArray(window.siteVideos)) {
  const uploadNote = videoGrid.querySelector(".upload-note");

  window.siteVideos.forEach((item) => {
    const card = document.createElement("article");
    card.className = "video-card";
    const hasVideo = item.video && item.video.trim().length > 0;

    card.innerHTML = `
      ${
        hasVideo
          ? `<video controls preload="metadata" poster="${item.poster}">
              <source src="${item.video}" type="video/mp4" />
            </video>`
          : `<div class="video-poster" style="background-image: url('${item.poster}')">
              <span class="play-badge" aria-hidden="true">Info</span>
            </div>`
      }
      <div class="video-copy">
        <span class="card-kicker">${item.status}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}">${item.linkText}</a>
      </div>
    `;

    videoGrid.insertBefore(card, uploadNote);
  });
}
