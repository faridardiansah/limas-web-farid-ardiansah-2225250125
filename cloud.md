# Rencana Cloud dan Deployment

### 1. Kebutuhan hosting
Aplikasi MVP berupa frontend statis, sehingga dapat di-deploy ke static hosting/CDN. Pengguna mengakses URL melalui browser Android tanpa menginstal aplikasi native.

### 2. Opsi layanan
| Layanan | Kegunaan | Catatan |
|---|---|---|
| Cloudflare Pages | Hosting frontend statis dan CDN | Cocok untuk proyek Vite |
| Vercel | Hosting frontend dan preview deployment | Alur Git mudah |
| Netlify | Hosting frontend dan preview deployment | Alternatif static hosting |

Pilih satu layanan setelah repositori dan akun pengembang siap. Tidak perlu menggunakan ketiganya sekaligus.

### 3. Alur deployment
1. Simpan source code di GitHub.
2. Hubungkan repository ke layanan hosting pilihan.
3. Atur build command sesuai proyek (misalnya `npm run build`).
4. Atur output directory (umumnya `dist` untuk Vite).
5. Deploy ke URL publik.
6. Uji URL pada smartphone Android.
7. Setiap perubahan yang masuk ke branch utama dapat memicu deployment otomatis.

### 4. Environment dan keamanan
- MVP statis tidak memerlukan secret key.
- Jika layanan backend ditambahkan, simpan kredensial rahasia pada environment variables server/hosting, bukan pada source code publik.
- Gunakan HTTPS.
- Jangan mengumpulkan data pribadi siswa tanpa kebutuhan dan persetujuan yang sesuai.

### 5. Performa
- Kompres gambar dan gunakan SVG untuk diagram.
- Hindari library 3D besar pada pemuatan awal.
- Muat bagian materi sesuai kebutuhan jika ukuran aplikasi bertambah.
- Uji waktu muat melalui jaringan seluler.
- Pastikan aplikasi tetap dapat digunakan pada koneksi yang tidak stabil; pertimbangkan PWA/offline caching pada iterasi berikutnya.

### 6. Domain
Mulai dengan subdomain gratis dari layanan hosting. Domain khusus bersifat opsional dan bukan syarat MVP.

### 7. Belum diputuskan
Penyedia cloud final, domain, kebutuhan backend, analitik, dan target jumlah pengguna belum ditetapkan. Keputusan tersebut dibuat setelah prototipe dan kebutuhan penggunaan disepakati.
