// Buat Input Fungsinya //
// 1. Input data
function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Konversi ke meter
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('resultBox');

// 2. Menghitung BMI
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category;

        if (bmi < 18.5) {
            category = 'Kekurangan Berat Badan';
            resultBox.classList.add(${category});
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Berat Badan Ideal';
            resultBox.classList.add(${category});
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Kelebihan Berat Badan';
            resultBox.classList.add(${category});;
        } else {
            category = 'Obesitas';
            resultBox.classList.add(${category});;
        }
// 3. Validasi dan Kalkulasi Hasil
        resultBox.innerText = `Hasil: ${bmi}`;
        resultBox.classList.remove('error');
        resultBox.classList.add('success');
    } else {
        resultBox.innerText = 'Yang bener aja? Kosong dong?';
        resultBox.classList.remove('success');
        resultBox.classList.add('error');
    }
}

function resetForm() {
    document.getElementById('bmiForm').reset();
}