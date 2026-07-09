const counters = document.querySelectorAll(".counter");

const animateCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = 40;

        const updateCounter = () => {

            if (count < target) {

                count++;

                counter.innerText = count;

                setTimeout(updateCounter, speed);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const achievementSection = document.querySelector("#achievements");

if (achievementSection) {

    let started = false;

    window.addEventListener("scroll", () => {

        const sectionTop = achievementSection.offsetTop - 500;

        if (!started && window.scrollY > sectionTop) {

            animateCounters();

            started = true;

        }

    });

}

/* ===========================
   SCROLL PROGRESS
=========================== */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progress-bar");

    if(progressBar){
        progressBar.style.width = progress + "%";
    }

});

/* ===========================
   BACK TO TOP
=========================== */

const backToTop=document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll",()=>{

        backToTop.style.display =
            window.scrollY>400 ? "block":"none";

    });

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}
const roles = [
    "Java Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Problem Solver",
    "IT Student"
];

const typing = document.getElementById("typing");

let currentRole = 0;

function animateRole(){

    if(!typing) return;

    typing.classList.add("slide-out");

    setTimeout(()=>{

        currentRole = (currentRole + 1) % roles.length;

        typing.textContent = roles[currentRole];

        typing.classList.remove("slide-out");

        typing.classList.add("slide-in");

        setTimeout(()=>{

            typing.classList.remove("slide-in");

        },500);

    },500);

}

if(typing){

    typing.textContent = roles[0];

    let roleInterval = setInterval(animateRole,3000);

}
/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});

/* ==========================================
   EMAILJS CONTACT FORM
========================================== */

// Initialize EmailJS
emailjs.init({
    publicKey: "nSWSFX3wZ0A8YCOj2",
});

// Contact Form
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button");

        submitBtn.innerHTML = "Sending...";
        submitBtn.disabled = true;

        emailjs.send("service_c5px4ei", "template_84tasj3", {

            from_name: document.getElementById("name").value,

            from_email: document.getElementById("email").value,

            message: document.getElementById("message").value

        })
            .then(function () {

                alert("✅ Thank you! Your message has been sent successfully.");

                contactForm.reset();

            })
            .catch(function (error) {

                console.error(error);

                alert("❌ Failed to send message. Please try again.");

            })
            .finally(function () {

                submitBtn.innerHTML = "Send Message";
                submitBtn.disabled = false;

            });

    });

}

/* ======================================
   PARTICLES
====================================== */

tsParticles.load("particles-js", {

    background: {
        color: {
            value: "#020617"
        }
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 60
        },

        color: {
            value: "#38bdf8"
        },

        links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.25,
            width: 1
        },

        move: {
            enable: true,
            speed: 1
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        }

    },

    interactivity: {

        events: {

            onHover: {

                enable: true,

                mode: "grab"

            }

        },

        modes: {

            grab: {

                distance: 180,

                links: {

                    opacity: 1

                }

            }

        }

    }

});
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".project-card").forEach(card=>{

    card.classList.add("fade-up");

    observer.observe(card);

});

const cursor = document.getElementById("cursor-glow");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}