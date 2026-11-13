# Rancangan Data

### 1. Keputusan MVP
MVP tidak membutuhkan database server. Materi dan soal dapat disimpan sebagai data statis di dalam proyek. Progres sederhana dapat disimpan pada `localStorage`.

### 2. Entitas konten
#### Lesson
| Field | Tipe | Keterangan |
|---|---|---|
| id | string | ID unik materi |
| title | string | Judul |
| summary | string | Ringkasan |
| order | number | Urutan |
| sections | array | Bagian materi |

#### Question
| Field | Tipe | Keterangan |
|---|---|---|
| id | string | ID soal |
| topicId | string | Topik terkait |
| difficulty | enum | basic/intermediate/challenge |
| type | enum | multiple-choice/numeric |
| prompt | string | Pertanyaan |
| options | array | Pilihan, jika pilihan ganda |
| answer | string/number | Kunci jawaban |
| explanation | string | Pembahasan |
| hint | string | Petunjuk opsional |

### 3. Progres lokal
Contoh bentuk data konseptual:
```json
{
  "completedLessons": ["unsur-limas", "dua-jenis-tinggi"],
  "quizAttempts": [
    {
      "quizId": "latihan-tinggi-01",
      "score": 80,
      "completedAt": "2026-11-13T10:00:00.000Z"
    }
  ]
}
```

### 4. Privasi
- Hindari meminta nama lengkap, alamat, nomor telepon, atau identitas sekolah pada MVP.
- Jika aplikasi digunakan dalam penelitian, jelaskan tujuan pengumpulan data dan minta persetujuan sesuai arahan kampus/sekolah.
- Jika kelak ada akun, tetapkan kebijakan akses, retensi, dan penghapusan data sebelum implementasi.
