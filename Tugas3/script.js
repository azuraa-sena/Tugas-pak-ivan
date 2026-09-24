function hitung(operator) {
    let bil1 = parseFloat(document.formhitung.bil1.value);
    let bil2 = parseFloat(document.formhitung.bil2.value);
    let hasil = 0;

    if (isNaN(bil1) || isNaN(bil2)) {
        alert("Harap masukkan angka yang valid!");
        return;
    }

    if (operator === '+') {
        hasil = bil1 + bil2;
    } else if (operator === '-') {
        hasil = bil1 - bil2;
    } else if (operator === '*') {
        hasil = bil1 * bil2;
    } else if (operator === '/') {
        if (bil2 === 0) {
            alert("Tidak dapat membagi dengan angka nol!");
            return;
        }
        hasil = bil1 / bil2;
    }

    document.formhitung.hasil.value = hasil;
}