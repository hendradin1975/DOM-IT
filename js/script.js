const lagu = document.querySelector("#lagu");
const tombol = document.querySelector("#btn-play");

tombol.addEventListener("click", function () {
    if (lagu.paused) {
        lagu.play();
    } else {
        lagu.pause();
    }
});