// Buat Input Fungsinya //
function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Konversi ke meter
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category;

        if (bmi < 18.5) {
            category = 'Kekurangan berat badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Kelebihan berat badan';
        } else {
            category = 'Obesitas';
        }

        document.getElementById('result').innerHTML = `BMI Anda: ${bmi} (${category})`;
    } else {
        alert('Masukkan nilai tinggi dan berat badan yang valid');
    }
}

function showContent(value) {
    // Sembunyikan semua konten
    for (let i = 1; i <= 3; i++) {
        document.getElementById('content' + i).classList.remove('active');
    }

    // Tampilkan hanya konten yang dipilih
    document.getElementById('content' + number).classList.add('active');
}