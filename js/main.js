// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Close" : "Menu";
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Forms: GitHub Pages cannot process forms, so these open the visitor's
// email app with the message filled in. To receive form submissions
// directly, see README.md (Formspree option).
const EMAIL = "support@oncallhomecarelife.com";

document.querySelectorAll("form[data-mailto]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const lines = [];
    for (const [key, value] of data.entries()) {
      if (value) lines.push(`${key}: ${value}`);
    }
    const subject = form.dataset.mailto;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    if (status) {
      status.textContent = `Your email app should open with your message ready to send. If it doesn't, email us at ${EMAIL} or call (318) 582-8684.`;
    }
  });
});
