// ===== Typing Effect =====

const message: string = "WELCOME TO ALPHA DEV HUB";
let index: number = 0;

function typeWriter(): void {
    const typingElement = document.getElementById("typing");

    if (typingElement && index < message.length) {
        typingElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener("load", () => {
    typeWriter();
});


// ===== Smooth Scroll =====

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")!
        );

        target?.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===== Dark Mode Toggle =====

const toggleButton = document.getElementById("theme-toggle");

toggleButton?.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});


// ===== Live Clock =====

function updateClock(): void {
    const clock = document.getElementById("clock");

    if (clock) {
        const now = new Date();

        clock.innerHTML = now.toLocaleTimeString();
    }
}

setInterval(updateClock, 1000);


// ===== Greeting =====

function getGreeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 18) return "Good Afternoon 🌤️";

    return "Good Evening 🌙";
}

const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    greetingElement.innerHTML = getGreeting();
}


// ===== Console Message =====

console.log("🚀 Alpha Dev Hub Loaded Successfully!");
