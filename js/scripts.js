// Ana JavaScript Dosyası

// AOS Animasyonları Başlatma
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Sayfa Yüklendiğinde Navbar Arkaplanı
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50) {
      navbar.classList.add('bg-dark', 'shadow');
    } else {
      navbar.classList.remove('bg-dark', 'shadow');
    }
  });
  
  // Form Doğrulama (Basit Bir Örnek)
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Form verilerini işleme kodları buraya gelecek
    alert('Mesajınız gönderildi!');
    form.reset();
  });
  