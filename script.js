/* ================= OPEN INVITATION ================= */

const openBtn = document.getElementById("openBtn");
const openingScreen = document.getElementById("openingScreen");
const invitation = document.getElementById("invitation");
const music = document.getElementById("weddingMusic");
const musicBtn = document.getElementById("musicBtn");

openBtn.addEventListener("click", function () {

    // Hide envelope
    openingScreen.classList.add("hide");

    // Show invitation
    invitation.classList.add("show");

    // Start music
    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

});


/* ================= MUSIC ================= */

let musicPlaying = false;

musicBtn.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML = "♫";

        musicPlaying = false;

    } else {

        music.play();

        musicBtn.innerHTML = "🔊";

        musicPlaying = true;
    }

});


/* ================= COUNTDOWN ================= */

// Change this date to your actual wedding date

const weddingDate = new Date(
    "December 20, 2026 19:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();


/* ================= RSVP ================= */

const rsvpBtn = document.getElementById("rsvpBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

rsvpBtn.addEventListener("click", function () {

    popup.classList.add("show");

});


closeBtn.addEventListener("click", function () {

    popup.classList.remove("show");

});


/* Close popup when clicking outside */

popup.addEventListener("click", function (event) {

    if (event.target === popup) {

        popup.classList.remove("show");

    }

});


/* ================= RSVP SUBMIT ================= */

submitBtn.addEventListener("click", function () {

    const name =
        document.getElementById("guestName").value;

    const guests =
        document.getElementById("guestCount").value;

    const message =
        document.getElementById("rsvpMessage");


    if (name === "" || guests === "") {

        message.innerHTML =
            "Please fill in all details.";

        message.style.color = "#b55";

        return;
    }


    message.innerHTML =
        `Thank you, ${name}! ❤️ We have received your RSVP for ${guests} guest(s).`;

    message.style.color = "#6c8a6c";


    document.getElementById("guestName").value = "";

    document.getElementById("guestCount").value = "";

});