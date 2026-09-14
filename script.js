// 1. Fungsi ketika tombol "Klik Saya" diklik
function showMessage() {
    alert("Halo! Tombol berhasil diklik 🚀");
}

// 2. Fungsi ketika tombol "Sapa Saya" diklik
function greetUser() {
    // Mengambil nilai teks yang diketik di input dengan id="name"
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();

    // Mengambil elemen paragraf untuk tempat hasil dengan id="result"
    const result = document.getElementById("result");

    // Pengecekan (Logika IF-ELSE) - Menggunakan palet 2 warna konsisten
    if (name === "") {
        result.className = "show";
        result.textContent = "⚠️ Silakan masukkan nama kamu terlebih dahulu.";
        nameInput.focus();
    } else {
        result.className = "show";
        result.textContent = "Halo, " + name + "! Senang bertemu denganmu 👋";
    }
}

// Tambahan UX: Tekan tombol Enter pada input untuk menyapa
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    if (nameInput) {
        nameInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                greetUser();
            }
        });
    }
});