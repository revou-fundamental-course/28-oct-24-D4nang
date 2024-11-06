// Buat Input Fungsinya //
// 1. Input data
function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Konversi ke meter
    const weight = document.getElementById('weight').value;

// 2. Menghitung BMI
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category;

        if (bmi < 18.5) {
            category = 'Kekurangan Berat Badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Berat Badan Ideal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Kelebihan Berat Badan';
        } else {
            category = 'Obesitas';
        }
// 3. Validasi dan Kalkulasi Hasil
        document.getElementById('resultBox') = ${bmi};
    } else {
        alert('Yang bener aja? Kosong dong?');
    }
}

function resetForm() {
    document.getElementById('bmiForm').reset();
}