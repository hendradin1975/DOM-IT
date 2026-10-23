const lagu = document.querySelector("#lagu");
const tombol = document.querySelector("#btn-play");
const slider = document.querySelector("#slider");

// Mengontrol pemutaran lagu
tombol.addEventListener("click", function () {
    if (lagu.paused) {
        lagu.play();
        tombol.classList.add("main");
    } else {
        lagu.pause();
        tombol.classList.remove("main");
    }
});

lagu.addEventListener("ended", function () {
    tombol.classList.remove("main");
});

lagu.addEventListener("timeupdate", function () {
    const maju = Math.floor(lagu.currentTime);
    const total = Math.floor(lagu.duration);

    slider.value = (lagu.currentTime / lagu.duration) * 100;
    waktuMaju.textContent = ubahWaktu(maju);
    waktuMundur.textContent = "-" + ubahWaktu(total - maju);
});

// Atur slider untuk mengubah posisi lagu
slider.addEventListener("input", function () {
    lagu.currentTime = (slider.value / 100) * lagu.duration;
});

const waktuMaju = document.querySelector("#waktu-maju");
const waktuMundur = document.querySelector("#waktu-mundur");

function ubahWaktu(detik) {
    const menit = Math.floor(detik / 60);
    let sisa = Math.floor(detik % 60);
    if (sisa < 10) {
        sisa = "0" + sisa;
    }
    return menit + ":" + sisa;
}

lagu.addEventListener("loadedmetadata", function () {
    waktuMundur.textContent = "-" + ubahWaktu(Math.floor(lagu.duration));
});