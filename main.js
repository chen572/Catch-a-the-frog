// There was no play function in jQuery so I needed to add it
jQuery.fn.playaudio = function () {
    document.getElementById(this.attr('id')).play();
};

const fruit = CutAFruit();
const render = Renderer();

// Start game event listener
$('#start-button').click(() => {
    render.renderFruits(fruit.getFruits());
    fruit.startTimer(render.renderTimer, render.renderEnd);
});

// On every fruit that gets cut
$('#play-area').on('mouseenter', 'i', event => {
    $('#audio').playaudio();

    fruit.addScore()
    
    const fruitID = $(event.currentTarget).data().id;

    fruit.removeFruits(fruitID);
    fruit.checkIfFinishedLevel()();

    render.renderFruits(fruit.getFruits(), fruit.getScore(), fruit.getLevel());
});