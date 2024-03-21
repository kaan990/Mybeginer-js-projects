const canvas = document.getElementById("backeffect");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numParticles = 100;
const particles = [];
const minGap = 10; // Minimum gap between particles

// Create particles with gaps
for (let i = 0; i < numParticles; i++) {
    const radius = 5 + Math.random() * 10;
    let x, y;

    // Ensure particles are not placed too close to each other
    do {
        x = Math.random() * (canvas.width - 2 * radius) + radius;
        y = Math.random() * (canvas.height - 2 * radius) + radius;
        console.log("X :-"+ x + "Y:-"+y);
    } while (particles.some(particle => {
        const dx = particle.x - x;
        const dy = particle.y - y;
        console.log(`dx is ${dx} and dy : ${dy}`)
        console.log(dx * dx + dy * dy < (particle.radius + radius + minGap) ** 2)
        return dx * dx + dy * dy < (particle.radius + radius + minGap) ** 2;
    }));

    particles.push({
        x: x,
        y: y,
        radius: radius,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    });
}

function drawParticles() {
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    });
}

function updateParticles() {
    particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Collision detection with walls
        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
            particle.vx *= -1;
        }
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
            particle.vy *= -1;
        }

        // Collision detection with other particles
        particles.forEach(otherParticle => {
            if (particle !== otherParticle) {
                const dx = otherParticle.x - particle.x;
                const dy = otherParticle.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = particle.radius + otherParticle.radius + minGap;

                if (distance < minDistance) {
                    // Particles are colliding, adjust positions
                    const angle = Math.atan2(dy, dx);
                    const targetX = particle.x + Math.cos(angle) * minDistance;
                    const targetY = particle.y + Math.sin(angle) * minDistance;
                    const ax = (targetX - otherParticle.x) * 0.05;
                    const ay = (targetY - otherParticle.y) * 0.05;
                    particle.vx -= ax;
                    particle.vy -= ay;
                    otherParticle.vx += ax;
                    otherParticle.vy += ay;
                }
            }
        });
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawParticles();
    updateParticles();
    requestAnimationFrame(draw);
}

// Add effect when hovering the mouse over the canvas
canvas.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    particles.forEach(particle => {
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) { // Adjust the distance threshold as needed
            particle.radius += 1; // Increase particle radius
        } else if (particle.radius > 5) {
            particle.radius -= 1; // Decrease particle radius
        }
    });
});

draw();