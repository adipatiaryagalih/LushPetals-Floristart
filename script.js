const form = document.getElementById('contactForm');
const hasil = document.getElementById('hasil');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;

    hasil.innerHTML = `
        <h3>Data Berhasil Dikirim ✨</h3>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Email:</b> ${email}</p>
    `;

    form.reset();
});
