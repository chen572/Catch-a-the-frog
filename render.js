const Renderer = () => {

    const renderFrogs = (frogs, score) => {
        $('#play-area').empty()
        $('#score-box').remove();
        const newScore = `<div id="score-box">Score : ${score}</div>`
        $('#bottom-bar').append(newScore);

        for (let frog of frogs) {
            const frogDiv = $(frog.fruit);
            frogDiv.data('id', frog.id)
            frogDiv.css({'top': `${frog.top}%`, 'left': `${frog.left}%`})

            $('#play-area').append(frogDiv);
        };
    }

    return {
        renderFrogs
    }
};