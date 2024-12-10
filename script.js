let currentIndex = 1; // Indeks container aktif dimulai dari 1
const totalContainers = 5; // Total container

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

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < totalContainers) {
    const nextIndex = currentIndex + 1;
    showContainer(nextIndex, "next");
  }
});

document.getElementById("back").addEventListener("click", () => {
  if (currentIndex > 1) {
    const nextIndex = currentIndex - 1;
    showContainer(nextIndex, "back");
  }
});
