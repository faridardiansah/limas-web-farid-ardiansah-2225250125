
const examples = [
  {
    title: "Menghitung Volume Limas",
    question: "Sebuah limas memiliki luas alas 36 cm² dan tinggi limas 12 cm. Berapakah volumenya?",
    hint: "Gunakan V = ⅓ × luas alas × tinggi limas.",
    answer: 144,
    unit: "cm³",
    solution: [
      "Diketahui: luas alas = 36 cm² dan tinggi limas = 12 cm.",
      "Rumus: V = ⅓ × L alas × t.",
      "V = ⅓ × 36 × 12.",
      "V = 144 cm³."
    ]
  },
  {
    title: "Menghitung Luas Permukaan",
    question: "Limas segi empat beraturan memiliki sisi alas 6 cm dan tinggi sisi tegak 5 cm. Berapakah luas permukaannya?",
    hint: "Hitung luas persegi dan empat segitiga.",
    answer: 96,
    unit: "cm²",
    solution: [
      "Luas alas = 6 × 6 = 36 cm².",
      "Luas satu segitiga = ½ × 6 × 5 = 15 cm².",
      "Jumlah luas empat segitiga = 4 × 15 = 60 cm².",
      "Luas permukaan = 36 + 60 = 96 cm²."
    ]
  },
  {
    title: "Menentukan Tinggi Limas",
    question: "Volume limas 200 cm³ dan luas alas 50 cm². Berapakah tinggi limas?",
    hint: "Gunakan t = 3 × V ÷ luas alas.",
    answer: 12,
    unit: "cm",
    solution: [
      "Diketahui: V = 200 cm³ dan luas alas = 50 cm².",
      "Rumus: t = 3V ÷ L alas.",
      "t = (3 × 200) ÷ 50.",
      "t = 12 cm."
    ]
  },
  {
    title: "Menentukan Luas Alas",
    question: "Sebuah limas memiliki volume 160 cm³ dan tinggi 12 cm. Berapakah luas alasnya?",
    hint: "Gunakan L alas = 3 × V ÷ t.",
    answer: 40,
    unit: "cm²",
    solution: [
      "Diketahui: V = 160 cm³ dan t = 12 cm.",
      "Rumus: L alas = 3V ÷ t.",
      "L alas = (3 × 160) ÷ 12.",
      "Luas alas = 40 cm²."
    ]
  },
  {
    title: "Menghitung Tinggi Sisi Tegak",
    question: "Limas segi empat beraturan memiliki sisi alas 10 cm dan tinggi limas 12 cm. Berapakah tinggi sisi tegaknya?",
    hint: "Gunakan Pythagoras: l = √(t² + (½s)²).",
    answer: 13,
    unit: "cm",
    solution: [
      "Setengah sisi alas = 10 ÷ 2 = 5 cm.",
      "Gunakan teorema Pythagoras.",
      "l = √(12² + 5²).",
      "l = √(144 + 25) = √169.",
      "Tinggi sisi tegak = 13 cm."
    ]
  }
];

let currentExample = 0;

const exampleTitle = document.getElementById("exampleTitle");
const exampleQuestion = document.getElementById("exampleQuestion");
const exampleHint = document.getElementById("exampleHint");
const exampleNumber = document.getElementById("exampleNumber");
const exampleStatus = document.getElementById("exampleStatus");
const exampleProgress = document.getElementById("exampleProgress");
const exampleAnswer = document.getElementById("exampleAnswer");
const checkExample = document.getElementById("checkExample");
const nextExample = document.getElementById("nextExample");
const exampleFeedback = document.getElementById("exampleFeedback");
const exampleSolution = document.getElementById("exampleSolution");
const exampleContainer = document.getElementById("exampleContainer");
const exampleFinished = document.getElementById("exampleFinished");
const restartExamples = document.getElementById("restartExamples");

function showExample() {
  const item = examples[currentExample];

  exampleNumber.textContent =
    `SOAL ${String(currentExample + 1).padStart(2, "0")} / 05`;

  exampleStatus.textContent = "Belum dikerjakan";
  exampleProgress.style.width = `${currentExample / examples.length * 100}%`;

  exampleTitle.textContent = item.title;
  exampleQuestion.textContent = item.question;
  exampleHint.textContent = item.hint;

  exampleAnswer.value = "";
  exampleAnswer.disabled = false;
  checkExample.disabled = false;
  nextExample.disabled = true;

  exampleFeedback.className = "feedback hidden";
  exampleSolution.classList.add("hidden");
  exampleSolution.innerHTML = "";
}

