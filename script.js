document.addEventListener('DOMContentLoaded', () => {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const countdownSection = document.getElementById('countdown');
    const body = document.body;

    // Create Preview Button
    const previewButton = document.createElement('button');
    previewButton.id = 'previewButton';
    previewButton.textContent = 'Preview Happy New Year';
    previewButton.style.marginTop = '20px';
    countdownSection.appendChild(previewButton);

    // Target New Year's Date
    const targetDate = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

    // Update Timer Function
    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            showHappyNewYear();
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    // Show Happy New Year Message
    function showHappyNewYear() {
        body.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; 
                        height: 100vh; background: linear-gradient(to bottom right, #ff6b6b, #f06595); color: white; text-align: center;">
                <h1 style="font-size: 4rem;">🎉 Happy New Year! 🎉</h1>
                <p style="font-size: 1.5rem;">Wishing you a joyful and prosperous year ahead!</p>
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
                     style="width: 200px; margin-top: 20px; cursor: pointer;" 
                     alt="SpongeBob Celebration" id="spongeBobImage">
            </div>
        `;

        const spongeBobImage = document.getElementById('spongeBobImage');
        spongeBobImage.addEventListener('click', () => {
            location.reload(); // Reload to restore original countdown
        });
    }

    // Add Preview Button Click Event
    previewButton.addEventListener('click', () => {
        showHappyNewYear();
    });

    // Initialize Timer
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
});
