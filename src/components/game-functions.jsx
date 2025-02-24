export const gameFunctions = () => {
    const playedCards = [];
    const scoreHistory  = [];
    let currentScore  = 0;

    const handleClick = (play) => {
        randomiseCards();
        !playedCards.includes(play) ?
            currentScore += 1 
        :   scoreHistory.push(currentScore);
    }

    const maxScore = (scoreHistory) => {
        return scoreHistory.length === 0 ? 0 : Math.max(...scoreHistory);
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
        playedCards,
        scoreHistory,
        currentScore,
        maxScore,
        handleClick,
        randomiseCards,
    }
}