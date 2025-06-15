// Animasi Fade saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-fade').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'all 0.6s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 100);
    });
  
    // Efek hover tambahan untuk box (produk, galeri, form section)
    const hoverBoxes = document.querySelectorAll('.produk-card, .galery-grid img, section.content');
    hoverBoxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        box.style.transform = 'scale(1.03)';
        box.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
      });
      box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
      });
    });
  
    // Tambahkan background image di semua halaman
    document.body.style.backgroundImage = "url('assets/bg-cupcake.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  });
  
  // Kirim Form Rating / Kontak / Pemesanan
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Terima kasih! Formulir berhasil dikirim.');
      form.reset();
    });
  });
  
  const keranjang = [];
const form = document.querySelector('.form-pemesanan');
const daftarKeranjang = document.getElementById('daftar-keranjang');

document.getElementById('tambahKeranjang').addEventListener('click', () => {
  const nama = document.getElementById('nama').value;
  const produk = document.getElementById('produk').value;
  const jumlah = document.getElementById('jumlah').value;

  if (nama && produk && jumlah > 0) {
    keranjang.push({ nama, produk, jumlah });
    tampilkanKeranjang();
    form.reset();
  } else {
    alert("Lengkapi semua kolom sebelum menambahkan ke keranjang.");
  }
});

function tampilkanKeranjang() {
  daftarKeranjang.innerHTML = '';
  keranjang.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nama} - ${item.produk} (${item.jumlah})`;
    daftarKeranjang.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  alert("Terima kasih! Pesanan Anda telah dikirim.");
  keranjang.length = 0;
  tampilkanKeranjang();
});

document.getElementById('tambahKeranjang').addEventListener('click', () => {
  const produk = document.getElementById('produk').value;
  const jumlah = document.getElementById('jumlah').value;

  const daftar = document.getElementById('daftar-keranjang');
  const item = document.createElement('li');
  item.textContent = `${produk} - ${jumlah} pcs`;
  daftar.appendChild(item);
});

// Efek animasi saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-fade, .galeri-mini img, .timeline, .qr-code");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, {
    threshold: 0.1,
  });

  elements.forEach(el => observer.observe(el));
});
