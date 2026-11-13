# Product Requirements Document (PRD)
## Aplikasi Pembelajaran Interaktif Bangun Ruang Limas

### 1. Ringkasan produk
Aplikasi web pembelajaran matematika untuk membantu siswa SMP kelas IX mempelajari bangun ruang limas. Aplikasi dioptimalkan untuk smartphone Android, dengan materi ringkas, visualisasi, contoh penyelesaian, latihan bertahap, tantangan, dan umpan balik.

### 2. Latar belakang dan masalah pengguna
Dokumen wawancara menunjukkan beberapa kebutuhan belajar:
- S01 kadang kesulitan membedakan tinggi limas dengan tinggi sisi tegak, terutama saat keduanya muncul pada gambar yang sama.
- S02 memahami bahwa kedua ukuran berbeda, tetapi kadang bingung menentukan ukuran yang digunakan dalam soal.
- S02 menyebut perhitungan luas permukaan sebagai bagian yang sulit karena harus menghitung luas alas dan sisi-sisi tegak.
- Kedua informan membutuhkan contoh penyelesaian, latihan mandiri, serta penjelasan yang dapat dipelajari kembali.
- Siswa mengharapkan gambar yang jelas; S02 juga mengusulkan permainan atau tantangan.

**Masalah inti produk:** siswa membutuhkan bantuan visual dan langkah belajar yang terstruktur untuk mengenali unsur limas, memilih ukuran yang tepat, serta menerapkan rumus volume dan luas permukaan.

### 3. Tujuan produk
1. Membantu siswa mengenali bentuk dan unsur-unsur limas.
2. Membantu siswa membedakan tinggi limas dan tinggi sisi tegak.
3. Membantu siswa memilih rumus dan ukuran yang tepat.
4. Membimbing siswa menghitung volume dan luas permukaan secara bertahap.
5. Memberi kesempatan latihan mandiri dengan umpan balik yang menjelaskan alasan jawaban.

### 4. Pengguna sasaran
- Pengguna utama: siswa SMP kelas IX.
- Pengguna pendukung: guru atau mahasiswa/pengembang yang menyiapkan materi.
- Perangkat utama: smartphone Android melalui browser modern.
- Bahasa antarmuka: Bahasa Indonesia.

### 5. Kebutuhan pengguna
Sebagai siswa, saya ingin:
- melihat bentuk limas dan bagian-bagiannya dengan jelas agar dapat mengenali unsur-unsurnya;
- melihat tinggi limas dan tinggi sisi tegak dengan penanda visual yang berbeda agar tidak tertukar;
- mempelajari rumus dengan keterangan simbol agar tahu ukuran yang harus digunakan;
- mengikuti contoh soal langkah demi langkah agar memahami prosesnya;
- mengerjakan latihan dari mudah ke lebih menantang;
- memperoleh informasi benar/salah beserta pembahasan;
- mengulang materi kapan saja melalui ponsel.

### 6. Ruang lingkup fitur

#### P0 — wajib untuk versi pertama (MVP)
1. **Beranda**
   - Judul dan pengantar singkat.
   - Tombol mulai belajar.
   - Navigasi ke materi, latihan, dan progres sederhana.

2. **Materi dasar**
   - Pengertian dan pengenalan bentuk limas.
   - Jenis limas berdasarkan bentuk alas.
   - Unsur: alas, sisi tegak, rusuk, titik sudut, tinggi limas, dan tinggi sisi tegak.
   - Ilustrasi berlabel.

3. **Fokus: dua jenis tinggi**
   - Diagram dengan warna/garis berbeda untuk tinggi limas dan tinggi sisi tegak.
   - Penjelasan posisi, arah pengukuran, dan penggunaan masing-masing.
   - Pertanyaan cek pemahaman singkat.

4. **Rumus**
   - Volume: V = 1/3 × luas alas × tinggi limas.
   - Luas permukaan: luas alas + jumlah luas seluruh sisi tegak.
   - Keterangan simbol dan pengingat ukuran mana yang dipakai.
   - Catatan bahwa rumus luas sisi tegak bergantung pada bentuk alas dan informasi soal.

5. **Contoh soal**
   - Informasi diketahui dan ditanyakan.
   - Pemilihan rumus.
   - Substitusi angka.
   - Perhitungan dan satuan.
   - Kesimpulan jawaban.

6. **Latihan interaktif**
   - Soal pilihan ganda dan/atau jawaban numerik sederhana.
   - Tingkat dasar, menengah, dan tantangan.
   - Umpan balik setelah menjawab.
   - Pembahasan singkat.

7. **Tantangan/game ringan**
   - Aktivitas mencocokkan nama unsur dengan bagian gambar atau memilih tinggi yang tepat.
   - Skor/hasil sederhana; tidak perlu akun pada MVP.

#### P1 — setelah MVP diuji
- Visualisasi 3D yang dapat diputar.
- Penyimpanan progres lintas perangkat.
- Panel guru untuk menambah soal atau melihat hasil.
- Audio narasi atau petunjuk.
- PWA dan opsi pemasangan ke layar utama jika layak.

### 7. Di luar ruang lingkup MVP
- Aplikasi Android native terpisah.
- Login, kelas virtual, forum, dan chat.
- Leaderboard publik.
- Analitik siswa yang kompleks.
- AI tutor atau pembuat soal otomatis.
- Backend kompleks jika konten statis dan progres lokal sudah mencukupi.

### 8. Alur utama pengguna
1. Siswa membuka tautan aplikasi melalui browser Android.
2. Siswa masuk ke beranda dan memilih **Mulai Belajar**.
3. Siswa mempelajari bentuk dan unsur limas.
4. Siswa membuka materi khusus perbedaan tinggi limas dan tinggi sisi tegak.
5. Siswa mempelajari rumus dan contoh soal.
6. Siswa mengerjakan latihan atau tantangan.
7. Aplikasi menampilkan skor dan pembahasan.
8. Siswa dapat mengulang materi atau mencoba tingkat berikutnya.

### 9. Kriteria keberhasilan awal
- Semua halaman utama dapat digunakan pada lebar layar ponsel sekitar 360 px tanpa scroll horizontal.
- Teks, tombol, dan ilustrasi terbaca pada smartphone.
- Siswa dapat menemukan penjelasan tinggi limas dan tinggi sisi tegak dengan maksimal dua tindakan dari beranda.
- Setiap jawaban latihan memiliki umpan balik yang relevan.
- Materi dan perhitungan telah diperiksa ketepatan matematisnya oleh pengembang/dosen/guru.
- Uji coba awal dengan siswa dapat mengidentifikasi apakah visualisasi dan langkah soal membantu mengurangi kebingungan.

### 10. Asumsi dan hal yang perlu divalidasi
- Wawancara baru melibatkan dua siswa; kebutuhan ini belum mewakili seluruh siswa kelas IX.
- Belum ditetapkan apakah sekolah mengharuskan kurikulum atau buku tertentu.
- Belum ditetapkan apakah aplikasi harus menyimpan progres setelah browser ditutup.
- Ketersediaan internet siswa belum diketahui; karena itu halaman sebaiknya ringan dan PWA/offline dapat dipertimbangkan kemudian.
- Kebutuhan visualisasi 3D perlu diuji; ilustrasi 2D interaktif dapat menjadi solusi awal yang lebih ringan.

### 11. Dasar sumber
Disusun dari bagian D (hasil wawancara), E (temuan penting), F (analisis CLT), G (implikasi terhadap aplikasi), dan H (kesimpulan) pada dokumen wawancara. Rekomendasi fitur di atas merupakan terjemahan kebutuhan wawancara menjadi ruang lingkup produk.
