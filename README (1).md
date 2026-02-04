# 🎉 Parewa Coffee Website

Website coffee shop modern dan profesional dengan desain yang menarik menggunakan HTML, CSS, dan JavaScript murni.

---

## 📦 File-file yang Dibuat

```
html-version/
├── index.html      ← File HTML utama
├── styles.css      ← File CSS (styling)
├── script.js       ← File JavaScript (interaktivitas)
└── README.md       ← Panduan penggunaan
```

---

## 🚀 Cara Menggunakan Website

### **Cara 1: Buka Langsung di Browser (Paling Mudah)**

1. **Copy semua file** dari folder `html-version`:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Paste ke folder baru** di laptop Anda:
   ```
   D:\Devartha Team Project\Coffe_Shop_HTML\
   ```

3. **Buka file `index.html`** dengan cara:
   - Klik kanan pada `index.html`
   - Pilih **Open with** → **Google Chrome** (atau browser lain)

4. **Selesai!** Website sudah bisa dilihat! 🎉

---

### **Cara 2: Buka di VS Code**

1. Buka **VS Code**
2. Klik **File** → **Open Folder**
3. Pilih folder yang berisi file-file tadi
4. Install ekstensi **Live Server** di VS Code:
   - Klik icon Extensions di sidebar kiri
   - Cari "Live Server"
   - Install ekstensi dari Ritwick Dey
5. Klik kanan pada `index.html` → **Open with Live Server**
6. Website akan terbuka otomatis di browser!

---

## 📋 Cara Edit Website

### **Mengubah Nama Cafe**

**File:** `index.html`

Cari teks "Parewa Coffee" dan ganti sesuai keinginan:

```html
<!-- Di header -->
<h1>Parewa Coffee</h1>  <!-- Ganti nama di sini -->

<!-- Di hero section -->
<h1>Parewa Coffee</h1>  <!-- Ganti nama di sini -->
```

---

### **Mengubah Menu**

**File:** `script.js`

Cari bagian `menuData` dan edit sesuai keinginan:

```javascript
const menuData = {
    coffee: [
        { name: 'Cappuccino', price: 'Rp 35.000', description: 'Espresso dengan susu steamed dan foam yang creamy', popular: true },
        { name: 'Latte Art', price: 'Rp 38.000', description: 'Latte dengan seni latte yang menawan', popular: true },
        // Tambah menu baru di sini
    ],
    noncoffee: [
        // Menu non-coffee
    ],
    snacks: [
        // Menu snacks
    ]
};
```

**Contoh menambah menu baru:**

```javascript
{ 
    name: 'Kopi Susu Gula Aren', 
    price: 'Rp 32.000', 
    description: 'Kopi susu creamy dengan gula aren otentik', 
    popular: true 
},
```

---

### **Mengubah Warna Tema**

**File:** `styles.css`

Cari bagian `:root` di paling atas:

```css
:root {
    --primary-color: #d97706;      /* Warna utama (amber) */
    --primary-hover: #b45309;       /* Warna saat hover */
    --primary-light: #fbbf24;       /* Warna terang */
    
    /* Ganti dengan warna lain:
       Merah: #dc2626
       Hijau: #16a34a
       Biru: #2563eb
       Ungu: #9333ea
       Pink: #ec4899
    */
}
```

---

### **Mengubah Link WhatsApp**

**File:** `index.html` dan `script.js`

Cari link WhatsApp dan ganti nomornya:

```html
<!-- Di HTML -->
<a href="https://wa.me/6281234567890" target="_blank">
```

```javascript
// Di JavaScript (untuk pesanan)
href="https://wa.me/6281234567890?text=Halo, saya mau pesan ${encodeURIComponent(item.name)}"
```

**Format:**
- `628` = Kode negara (62) + nomor awal (8)
- Contoh: `6281234567890` untuk `0812-3456-7890`

---

### **Mengubah Link Instagram & TikTok**

**File:** `index.html`

Cari link social media:

```html
<!-- Instagram -->
<a href="https://instagram.com/parewacoffee" target="_blank">

<!-- TikTok -->
<a href="https://tiktok.com/@parewacoffee" target="_blank">
```

Ganti dengan link asli:
- Instagram: `https://instagram.com/NAMA_ANDA`
- TikTok: `https://tiktok.com/@NAMA_ANDA`

---

### **Mengubah Background Slideshow**

**File:** `script.js`

Cari bagian `heroBackgrounds`:

```javascript
const heroBackgrounds = [
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    'linear-gradient(135deg, #2d1b1b 0%, #3d2914 50%, #5c3d2e 100%)',
    'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #4a4a4a 100%)',
    'linear-gradient(135deg, #1e3a2f 0%, #2d5a47 50%, #3d7a5e 100%)',
    'linear-gradient(135deg, #2b1d1d 0%, #4a3228 50%, #6b4423 100%)'
];
```

**Bisa diganti dengan URL gambar:**

```javascript
const heroBackgrounds = [
    'url("https://example.com/image1.jpg")',
    'url("https://example.com/image2.jpg")',
    'url("https://example.com/image3.jpg")',
    'url("https://example.com/image4.jpg")',
    'url("https://example.com/image5.jpg")'
];
```

