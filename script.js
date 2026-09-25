// Benchline Computer Repair — V1
// Edit these values before public launch.
const CONFIG = {
  businessEmail: "REPLACE_WITH_BUSINESS_EMAIL@example.com",
  launchSpotsTotal: 10,
  launchSpotsRemaining: 10
};

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const spotsRemaining = document.getElementById("spotsRemaining");
const spotsMeter = document.getElementById("spotsMeter");

if (spotsRemaining && spotsMeter) {
  const total = Math.max(1, CONFIG.launchSpotsTotal);
  const remaining = Math.max(0, Math.min(CONFIG.launchSpotsRemaining, total));
  const pct = (remaining / total) * 100;
  spotsRemaining.textContent = `${remaining} / ${total}`;
  spotsMeter.style.width = `${pct}%`;
}

const footerEmail = document.getElementById("footerEmail");
if (footerEmail && !CONFIG.businessEmail.startsWith("REPLACE_")) {
  footerEmail.textContent = CONFIG.businessEmail;
}

const form = document.getElementById("diagnosticForm");
const formStatus = document.getElementById("formStatus");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (CONFIG.businessEmail.startsWith("REPLACE_")) {
    formStatus.textContent = "Before launch, replace the placeholder business email in script.js.";
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent(`Benchline Diagnostic Request — ${data.get("name") || "New Customer"}`);

  const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Device: ${data.get("device")}
Manufacturer / Model: ${data.get("model")}

What's going on?
${data.get("issue")}

When did it start?
${data.get("started")}

What have you already tried?
${data.get("tried")}

Important data on device?
${data.get("data")}

---
Submitting this request does not authorize paid repairs.`
  );

  formStatus.textContent = "Opening your email app with the diagnostic request...";
  window.location.href = `mailto:${CONFIG.businessEmail}?subject=${subject}&body=${body}`;
});