function checkAnswer() {
  const item = examples[currentExample];
  const value = exampleAnswer.value.trim();

  if (value === "") {
    exampleFeedback.textContent = "Masukkan jawaban terlebih dahulu.";
    exampleFeedback.className = "feedback error";
    return;
  }

  const correct = Number(value) === item.answer;

  exampleStatus.textContent = correct ? "Jawaban benar" : "Sudah diperiksa";
  exampleFeedback.textContent = correct
    ? "Hebat! Jawabanmu benar. Perhatikan kembali langkah penyelesaiannya."
    : `Jawaban belum tepat. Jawaban yang benar adalah ${item.answer} ${item.unit}. Pelajari pembahasannya.`;

  exampleFeedback.className = correct
    ? "feedback success"
    : "feedback error";

  exampleSolution.classList.remove("hidden");
  exampleSolution.innerHTML = "<h3>Pembahasan Langkah demi Langkah</h3>";

  item.solution.forEach((step) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = step;
    exampleSolution.appendChild(paragraph);
  });

  exampleAnswer.disabled = true;
  checkExample.disabled = true;
  nextExample.disabled = false;
  exampleProgress.style.width =
    `${(currentExample + 1) / examples.length * 100}%`;
}

function goNextExample() {
  currentExample++;

  if (currentExample >= examples.length) {
    exampleContainer.classList.add("hidden");
    exampleFinished.classList.remove("hidden");
    return;
  }

  showExample();
}

function restartAllExamples() {
  currentExample = 0;
  exampleFinished.classList.add("hidden");
  exampleContainer.classList.remove("hidden");
  showExample();
}

checkExample.addEventListener("click", checkAnswer);
nextExample.addEventListener("click", goNextExample);
restartExamples.addEventListener("click", restartAllExamples);

showExample();

// LATIHAN AKHIR
const questions = [
  {
    question: "Apa yang dimaksud dengan tinggi limas?",
    options: [
      "Jarak tegak lurus dari puncak ke bidang alas",
      "Panjang rusuk alas",
      "Panjang rusuk tegak",
      "Tinggi salah satu sisi segitiga"
    ],
    answer: 0,
    explanation: "Tinggi limas adalah jarak tegak lurus dari titik puncak ke bidang alas."
  },
  {
    question: "Tinggi manakah yang digunakan untuk menghitung volume limas?",
    options: [
      "Tinggi sisi tegak",
      "Tinggi limas",
      "Panjang rusuk alas",
      "Panjang diagonal alas"
    ],
    answer: 1,
    explanation: "Volume menggunakan tinggi limas, bukan tinggi sisi tegak."
  },
  {
    question: "Tinggi sisi tegak digunakan untuk menghitung ...",
    options: [
      "Volume limas",
      "Luas segitiga sisi tegak",
      "Jumlah titik sudut",
      "Jumlah rusuk"
    ],
    answer: 1,
    explanation: "Tinggi sisi tegak adalah tinggi segitiga pada sisi samping limas."
  },
  {
    question: "Luas alas limas 36 cm² dan tinggi limas 12 cm. Volumenya adalah ...",
    options: ["144 cm³", "432 cm³", "48 cm³", "120 cm³"],
    answer: 0,
    explanation: "V = ⅓ × 36 × 12 = 144 cm³."
  },
  {
    question: "Limas segi empat memiliki sisi alas 6 cm dan tinggi sisi tegak 5 cm. Luas permukaannya adalah ...",
    options: ["60 cm²", "90 cm²", "96 cm²", "120 cm²"],
    answer: 2,
    explanation: "Luas alas 36 cm² dan luas empat segitiga 60 cm². Total 96 cm²."
  }
];
unlockAchievement('achievementExamples');
let currentQuestion = 0;
let score = 0;
let answered = false;
if (score >= 80) {
  unlockAchievement('achievementMaster');
}
const questionNumber = document.getElementById("questionNumber");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const feedback = document.getElementById("feedback");
const nextQuestion = document.getElementById("nextQuestion");
const quizContainer = document.getElementById("quizContainer");
const quizResult = document.getElementById("quizResult");
const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const retryQuiz = document.getElementById("retryQuiz");

