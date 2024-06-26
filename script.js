$(document).ready(function() {
    // Untuk menangani smooth scrolling
    $("a").on('click', function(event) {
        // Pastikan link mempunyai hash (#) untuk memastikan itu adalah link ke bagian halaman yang sama
        if (this.hash !== "") {
            // Mencegah default click behavior
            event.preventDefault();

            // Menyimpan hash
            var hash = this.hash;

            // Menggunakan metode animate() untuk menambahkan efek smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Menambahkan hash ke URL ketika scroll selesai (opsional)
                window.location.hash = hash;
            });
        } // Akhir if
    });
});
