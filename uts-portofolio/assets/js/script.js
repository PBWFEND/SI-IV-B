// =======================
// DARK / LIGHT MODE
// =======================
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.className = "btn btn-outline-secondary ms-2";

// masukin ke navbar
document.querySelector(".navbar .container-fluid").appendChild(toggleBtn);

// cek mode tersimpan
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerText = "☀️";
}

// toggle mode
toggleBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerText = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.innerText = "🌙";
    }
};

// =======================
// BACK TO TOP
// =======================
const backToTop = document.getElementById("backToTop");

window.onscroll = () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// =======================
// FORM VALIDASI
// =======================
document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email tidak valid!");
        return;
    }

    alert("Pesan berhasil dikirim!");
    this.reset();
};

// =======================
// SMOOTH SCROLL (NAVBAR)
// =======================
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
