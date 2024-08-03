var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadow: true,
    },
    loop: true,
});

function completeTask(taskId) {
    const currentTask = document.getElementById(taskId);
    const nextTask = currentTask.nextElementSibling;

    // Si es la última tarea, mostrar confirmación
    if (!nextTask || !nextTask.classList.contains('task')) {
        if (!confirm('¿Estás segura?')) {
            return; // Si el usuario cancela, no hacer nada
        }
    }

    currentTask.classList.remove('active');
    
    if (nextTask && nextTask.classList.contains('task')) {
        nextTask.classList.add('active');
    } else {
        showCongratulations();
    }
}

function previousTask(taskId) {
    const currentTask = document.getElementById(taskId);
    currentTask.classList.remove('active');
    const prevTask = currentTask.previousElementSibling;
    if (prevTask && prevTask.classList.contains('task')) {
        prevTask.classList.add('active');
    }
}

function showCongratulations() {
    const congratulations = document.getElementById('congratulations');
    congratulations.style.display = 'block';
    startConfetti();
}

function startConfetti() {
    // Confeti desde la esquina inferior izquierda
    confetti({
        particleCount: 500, // Más partículas para un mayor efecto
        angle: 45, // Ajusta el ángulo de dispersión hacia la derecha
        spread: 1500, // Aumenta el ángulo de dispersión para un mayor alcance
        origin: { x: 0.1, y: 1 } // Esquina inferior izquierda
    });

    // Confeti desde la esquina inferior derecha
    confetti({
        particleCount: 500, // Más partículas para un mayor efecto
        angle: 135, // Ajusta el ángulo de dispersión hacia la izquierda
        spread: 150, // Aumenta el ángulo de dispersión para un mayor alcance
        origin: { x: 0.9, y: 1 } // Esquina inferior derecha
    });

    // Confeti desde la esquina superior izquierda
    confetti({
        particleCount: 500, // Más partículas para un mayor efecto
        angle: 275, // Ajusta el ángulo de dispersión hacia la izquierda
        spread: 150, // Aumenta el ángulo de dispersión para un mayor alcance
        origin: { x: 0.1, y: 0 } // Esquina superior izquierda
    });

    // Confeti desde la esquina superior derecha
    confetti({
        particleCount: 500, // Más partículas para un mayor efecto
        angle: 275, // Ajusta el ángulo de dispersión hacia la derecha
        spread: 150, // Aumenta el ángulo de dispersión para un mayor alcance
        origin: { x: 0.9, y: 0 } // Esquina superior derecha
    });
}

// Inicializar la primera tarea como activa
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.task').classList.add('active');
});
