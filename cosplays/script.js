// script.js
// Builds cosplay cards into the grid with classes that match your CSS,
// and renders tag badges for each item (data-tags on card for filtering).

(() => {
  // Example cosplay product list (add or edit items here).
  // First 6 -> "Anime/Vocaloids". Last 2 -> "Superheroes".
  const cosplays = [
    { name: "Elliot Milestone", img: "../images/elliotcosplay.webp", desc: "Warm, star-adorned outfit with spiked bracelets.", href: "/cosplay_info/cosplay-info.html", tags: ["Anime/Vocaloids"] },
    { name: "C00lkidd Set",      img: "../images/c00lkidd.webp",      desc: "Retro neon-themed outfit and visor.",                       href: "/cosplay_info/cosplay-info.html", tags: ["Anime/Vocaloids"] },
    { name: "Star Worker",       img: "../images/elliotcosplay.webp", desc: "Gold star belt and flaming pants.",                         href: "/cosplay_info/cosplay-info.html", tags: ["Anime/Vocaloids"] },
    { name: "Night Flame",       img: "../images/c00lkidd_404.webp",  desc: "Dark theme with glowing red outline.",                      href: "/cosplay_info/cosplay-info.html", tags: ["Anime/Vocaloids"] },
    { name: "Flare Guard",       img: "../images/elliotcosplay.webp", desc: "Spiked wristbands & visor combo.",                         href: "/cosplay_info/cosplay-info.html", tags: ["Anime/Vocaloids"] },
    { name: "Solar Star",        img: "../images/c00lkidd.webp",      desc: "Star glasses & radiant belt.",                             href: "/cosplay_info/cosplay-info.html", tags: ["Anime/Vocaloids"] },

    // Superheroes
    { name: "Valkyrie Visor",    img: "../images/elliotcosplay.webp", desc: "Gold winged visor & flame jacket.",                        href: "/cosplay_info/cosplay-info.html", tags: ["Superheroes"] },
    { name: "Blaze Walker",      img: "../images/c00lkidd.webp",      desc: "Red-and-yellow triangular jacket look.",                    href: "/cosplay_info/cosplay-info.html", tags: ["Superheroes"] }
  ];

  // find container (make sure your HTML has id="cosplay-list")
  const container = document.getElementById('cosplay-list');
  if (!container) {
    console.warn('No #cosplay-list found — add id="cosplay-list" to your .cosplay-grid element.');
    return;
  }

  // clear existing children (prevents duplicates if static cards exist)
  container.innerHTML = '';

  // create card elements
  cosplays.forEach(item => {
    const article = document.createElement('article');
    article.className = 'card cosplay-card'; // matches your CSS

    // save tags as data attribute for future filtering (normalized to lower-case)
    const tagsNormalized = (item.tags || []).map(t => String(t).trim());
    article.setAttribute('data-tags', tagsNormalized.join(','));

    // build inner HTML — exact classes used by CSS/Bootstrap
    // tags rendered as a small list of <span class="tag-badge tag-...">
    const tagHtml = tagsNormalized.map(t => {
      const safeClass = t.toLowerCase().replace(/[^\w-]/g, '-'); // e.g. "Anime/Vocaloids" -> anime-vocaloids
      return `<span class="tag-badge tag-${safeClass}">${escapeHtml(t)}</span>`;
    }).join(' ');

    // add query param to href so cosplay-info page can know which item to show
    const hrefWithQuery = item.href + '?item=' + encodeURIComponent(item.name);

    article.innerHTML = `
      <img src="${item.img}" loading="lazy" class="card-img-top" alt="${escapeHtml(item.name)}">
      <div class="card-body d-flex flex-column">
        <div class="tag-list">${tagHtml}</div>
        <h5 class="card-title">${escapeHtml(item.name)}</h5>
        <p class="card-text text-muted small">${escapeHtml(item.desc)}</p>
        <div class="mt-auto">
          <a href="${hrefWithQuery}" class="btn btn-outline-light btn-sm w-100" aria-label="View ${escapeHtml(item.name)}">View</a>
        </div>
      </div>
    `;

    // append to grid
    container.appendChild(article);
  });

  // small helper to avoid injecting raw HTML (basic escape)
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
