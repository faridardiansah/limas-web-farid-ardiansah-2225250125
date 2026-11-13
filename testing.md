# Rencana Pengujian

### 1. Pengujian fungsional
| ID | Skenario | Hasil yang diharapkan |
|---|---|---|
| T01 | Membuka beranda | Beranda tampil tanpa error |
| T02 | Membuka setiap materi | Konten dan ilustrasi tampil benar |
| T03 | Memilih label unsur pada diagram | Bagian yang dimaksud tersorot/terjelaskan |
| T04 | Membuka penjelasan dua jenis tinggi | Perbedaan kedua tinggi terlihat dan terbaca |
| T05 | Menjawab latihan benar | Status benar dan pembahasan tampil |
| T06 | Menjawab latihan keliru | Status dan petunjuk perbaikan tampil |
| T07 | Menyelesaikan kuis | Skor/hasil ditampilkan dengan benar |
| T08 | Memuat ulang halaman | Aplikasi tetap dapat dibuka; progres lokal mengikuti keputusan desain |

### 2. Pengujian responsif
Uji sekurangnya pada lebar viewport:
- 360 px
- 375 px
- 390 px
- 412 px
- tablet dan desktop sebagai tambahan

Pastikan tidak ada scroll horizontal, tombol mudah disentuh, teks tidak terpotong, diagram tetap terbaca, dan keyboard tidak menutupi input.

### 3. Pengujian perangkat
- Chrome pada Android.
- Browser Android lain jika tersedia.
- Desktop browser untuk pemeriksaan tambahan.

### 4. Pengujian materi
- Verifikasi semua definisi unsur limas.
- Periksa diagram dan posisi garis tinggi.
- Hitung ulang seluruh contoh soal dan kunci jawaban.
- Pastikan satuan luas dan volume benar.
- Pastikan rumus luas permukaan sesuai bentuk alas dan kondisi limas pada soal.

### 5. Uji pengguna
Minta siswa sasaran melakukan tugas:
1. Menunjukkan tinggi limas pada diagram.
2. Menunjukkan tinggi sisi tegak.
3. Menjelaskan perbedaan keduanya dengan kata-kata sendiri.
4. Memilih ukuran yang tepat untuk soal volume.
5. Mengikuti langkah menghitung luas permukaan.

Catat bagian yang membuat siswa ragu, waktu penyelesaian secara umum, dan komentar mereka. Jangan menyimpulkan efektivitas hanya dari satu atau dua pengguna; lakukan uji lebih luas bila penelitian memerlukannya.

### 6. Kriteria penerimaan awal
- Tidak ada kesalahan fungsi utama.
- Semua konten dapat dibaca pada smartphone.
- Diagram tidak menimbulkan salah tafsir.
- Pembahasan latihan sesuai dengan jawaban dan konsep matematika.
- Pengguna dapat menyelesaikan alur belajar utama tanpa bantuan pengembang.