function showQuestion() {
  const item = questions[currentQuestion];

  answered = false;
  questionNumber.textContent =
    `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;

  progressFill.style.width =
    `${currentQuestion / questions.length * 100}%`;

  questionText.textContent = item.question;
  answerOptions.innerHTML = "";
  feedback.className = "feedback hidden";
  nextQuestion.disabled = true;

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => selectAnswer(index));
    answerOptions.appendChild(button);
  });
}

function selectAnswer(index) {
  if (answered) return;

  answered = true;
  const item = questions[currentQuestion];
  const buttons = answerOptions.querySelectorAll(".option");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === item.answer) button.classList.add("correct");
    if (i === index && i !== item.answer) button.classList.add("wrong");
  });

  if (index === item.answer) score += 20;

  feedback.textContent =
    `${index === item.answer ? "Benar!" : "Belum tepat."} ${item.explanation}`;

  feedback.className = "feedback";
  nextQuestion.disabled = false;
}

function goNextQuestion() {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  quizResult.classList.remove("hidden");

  finalScore.textContent = `Nilai kamu: ${score} / 100`;

  resultMessage.textContent =
    score >= 80
      ? "Sangat baik! Kamu sudah memahami konsep dasar limas."
      : score >= 60
      ? "Bagus! Pelajari kembali materi yang masih belum dipahami."
      : "Tetap semangat! Baca kembali materi dan coba latihan sekali lagi.";
}

function retryQuestions() {
  currentQuestion = 0;
  score = 0;
  quizContainer.classList.remove("hidden");
  quizResult.classList.add("hidden");
  showQuestion();
}

nextQuestion.addEventListener("click", goNextQuestion);
retryQuiz.addEventListener("click", retryQuestions);

showQuestion();

// NAVIGASI AKTIF LIMASKU
const navigationLinks = document.querySelectorAll('.nav-links a');

const navigationSections = document.querySelectorAll(
  '#beranda, #materi, #contoh, #latihan, #profil'
);

function updateActiveNavigation() {
  let currentSection = '';

  navigationSections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navigationLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavigation);
window.addEventListener('load', updateActiveNavigation);

// TOMBOL KEMBALI KE ATAS
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('show', window.scrollY > 350);
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// PROGRES BELAJAR LIMASKU
(() => {
  const learningTopics = [
    'pengertian-limas',
    'unsur-limas',
    'jenis-limas',
    'perbedaan-tinggi',
    'sifat-limas',
    'rumus-limas',
    'jaring-limas',
    'penerapan-limas'
  ];

  const visitedTopics = new Set();

  const progressBar = document.getElementById('learningProgressBar');
  const progressText = document.getElementById('learningProgressText');
  const progressDetail = document.getElementById('learningProgressDetail');
  const progressMessage = document.getElementById('learningProgressMessage');

  if (!progressBar || !progressText || !progressDetail || !progressMessage) {
    return;
  }

  function updateLearningProgress() {
    const total = learningTopics.length;
    const completed = visitedTopics.size;
    const percentage = Math.round((completed / total) * 100);

    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '% selesai';
    progressDetail.textContent =
      `${completed} dari ${total} materi telah dikunjungi.`;

    if (percentage === 100) {
      progressMessage.textContent =
        'Hebat! Kamu sudah mengunjungi seluruh materi LIMASKU.';
    } else if (percentage >= 50) {
      progressMessage.textContent =
        'Bagus! Kamu sudah menyelesaikan lebih dari setengah perjalanan.';
    } else if (percentage > 0) {
      progressMessage.textContent =
        'Terus lanjutkan! Pelajari materi berikutnya.';
    } else {
      progressMessage.textContent =
        'Ayo mulai perjalanan belajarmu!';
    }
  }

  learningTopics.forEach(topicId => {
    const topic = document.getElementById(topicId);

    if (!topic) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visitedTopics.add(topicId);
          updateLearningProgress();
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.25
    });

    observer.observe(topic);
  });

  updateLearningProgress();
})();

// SISTEM PENCAPAIAN LIMASKU
function unlockAchievement(id) {
  const card = document.getElementById(id);

  if (!card) return;

  card.classList.add('unlocked');

  const status = card.querySelector('.achievement-status');

  if (status) {
    status.textContent = 'TERBUKA';
  }
}

function checkLearningAchievements() {
  const topicIds = [
    'pengertian-limas',
    'unsur-limas',
    'jenis-limas',
    'perbedaan-tinggi',
    'sifat-limas',
    'rumus-limas',
    'jaring-limas',
    'penerapan-limas'
  ];

  const allTopicsVisited = topicIds.every(id => {
    const element = document.getElementById(id);
    return element && element.dataset.visited === 'true';
  });

  if (allTopicsVisited) {
    unlockAchievement('achievementExplorer');
  }
}

// Tandai materi saat dikunjungi
topicIdsForAchievement = [
  'pengertian-limas',
  'unsur-limas',
  'jenis-limas',
  'perbedaan-tinggi',
  'sifat-limas',
  'rumus-limas',
  'jaring-limas',
  'penerapan-limas'
];

topicIdsForAchievement.forEach(id => {
  const element = document.getElementById(id);

  if (!element) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.dataset.visited = 'true';
        checkLearningAchievements();
        observer.disconnect();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(element);
});

// SERTIFIKAT PEMBELAJARAN LIMASKU
(() => {
  const nameInput = document.getElementById('certificateNameInput');
  const claimButton = document.getElementById('claimCertificate');
  const printButton = document.getElementById('printCertificate');

  const lock = document.getElementById('certificateLock');
  const status = document.getElementById('certificateStatus');
  const description = document.getElementById('certificateDescription');
  const preview = document.getElementById('certificatePreview');
  const studentName = document.getElementById('certificateStudentName');
  const studentScore = document.getElementById('certificateStudentScore');
  const note = document.getElementById('certificateNote');

  if (!nameInput || !claimButton || !printButton) return;

  let certificateUnlocked = false;
  let finalQuizScore = null;
  let allTopicsCompleted = false;

  const originalUnlock = window.unlockAchievement;

  function checkCertificateEligibility() {
    const explorer = document.getElementById('achievementExplorer');
    const master = document.getElementById('achievementMaster');

    allTopicsCompleted =
      !!explorer && explorer.classList.contains('unlocked');

    const masterUnlocked =
      !!master && master.classList.contains('unlocked');

    claimButton.disabled =
      !(allTopicsCompleted && masterUnlocked && !certificateUnlocked);

    if (allTopicsCompleted && masterUnlocked) {
      description.textContent =
        'Selamat! Kamu telah memenuhi syarat untuk membuka sertifikat.';
      note.textContent = 'Masukkan nama siswa untuk membuat sertifikat.';
    }
  }

  nameInput.addEventListener('input', () => {
    checkCertificateEligibility();
    claimButton.disabled =
      claimButton.disabled || !nameInput.value.trim();
  });

  const observer = new MutationObserver(checkCertificateEligibility);

  ['achievementExplorer', 'achievementMaster'].forEach(id => {
    const element = document.getElementById(id);
    if (element) observer.observe(element, {
      attributes: true,
      attributeFilter: ['class']
    });
  });

  claimButton.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (!name || !allTopicsCompleted) return;

    const master = document.getElementById('achievementMaster');

    if (!master || !master.classList.contains('unlocked')) {
      note.textContent = 'Selesaikan evaluasi dengan nilai minimal 80 dahulu.';
      return;
    }

    const scoreElement = document.getElementById('finalScore');
    const scoreText = scoreElement ? scoreElement.textContent : '';
    const scoreMatch = scoreText.match(/\d+/);

    if (!scoreMatch || Number(scoreMatch[0]) < 80) {
      note.textContent = 'Nilai evaluasi minimal 80 diperlukan.';
      return;
    }

    finalQuizScore = Number(scoreMatch[0]);
    studentName.textContent = name;
    studentScore.textContent = finalQuizScore;

    preview.classList.remove('hidden');
    lock.textContent = '🏆';
    status.textContent = 'Sertifikat Berhasil Dibuka';
    description.textContent =
      'Selamat atas penyelesaian pembelajaran Bangun Ruang Limas!';
    note.textContent = 'Sertifikat siap dicetak atau disimpan sebagai PDF.';

    certificateUnlocked = true;
    claimButton.classList.add('hidden');
    printButton.classList.remove('hidden');
    nameInput.classList.add('hidden');
  });

  printButton.addEventListener('click', () => {
    window.print();
  });

  checkCertificateEligibility();
})();
