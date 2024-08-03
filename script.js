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
    confetti({
        particleCount: 200,
        spread: 60,
        origin: { y: 0.6 }
    });
}

// Inicializar la primera tarea como activa
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.task').classList.add('active');
});