Lalu tambahkan CSS di `styles.css`:

```css
.hero-slide {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

---

### **Mengubah Galeri Foto**

**File:** `index.html`

Cari bagian `gallery-grid` dan ganti URL gambar:

```html
<div class="gallery-item" onclick="openGalleryImage(0)">
    <img src="URL_GAMBAR_1" alt="Gallery 1">
</div>
```

**Update juga di `script.js`:**

```javascript
const galleryImages = [
    'URL_GAMBAR_1',
    'URL_GAMBAR_2',
    'URL_GAMBAR_3',
    'URL_GAMBAR_4',
    'URL_GAMBAR_5',
    'URL_GAMBAR_6'
];
```

---

### **Mengubah Informasi Kontak**

**File:** `index.html`

Cari bagian contact section:

```html
<!-- Lokasi -->
<p>Jl. Contoh No. 123, Kota Indonesia</p>

<!-- Jam Operasional -->
<p>Senin - Minggu: 08:00 - 22:00 WIB</p>

<!-- Telepon -->
<p>+62 812 3456 7890</p>
```

---

## 🎨 Fitur-fitur Website

### ✅ Sudah Termasuk:

1. **Header Fixed**
   - Logo cafe
   - Navigasi menu
   - Tombol WhatsApp

2. **Hero Section**
   - Background slideshow 5 gambar/gradien
   - Ganti setiap 3 detik
   - Animasi smooth

3. **About Section**
   - Profil cafe
   - 4 fitur utama dengan animasi

4. **Menu Section**
   - 3 kategori: Coffee, Non-Coffee, Snacks
   - Card dengan animasi hover
   - Badge "Popular"
   - Tombol pesan langsung ke WhatsApp

5. **Gallery Section**
   - Grid 6 gambar
   - Hover effect
   - Modal popup untuk zoom

6. **Contact Section**
   - Info lokasi, jam, telepon
   - Link Instagram, TikTok, WhatsApp
   - Promo diskon

7. **Footer**
   - Navigasi
   - Social media links
   - Copyright

---

## 📱 Responsive Design

Website ini **responsive** dan sudah dioptimalkan untuk:
- ✅ Desktop (large screens)
- ✅ Tablet (medium screens)
- ✅ Mobile (small screens)

---

## 🎯 Animasi yang Tersedia

1. **Hero Slideshow** - Background ganti setiap 3 detik
2. **Menu Cards** - Hover effect (scale + shadow)
3. **Gallery** - Zoom effect on hover
4. **Scroll Animations** - Fade in saat scroll
5. **Header** - Background blur on scroll
6. **Buttons** - Hover effect

---

## 🌐 Deploy ke Internet (Gratis)

Jika ingin onlinekan website:

### **Option 1: Netlify (Paling Mudah)**

1. Buka [netlify.com](https://netlify.com)
2. Sign up / login
3. Drag & drop folder website ke Netlify dashboard
4. Selesai! Website akan online dalam hitungan detik

### **Option 2: GitHub Pages**

1. Upload file-file ke GitHub repository
2. Buka Settings → Pages
3. Pilih branch `main`
4. Selesai!

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Structure
- **CSS3** - Styling (modern CSS dengan variables)
- **Vanilla JavaScript** - Interaktivitas (tanpa framework)
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

---

## ❓ Pertanyaan yang Sering Diajukan

### **Q: Apakah butuh server?**
A: Tidak! Cukup buka file `index.html` di browser.

### **Q: Bisa di-hosting di mana saja?**
A: Ya! Bisa di Netlify, Vercel, GitHub Pages, atau hosting manapun.

### **Q: Bisa mengubah warna tema?**
A: Bisa! Edit di file `styles.css` bagian `:root`.

### **Q: Bisa menambah menu baru?**
A: Bisa! Edit di file `script.js` bagian `menuData`.

### **Q: Bisa mengganti gambar?**
A: Bisa! Ganti URL gambar di file `index.html` dan `script.js`.

---

## 💡 Tips Tambahan

### **Optimasi Gambar**
- Gunakan format WebP untuk lebih ringan
- Compress gambar sebelum upload
- Ukuran optimal: 800-1200px width

### **SEO Basic**
- Edit `<title>` di HTML
- Edit `<meta name="description">`
- Tambahkan alt text pada gambar

### **Performance**
- Website ini sudah ringan dan cepat
- Tanpa framework berat
- Load instan

---

## 📞 Dukungan

Jika ada pertanyaan atau kesulitan:

1. Cek panduan ini dulu
2. Pastikan semua file (index.html, styles.css, script.js) ada di folder yang sama
3. Buka file `index.html` langsung di browser

---

## 🎉 Selamat Menggunakan!

Website **Parewa Coffee** siap digunakan! Semua fitur sudah berjalan dan tinggal custom sesuai kebutuhan.

**Yang perlu dilakukan:**
1. ✅ Edit nama cafe
2. ✅ Edit menu sesuai produk Anda
3. ✅ Ganti nomor WhatsApp
4. ✅ Ganti link Instagram & TikTok
5. ✅ Ganti gambar galeri
6. ✅ Edit info lokasi dan kontak
7. ✅ Onlinekan website (Netlify/GitHub Pages)

Selamat! 🚀☕
