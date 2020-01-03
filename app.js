let form = document.querySelector('.solution-form');
let result = document.querySelector('.display-solution');

const raceCalculator = (firstKangarooSpeed, secondKangarooSpeed, estimatedTime) => {
    const secondKangarooDelayTime = 17; //second

    for (let i = 1; i <= estimatedTime; i++) {
        const firstKangarooOvercome = i * firstKangarooSpeed;
        const secondKangarooOvercome = (i - secondKangarooDelayTime) * secondKangarooSpeed;

        if (firstKangarooOvercome == secondKangarooOvercome) {
            return `উভয় ক্যাঙ্গারু ${firstKangarooOvercome} মিটার দূরত্বে ${i} সেকেন্ড পরে মিলিত হবে`;
        }
    }
}

//Event Listener for Handaling from data
form.addEventListener('submit', e => {
    e.preventDefault();
    if (raceCalculator(form.speedof_first_kangaroo.value, form.speedof_second_kangaroo.value, form.estimated_time.value)) {
        result.innerHTML = raceCalculator(form.speedof_first_kangaroo.value, form.speedof_second_kangaroo.value, form.estimated_time.value);
        result.style.display = 'block';
    } else {
        result.innerHTML = "উভয় ক্যাঙ্গারু কখনো মিলিত হবে না"
        result.style.display = 'block';
    }

})