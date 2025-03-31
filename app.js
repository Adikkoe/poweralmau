// Уақытты есептеу функциясы
let timers = {};

function startTimer(locationId) {
    const startTime = Date.now();
    timers[locationId] = startTime;
    updateTimer(locationId);

    // Түйме текстін өзгертеміз
    const button = document.querySelector(`#${locationId} .reserve-btn`);
    button.textContent = "Қайтару";
    button.setAttribute("onclick", `endTimer('${locationId}')`);
}

function updateTimer(locationId) {
    if (!timers[locationId]) return;

    const elapsedTime = Date.now() - timers[locationId];
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    document.querySelector(`#${locationId}-timer`).textContent = 
        `Қолданылған уақыт: ${minutes} мин ${remainingSeconds} с`;

    // Әр 1 секунд сайын уақытты жаңарту
    setTimeout(() => updateTimer(locationId), 1000);
}

function endTimer(locationId) {
    const totalTime = Date.now() - timers[locationId];
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);

    alert(`Қолдану уақыты аяқталды! Жалпы уақыт: ${minutes} мин ${seconds} с`);
    timers[locationId] = null;
    document.querySelector(`#${locationId} .reserve-btn`).textContent = "Жалға алу";
    document.querySelector(`#${locationId}-timer`).textContent = "";
}
