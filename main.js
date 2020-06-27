const fruit = CutAFruit();
const render = Renderer();


// Start game event listener
$('#start-button').click(() => {
    render.renderFruits(fruit.getFruits());
    fruit.startTimer(render.renderTimer, render.renderEnd);
});

// On every fruit that cut
$('#play-area').on('mouseenter', 'i', event => {
    fruit.addScore()
    
    const fruitID = $(event.currentTarget).data().id;

    fruit.removeFruits(fruitID);
    fruit.checkIfFinishedLevel()();

    render.renderFruits(fruit.getFruits(), fruit.getScore(), fruit.getLevel());
});