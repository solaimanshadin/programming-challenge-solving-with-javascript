const raceCalculator = (firstKangarooSpeed, secondKangarooSpeed, estimatedTime) => {
    const secondKangarooDelayTime = 17; //second

    for (let i = 1; i <= estimatedTime; i++) {
        const firstKangarooOvercome = i * firstKangarooSpeed;
        const secondKangarooOvercome = (i - secondKangarooDelayTime) * secondKangarooSpeed;

        if (firstKangarooOvercome == secondKangarooOvercome) {
            return `They will Meet after ${i} second at ${firstKangarooOvercome} miter `;
        }
    }
}

console.log(raceCalculator(4, 5, 100));

//First argument is Speed of First Kangaroo , second Argument is Speed of Second Kangaroo , 3rd one is Estimated Time