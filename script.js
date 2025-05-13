function calculateChargingTime() {
    // Ambil nilai dari input
    let capacity = document.getElementById('capacity').value; // Kapasitas Baterai (mAh)
    let voltage = document.getElementById('voltage').value;   // Voltase Charger (V)
    let current = document.getElementById('current').value;   // Arus Charger (A)

    // Konversi kapasitas ke Ah (1 Ah = 1000 mAh)
    capacity = capacity / 1000;

    // Hitung daya charger dalam Watt (Volt x Arus)
    let power = voltage * current; // Daya dalam Watt

    // Hitung waktu pengisian dalam jam
    let chargingTime = capacity / current; // Waktu pengisian dalam jam

    // Tampilkan hasil
    document.getElementById('chargingTime').innerText = chargingTime.toFixed(2);
    document.getElementById('power').innerText = power.toFixed(2);
}
