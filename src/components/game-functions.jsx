export const gameFunctions = () => {
    const playedCards = [];
    const bestScores  = [];
    let currentScore  = 0;

    const handleClick = (play) => {
        randomiseCards();
        !playedCards.includes(play) ?
            currentScore += 1 
        :   bestScores.push(currentScore);
            let maxScore = Math.max(...bestScores)
            return maxScore;
    }

    const randomiseCards = (array) => {
        const newArray = array.slice();

        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        }
        return newArray;
    }

    return {
        handleClick,
        randomiseCards,
    }
}