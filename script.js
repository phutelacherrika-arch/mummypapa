// 🎯 Typing effect
let text = "Thank you for your love. Wish you lots of happiness and a long life ahead ❤️";
let index = 0;

function typeEffect() {
    let typingEl = document.getElementById("typing");
    if (!typingEl) return;

    if (index < text.length) {
        typingEl.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}
typeEffect();


// 🎵 Play music ONLY once
let musicStarted = false;
document.addEventListener("click", function () {
    if (musicStarted) return;

    let music = document.getElementById("bgMusic");
    if (music) {
        music.play();
        musicStarted = true;
    }
});


// 🖼️ Slideshow
let images = [
    "photo1.jpeg",
    "photo2.png",
    "photo3.png",
    "photo4.png",
    "photo5.png",
];

let i = 0;

function changeSlide() {
    let slide = document.getElementById("slide");
    if (!slide) return;

    slide.src = images[i];
    i = (i + 1) % images.length;
}

setInterval(changeSlide, 4000); // smoother timing
changeSlide();


// 🎬 Show video
function showVideo() {
    let videoBox = document.getElementById("videoBox");
    let video = document.getElementById("surpriseVideo");
    let bgMusic = document.getElementById("bgMusic");

    // show video
    videoBox.style.display = "block";

    // stop background music
    if (bgMusic) {
        bgMusic.pause();
    }

    // play video
    if (video) {
        video.currentTime = 0;
        video.play();

        // if paused
        video.onpause = function () {
            if (bgMusic) {
                bgMusic.play();
            }
        };

        // if ended
        video.onended = function () {
            if (bgMusic) {
                bgMusic.play();
            }
        };
    }
}
// 😜 NO button runs away
function moveNo() {
    let btn = document.getElementById("noBtn");
    if (!btn) return;

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}


// 💖 Show Thank You screen
function showThankYou() {
    let screen = document.getElementById("thankYouScreen");
    if (screen) {
        screen.style.display = "block";
    }
}


// 🎉 Emoji explosion
function explodeEmojis(event) {
    let container = document.getElementById("emojiContainer");
    if (!container) return;

    let emojis = ["❤️", "💖", "💕", "💘", "🎉", "✨"];

    for (let i = 0; i < 20; i++) {
        let span = document.createElement("span");
        span.classList.add("emoji");
        span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        let x = (Math.random() - 0.5) * 300 + "px";
        let y = (Math.random() - 0.5) * 300 + "px";

        span.style.setProperty("--x", x);
        span.style.setProperty("--y", y);

        span.style.left = event.clientX + "px";
        span.style.top = event.clientY + "px";

        container.appendChild(span);

        setTimeout(() => span.remove(), 1000);
    }
}


// 😊 YES button (use this if needed)
function handleYes(event) {
    explodeEmojis(event);
    showThankYou();
}


// ✨ Sparkles (reduced for performance)
setInterval(() => {
    let sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.innerText = "✨";

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1200);
}, 400); // slower = smoother


// 🔙 Go Home (optional, safe to keep)
function goHome() {
    window.location.href = "index.html";
}