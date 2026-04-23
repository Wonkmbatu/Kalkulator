// Data perhitungan
const cash = 540000;
const qr = 540000;
const bbm = 470000;

// Hitung total pemasukan dan pengeluaran
const totalMasuk = cash + qr;
const sisaUang = totalMasuk - bbm;

// Tampilkan hasil dengan format ribuan
document.getElementById('sisa').textContent = sisaUang.toLocaleString('id-ID');


