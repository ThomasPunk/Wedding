let currentIndex = 1; // Indeks container aktif dimulai dari 1
const totalContainers = 6; // Total container

const showContainer = (nextIndex, direction) => {
  const currentContainer = document.getElementById(`container${currentIndex}`);
  const nextContainer = document.getElementById(`container${nextIndex}`);

  if (currentIndex < nextIndex) { 
  // Tambahkan kelas untuk efek transisi keluar pada kontainer aktif
  currentContainer.classList.remove("active");
  currentContainer.classList.add("exit");

  // Geser elemen baru masuk (efek push)
  nextContainer.classList.remove("exit");
  nextContainer.classList.add("active");
  }
  else if (currentIndex > nextIndex) {
  currentContainer.classList.remove("exit");
  currentContainer.classList.remove("active");
  nextContainer.classList.remove("exit");
  nextContainer.classList.add("active");
  }
  // Perbarui indeks container aktif
  currentIndex = nextIndex;
};

const buttons = [
  { id: "jahat", container: 6, value: "jahat" },
  { id: "baik", container: 2, value: "baik" },
  { id: "tidak", container: 6, value: "tidak" },
  { id: "kenal", container: 3, value: "kenal" },
  { id: "hadir", container: 4, value: "hadir" },
  { id: "absen", container: 6, value: "absen" },
  { id: "done", container: 5, value: "done" },
  { id: "kembali", container: 1, value: "kembali" }
];

buttons.forEach(button => {
  document.getElementById(button.id).addEventListener("click", () => {
    showContainer(button.container, button.value);
  });
});
