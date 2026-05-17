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

// --- PROPERTY LISTINGS GRID ---
const listingGrid = document.querySelector("#listing-grid");
if (listingGrid && Array.isArray(window.propertyListings)) {
  const officeCard = listingGrid.querySelector(".office-card");
  
  window.propertyListings.forEach((listing) => {
    const card = document.createElement("article");
    card.className = "listing-card";
    
    // Condition to completely hide the image container if there is no image path
    card.innerHTML = `
      ${listing.image ? `<div class="listing-photo" style="background-image: url('${listing.image}')"></div>` : ''}
      <div class="listing-copy">
        <span class="card-kicker">${listing.status}</span>
        <h3>${listing.title}</h3>
        <p class="listing-price">${listing.price}</p>
        <p class="listing-details">${listing.details}</p>
        <p>${listing.description}</p>
        <a href="${listing.link}">${listing.linkText}</a>
      </div>
    `;
    listingGrid.insertBefore(card, officeCard);
  });
}

// --- VIDEOS GRID ---
const videoGrid = document.querySelector("#video-grid");
if (videoGrid && Array.isArray(window.siteVideos)) {
  const uploadNote = videoGrid.querySelector(".upload-note");
  
  window.siteVideos.forEach((item) => {
    const card = document.createElement("article");
    card.className = "video-card";
    
    // Fixed: Now accurately targets 'item' variables for your videos
    card.innerHTML = `
      <div class="video-thumb" style="background-image: url('${item.poster}')">
        <div class="play-button">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </div>
      </div>
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
