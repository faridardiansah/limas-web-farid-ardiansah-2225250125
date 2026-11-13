# Rancangan Arsitektur Teknis

### 1. Pendekatan awal
Untuk versi pertama, gunakan aplikasi web responsif dengan arsitektur sederhana. Karena belum ada kebutuhan akun, sinkronisasi, atau panel guru yang terkonfirmasi, backend belum wajib untuk MVP.

### 2. Stack yang disarankan
Pilihan awal (dapat diubah):
- **Frontend:** React + TypeScript.
- **Build tool:** Vite.
- **Styling:** CSS responsif atau Tailwind CSS.
- **Visualisasi:** SVG untuk diagram limas interaktif; pertimbangkan library 3D hanya setelah kebutuhan diuji.
- **Penyimpanan progres:** localStorage pada MVP.
- **Hosting:** layanan static hosting seperti Cloudflare Pages, Vercel, atau Netlify.

Alasan: stack ini mendukung web responsif, ringan, dan mudah dipublikasikan tanpa mengelola server sendiri.

### 3. Gambaran komponen
```text
Browser Android / Desktop
        |
        v
React UI
  |-- Halaman materi
  |-- Diagram SVG interaktif
  |-- Contoh soal
  |-- Latihan dan feedback
  |-- Ringkasan hasil
        |
        v
Content data (JSON/TypeScript)
        |
        v
localStorage (progres lokal, opsional)
```

### 4. Struktur folder yang disarankan
```text
limasku/
├── public/
│   ├── icons/
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── learning/
│   │   ├── diagram/
│   │   └── quiz/
│   ├── pages/
│   ├── data/
│   │   ├── lessons.ts
│   │   └── questions.ts
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── docs/
├── index.html
├── package.json
└── README.md
```

### 5. Aturan implementasi
- Pisahkan konten pelajaran dari komponen tampilan.
- Simpan soal dalam struktur data agar mudah ditambah.
- Validasi input numerik dan toleransi pembulatan bila soal numerik digunakan.
- Hitung skor di sisi klien untuk MVP.
- Jangan menyimpan nama lengkap atau data pribadi siswa jika tidak dibutuhkan.
- Jangan menaruh kunci rahasia/API key di kode frontend.
- Pastikan semua fungsi utama dapat digunakan dengan sentuhan.

### 6. Kapan backend diperlukan?
Tambahkan backend hanya jika ada kebutuhan nyata seperti akun siswa, sinkronisasi progres lintas perangkat, panel guru, atau laporan kelas. Jika dibutuhkan, pertimbangkan Supabase atau Firebase setelah kebutuhan data dan privasi ditetapkan.

### 7. Risiko teknis
- Diagram 3D dapat memperberat halaman dan kurang nyaman di ponsel kelas bawah.
- localStorage hanya tersimpan di browser/perangkat yang sama dan dapat terhapus.
- Rumus luas permukaan harus disesuaikan dengan bentuk alas serta informasi geometri pada soal.
- Perlu pengujian tampilan pada ukuran layar dan browser yang berbeda.
