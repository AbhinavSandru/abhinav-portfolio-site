(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("show");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close menu on click
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Copy-to-clipboard quick message
  const form = document.getElementById("copy-form");
  const ta = document.getElementById("quick-message");
  const status = document.getElementById("copy-status");

  if (form && ta) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(ta.value.trim());
        if (status) status.textContent = "Copied to clipboard.";
      } catch (err) {
        if (status) status.textContent = "Could not copy. Select the text and copy manually.";
      }
      setTimeout(() => { if (status) status.textContent = ""; }, 2500);
    });
  }
})();
