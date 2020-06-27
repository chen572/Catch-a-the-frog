const Renderer = () => {

    const renderFruits = (fruits, score, level) => {
        $('#play-area').empty()
        $('#bottom-bar').empty();
        
        
        const levelDiv = `<div id="level">Level: ${level || 1}</div>`
        const start = `<div id="start-button">Cut The Fruits!</div>`;
        const newScore = `<div id="score-box">Score : ${score || 0}</div>`
        
        $('#bottom-bar').append(levelDiv);
        $('#bottom-bar').append(start);
        $('#bottom-bar').append(newScore);
        
        for (let fruit of fruits) {
            const fruitDiv = $(fruit.fruit);
            fruitDiv.data('id', fruit.id)
            fruitDiv.css({'top': `${fruit.top}%`, 'left': `${fruit.left}%`})
            
            $('#play-area').append(fruitDiv);
        };
    }
    
    const renderTimer = (time) => {
        $('#top-bar').empty();
        
        const name = `<div id="name">Fruit Samurai</div>`;
        const timer = `<div class="timer">${time || 30}</div>`;
        
        $('#top-bar').append(name);
        $('#top-bar').append(timer);
    }

    const renderEnd = (level, score) => {
        const endDiv = $('<div id="end"></div>')
        $('body').append(endDiv);
        endDiv.animate({bottom: '0'}, 1000);
        
        const para = '<p id="title">Time\'s up<br></p>';
        const para2 = `<p class="end-text">You made it to level ${level}, with the score of ${score}</p>`;
        const para3 = '<p class="end-text">Refresh the page to play again</p>';
        
        endDiv.append(para);
        endDiv.append(para2);
        endDiv.append(para3);
    }

    return {
        renderFruits,
        renderTimer,
        renderEnd
    }
};