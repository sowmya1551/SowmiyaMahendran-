// ── TYPED.JS ──────────────────────────────
var typed = new Typed(".input", {
  strings: [
    "Aspiring HR Professional",
    "Passionate HR Learner",
    "HR Career Starter",
    "Emerging HR Specialist",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// ── ACTIVE NAV LINK ───────────────────────
document.querySelectorAll(".nav li a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav li a.active")?.classList.remove("active");
    this.classList.add("active");
  });
});

// ── HAMBURGER MENU ────────────────────────
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });
  document.querySelectorAll(".nav li a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

// ── CONTACT FORM ──────────────────────────
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submitBtn");

if (form && submitBtn) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = document.getElementById("fname").value.trim();
    const email   = document.getElementById("femail").value.trim();
    const message = document.getElementById("fmessage").value.trim();

    if (!name)    { alert("Please enter your name.");    return; }
    if (!email)   { alert("Please enter your email.");   return; }
    if (!message) { alert("Please enter your message."); return; }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    const formData = new FormData();
    formData.append("access_key", "9c8d03b1-c38b-41d9-bd0d-2d4a2af1193b");
    formData.append("subject", "New Message from Portfolio - Sowmya Mahendran");
    formData.append("from_name", "Sowmya Portfolio");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
      .then(async (response) => {
        const data = await response.json();
        console.log("Web3Forms Response:", data);

        if (data.success) {
          submitBtn.textContent = "✅ Message Sent!";
          submitBtn.style.background = "#00c853";
          submitBtn.style.color = "#fff";
          submitBtn.style.boxShadow = "0 0 20px #00c853";
          submitBtn.style.opacity = "1";
          form.reset();
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = "#0ef";
            submitBtn.style.color = "#081b29";
            submitBtn.style.boxShadow = "0 0 5px #0ef, 0 0 25px #0ef";
            submitBtn.disabled = false;
          }, 4000);
        } else {
          submitBtn.textContent = "❌ Failed. Try Again";
          submitBtn.style.background = "#ff1744";
          submitBtn.style.color = "#fff";
          submitBtn.style.boxShadow = "0 0 20px #ff1744";
          submitBtn.style.opacity = "1";
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = "#0ef";
            submitBtn.style.color = "#081b29";
            submitBtn.style.boxShadow = "0 0 5px #0ef, 0 0 25px #0ef";
            submitBtn.disabled = false;
          }, 4000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        submitBtn.textContent = "❌ No Internet";
        submitBtn.style.background = "#ff1744";
        submitBtn.style.color = "#fff";
        submitBtn.style.boxShadow = "0 0 20px #ff1744";
        submitBtn.style.opacity = "1";
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = "#0ef";
          submitBtn.style.color = "#081b29";
          submitBtn.style.boxShadow = "0 0 5px #0ef, 0 0 25px #0ef";
          submitBtn.disabled = false;
        }, 4000);
      });
  });
}

// ── DASHBOARD ZOOM MODAL ──────────────────
const dashImg      = document.getElementById("dashImg");
const imgModal     = document.getElementById("imgModal");
const modalClose   = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");
const modalImg     = document.getElementById("modalImg");

if (dashImg && imgModal) {
  dashImg.addEventListener("click", function () {
    modalImg.src = this.src;
    imgModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  document.querySelectorAll(".screenshot-img").forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      imgModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    imgModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
}

// ── SCROLL SPY ────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ── SMOOTH SCROLL ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ── HEADER GLOW ON SCROLL ─────────────────
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 30px rgba(0,238,255,0.15)";
  } else {
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.5)";
  }
});