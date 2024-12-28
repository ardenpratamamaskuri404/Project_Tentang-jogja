document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");

    // Menampilkan sidebar saat tombol menu diklik
    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active"); // Menambahkan kelas "active" untuk menampilkan sidebar
    });

    // Menutup sidebar saat tombol close diklik
    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active"); // Menghapus kelas "active" untuk menyembunyikan sidebar
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn'); // Tombol di dalam slide
    const slides = document.querySelectorAll('.slide-gambar');
    const navDots = document.querySelectorAll('.nav-dot');

    let currentIndex = 0;

    // Fungsi untuk menampilkan slide aktif
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            navDots[i].classList.remove('active');
        });

        slides[index].classList.add('active');
        navDots[index].classList.add('active');
    };

    // Menambahkan event listener pada tombol navigasi
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Menampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);

    // Optional: Navigasi otomatis setiap 3 detik
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    const imageItems = document.querySelectorAll('.image-item');
    const article = document.querySelector('.article');

    // Animasi gambar saat scroll
    const revealOnScroll = () => {
        imageItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Memeriksa jika gambar sudah di dalam viewport
            if (rect.top <= windowHeight - 100) {
                item.classList.add('reveal');
            } else {
                item.classList.remove('reveal');
            }
        });

        // Animasi artikel saat scroll
        const rectArticle = article.getBoundingClientRect();
        if (rectArticle.top <= windowHeight - 100) {
            article.classList.add('reveal');
        } else {
            article.classList.remove('reveal');
        }
    };

    // Menambahkan animasi reveal ke gambar yang terdeteksi dalam viewport
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Panggil sekali saat pertama kali load untuk gambar yang sudah terlihat

    // Efek hover saat gambar di-hover
    imageItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img').style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('img').style.transform = 'scale(1)';
        });
    });
});

function resetForm() {
    document.getElementById('contactForm').reset();
    alert('Kolom telah direset.');
}
