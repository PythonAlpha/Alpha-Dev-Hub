// ===== Typing Effect =====

const text = "WELCOME TO ALPHA DEV HUB";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = () => {
    typeWriter();
};


// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===== Fade-In Animation =====

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
});

document.querySelectorAll(".card, .project").forEach(item => {
    item.classList.add("hidden");
    observer.observe(item);
});


// ===== Counter Animation =====

function animateCounter(id, target) {

    let count = 0;
    const speed = target / 100;

    const update = () => {

        if (count < target) {
            count += speed;
            document.getElementById(id).innerText = Math.floor(count);
            requestAnimationFrame(update);
        }
        else {
            document.getElementById(id).innerText = target;
        }

    };

    update();
}

// Example:
// animateCounter("projectCount", 50);
// animateCounter("visitorCount", 1000);


// ===== Back To Top Button =====

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#00e1ff";
topButton.style.color = "black";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===== Mouse Glow Effect =====

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "200px";
glow.style.height = "200px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(0,225,255,.2), transparent 70%)";
glow.style.transform = "translate(-50%, -50%)";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
