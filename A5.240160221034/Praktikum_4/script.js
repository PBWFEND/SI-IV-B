// Menampilkan pesan saat halaman selesai dimuat
window.addEventListener("load", function () {
    alert("Selamat datang di Portofolio Putri Indra Lestari Aryanto!");
});

// Fungsi menyapa pengunjung
function sapaPengunjung() {

    let nama = prompt("Masukkan nama Anda:");

    if (nama && nama.trim() !== "") {
        alert("Halo, " + nama + "! Terima kasih telah mengunjungi portofolio saya 😊");
    } else {
        alert("Terima kasih sudah berkunjung 😊");
    }

}

// Menampilkan tanggal saat halaman dibuka
const tanggal = new Date();

document.getElementById("tanggal").innerHTML =
    "Tanggal akses : " + tanggal.toLocaleDateString("id-ID");