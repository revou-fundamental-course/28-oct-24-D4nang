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
        let suggest;

        if (bmi < 18.5) {
            category = 'Kekurangan Berat Badan';
            suggest = 'Fokus pada makanan bergizi padat kalori seperti nasi, roti gandum, daging, ikan, dan kacang-kacangan. Jangan lewatkan camilan sehat seperti buah kering dan yogurt. Selain itu, rutinlah berolahraga angkat beban untuk membangun otot. Istirahat yang cukup sangat penting untuk proses pemulihan tubuh. Jangan lupa konsultasi dengan dokter atau ahli gizi untuk mendapatkan program yang paling sesuai dengan kondisi Anda. Dengan konsisten menerapkan tips ini, Anda bisa mencapai berat badan ideal secara sehat.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Berat Badan Ideal';
            suggest = 'Pertahankan dengan pola makan sehat dan seimbang, serta olahraga rutin. Prioritaskan makanan kaya serat, protein, dan vitamin. Jangan lupa istirahat cukup dan kelola stres dengan baik. Dengan menjaga gaya hidup aktif dan sehat, Anda bisa mempertahankan berat badan ideal dan meningkatkan kualitas hidup. Ingat, konsultasikan dengan dokter jika Anda ragu atau memiliki kondisi kesehatan tertentu.';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Kelebihan Berat Badan';
            suggest = 'Jangan khawatir, Anda bisa menurunkan berat badan dengan cara sehat. Kunjungi dokter untuk saran yang tepat. Atur pola makan dengan mengurangi makanan tinggi kalori dan perbanyak serat serta protein. Rajin olahraga, baik kardio maupun kekuatan. Istirahat yang cukup dan kelola stres dengan baik juga penting. Ingat, penurunan berat badan butuh proses. Jadi, konsisten dan jangan menyerah!';
        } else {
            category = 'Obesitas';
            suggest = 'Jangan khawatir, Anda bisa mengatasinya! Konsultasi dengan dokter untuk mendapatkan program penurunan berat badan yang tepat. Atur pola makan dengan mengurangi porsi dan memilih makanan sehat seperti buah, sayur, dan protein. Rajin olahraga, baik kardio maupun kekuatan. Istirahat yang cukup dan kelola stres dengan baik juga penting. Ingat, penurunan berat badan butuh proses. Jangan menyerah dan jangan ragu untuk meminta bantuan profesional jika diperlukan. Dengan konsisten menerapkan gaya hidup sehat, Anda pasti bisa mencapai berat badan ideal.';
        }
// 3. Validasi dan Kalkulasi Hasil
        resultBox.innerText = `${bmi} 
        
        (${category})`;
        document.getElementById('result').innerHTML = `${suggest}`;
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