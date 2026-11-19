// Renders one card per app from APPS (js/apps.js). No need to edit this file.
(function () {
  const grid = document.getElementById("app-grid");
  APPS.forEach(function (app) {
    const live = app.link && app.link !== "#";
    const card = document.createElement("article");
    card.className = "app-card";

    const img = document.createElement("img");
    img.src = app.flyer;
    img.alt = app.name + " flyer";
    img.loading = "lazy";

    const body = document.createElement("div");
    body.className = "app-card-body";

    const h2 = document.createElement("h2");
    h2.textContent = app.name;

    const p = document.createElement("p");
    p.textContent = app.pitch;

    const a = document.createElement("a");
    a.className = "btn" + (live ? "" : " btn-disabled");
    a.textContent = live ? "Open app" : "Coming soon";
    if (live) {
      a.href = app.link;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.setAttribute("aria-disabled", "true");
    }

    body.append(h2, p, a);
    card.append(img, body);
    grid.appendChild(card);
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
