// Example cosplay product list
const cosplays = [
  { name: "Elliot Milestone", img: "images/elliotcosplay.webp", desc: "Star Employee outfit" },
  { name: "C00lkidd Outfit", img: "images/c00lkidd.webp", desc: "Legendary Roblox outfit" },
];

// Find container
const container = document.getElementById("cosplay-list");

// Loop through cosplays and build cards
cosplays.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.width = "18rem";
  card.innerHTML = `
    <img src="${item.img}" class="card-img-top" alt="${item.name}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.desc}</p>
      <a href="#" class="btn btn-primary">View</a>
    </div>
  `;
  container.appendChild(card);
});
