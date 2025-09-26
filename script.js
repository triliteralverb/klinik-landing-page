// Ambil Element DOM
const dots = document.querySelectorAll('.dot');  // Semua dot carousel
const carousel = document.querySelector('.hero-carousel');  // Container carousel

// Carousel Data
const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',  // Slide 1
    'linear-gradient(135deg, #ff6b9d 0%, #4ecdc4 100%)',  // Slide 2  
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'   // Slide 3
];

const titles = [
    'Perawatan Terbaik untuk Si Kecil',      // Title slide 1
    'Layanan Profesional & Terpercaya',      // Title slide 2
    'Kesehatan Bayi adalah Prioritas Kami'   // Title slide 3
];

// Event Listener untuk Dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Remove active dari semua dots
        dots.forEach(d => d.classList.remove('active'));
        
        // Add active ke dot yang diklik
        dot.classList.add('active');
        
        // Ganti background carousel
        carousel.style.background = backgrounds[index];
        
        // Ganti title text
        document.querySelector('.carousel-content h1').textContent = titles[index];
    });
});

// Auto-Rotate Carousel
let currentSlide = 0;
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;  // Loop 0,1,2,0,1,2...
    dots[currentSlide].click();             // Simulate click dot
}, 5000);  // Ganti slide setiap 5 detik