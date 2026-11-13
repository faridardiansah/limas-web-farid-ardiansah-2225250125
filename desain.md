# Dokumen Desain (UX/UI)
## Aplikasi Pembelajaran Bangun Ruang Limas

### 1. Arah desain
Desain menggunakan pendekatan **mobile-first**. Prioritasnya adalah keterbacaan, navigasi sederhana, ilustrasi yang membantu konsep, serta langkah belajar yang tidak membebani siswa dengan terlalu banyak informasi sekaligus.

### 2. Prinsip UX
- Satu tujuan utama per layar.
- Materi dipecah menjadi bagian pendek.
- Istilah matematika diberi definisi langsung.
- Ilustrasi ditempatkan dekat dengan penjelasan yang dirujuk.
- Tinggi limas dan tinggi sisi tegak selalu menggunakan warna/jenis garis yang konsisten, disertai label agar tidak bergantung pada warna saja.
- Umpan balik menjelaskan mengapa jawaban benar atau keliru.
- Tombol utama cukup besar dan mudah disentuh.

### 3. Peta halaman
| Halaman | Isi utama | Aksi pengguna |
|---|---|---|
| Beranda | Pengantar, tombol mulai, menu | Mulai belajar |
| Peta belajar | Urutan topik | Pilih topik |
| Mengenal limas | Bentuk, jenis, unsur | Lanjut |
| Dua jenis tinggi | Diagram perbandingan dan penjelasan | Cek pemahaman |
| Rumus | Volume dan luas permukaan | Lihat contoh |
| Contoh soal | Langkah penyelesaian | Coba soal serupa |
| Latihan | Pertanyaan, pilihan/jawaban | Periksa jawaban |
| Tantangan | Permainan mencocokkan/kuis cepat | Mulai tantangan |
| Hasil | Skor, topik yang perlu diulang | Ulangi atau kembali |

### 4. Rancangan layar utama

#### A. Beranda
- Header: nama aplikasi, misalnya **LimasKu** (nama sementara).
- Hero: “Kenali limas, pahami ukurannya, kuasai rumusnya.”
- Tombol utama: **Mulai Belajar**.
- Kartu menu: Materi, Contoh Soal, Latihan, Tantangan.
- Tampilkan estimasi durasi hanya jika sudah ditentukan berdasarkan konten nyata.

#### B. Halaman unsur limas
- Ilustrasi limas dengan label yang tidak saling bertumpuk.
- Daftar unsur dalam kartu atau accordion.
- Setiap unsur dapat dipilih untuk menyorot bagian terkait pada ilustrasi.
- Sertakan teks alternatif/deskripsi untuk aksesibilitas.

#### C. Halaman perbedaan tinggi
- Tampilkan satu diagram limas yang sama.
- Tandai tinggi limas sebagai garis dari puncak tegak lurus ke bidang alas.
- Tandai tinggi sisi tegak pada bidang sisi tegak, sesuai geometri limas yang ditampilkan.
- Beri label teks eksplisit: “tinggi limas” dan “tinggi sisi tegak”.
- Sertakan kalimat pembeda: tinggi limas digunakan dalam rumus volume; tinggi sisi tegak dapat diperlukan untuk menghitung luas sisi tegak.
- Interaksi: tombol “Tampilkan tinggi limas” dan “Tampilkan tinggi sisi tegak”, atau pilihan tab. Jangan hanya mengandalkan animasi.

#### D. Halaman rumus dan contoh
- Pisahkan kartu Volume dan Luas Permukaan.
- Keterangan setiap simbol tepat di bawah rumus.
- Contoh soal ditampilkan satu langkah per bagian: diketahui → ditanyakan → rumus → substitusi → hitung → jawaban.
- Sediakan tombol “Langkah berikutnya” dan “Lihat semua langkah”.

#### E. Halaman latihan
- Satu soal per layar pada ponsel.
- Indikator nomor soal dan tingkat kesulitan.
- Tombol periksa jawaban.
- Setelah menjawab, tampilkan status dan pembahasan, bukan hanya skor.
- Berikan opsi mencoba lagi.

### 5. Komponen UI
- `AppHeader`
- `BottomNavigation` atau navigasi sederhana
- `LearningCard`
- `ProgressIndicator`
- `PyramidDiagram`
- `ConceptLabel`
- `FormulaCard`
- `WorkedExampleSteps`
- `QuestionCard`
- `AnswerFeedback`
- `ScoreSummary`

### 6. Panduan visual awal
- Gunakan latar bersih dan kontras teks yang baik.
- Pilih satu warna utama dan satu warna aksen.
- Gunakan warna khusus yang konsisten untuk dua jenis tinggi, tetapi tambahkan label/pola garis.
- Hindari dekorasi berlebihan, latar ramai, dan animasi yang tidak membantu pembelajaran.
- Ukuran teks isi disarankan sekitar 16 px atau lebih pada ponsel.
- Target area sentuh tombol sekitar 44 × 44 px atau lebih.
- Jaga jarak antar elemen agar mudah disentuh.

### 7. Responsif dan Android
- Mulai dari lebar 360 px.
- Layout satu kolom pada ponsel.
- Diagram dapat diperbesar atau ditampilkan dalam area yang bisa digeser jika diperlukan.
- Jangan memakai hover sebagai satu-satunya cara membuka informasi.
- Uji pada Chrome Android dan browser Android lain jika tersedia.
- Pastikan keyboard tidak menutupi kolom jawaban.

### 8. Aksesibilitas
- Kontras warna memadai.
- Semua diagram penting memiliki keterangan tekstual.
- Informasi tidak dibedakan berdasarkan warna saja.
- Tombol memiliki label yang jelas.
- Ukuran teks dapat dibaca tanpa zoom.
- Hindari batas waktu ketat pada latihan.

### 9. Catatan validasi desain
Sebelum implementasi penuh, buat wireframe beranda, halaman dua jenis tinggi, halaman rumus, dan halaman latihan. Minta minimal beberapa siswa sasaran mencoba prototipe dan amati apakah mereka dapat menjelaskan perbedaan kedua tinggi serta memilih ukuran yang tepat pada soal.
