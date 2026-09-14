// 1. Fungsi ketika tombol "Klik Saya" diklik
function showMessage() {
    alert("Tombol berhasil diklik! 🚀");
}

// 2. Fungsi ketika tombol "Sapa Saya" diklik
function greetUser() {
    // Mengambil nilai teks yang diketik di input dengan id="name"
    const nameInput = document.getElementById("name");
    const name = nameInput.value;

    // Mengambil elemen paragraf untuk tempat hasil dengan id="result"
    const result = document.getElementById("result");

    // Pengecekan (Logika IF-ELSE)
    if (name.trim() === "") {
        result.style.color = "#dc2626"; // Warna merah jika kosong
        result.textContent = "Silakan masukkan nama terlebih dahulu.";
    } else {
        result.style.color = "#2563eb"; // Warna biru jika berhasil
        result.textContent = "Halo, " + name + "! Senang bertemu denganmu 👋";
    }
}