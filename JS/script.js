// Buat Input Fungsinya //
// 1. Buat Menghitung BMI nya
function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Konversi ke meter
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category;

        if (bmi < 18.5) {
            category = 'Kamu kekurangan berat badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Selamat! kamu udah ideal!';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Kamu kelebihan berat badan';
        } else {
            category = 'Kamu obesitas';
        }

        document.getElementById('result').innerHTML = `BMI Kamu : ${bmi} (${category})`;
    } else {
        alert('Yang bener aja? Kosong dong?');
    }
}

function showcontent(value) {
    // Sembunyikan semua konten
    for (let i = 1; i <= 3; i++) {
        document.getElementById('content' + i).classList.remove('active');
    }

    // Tampilkan hanya konten yang dipilih
    document.getElementById('content' + number).classList.add('active');
}

const button = document.getElementById('button1');

    button.addEventListener('click', () => {
        button.style.backgroundColor = '#000000'; // Warna putih jadi hitam saat di klik
    });