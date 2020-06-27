const frogs = CatchAFrog();
const render = Renderer();

$('#start-button').click(() => {
    render.renderFrogs(frogs.getFrogs());
})


$('#play-area').on('mouseenter', 'i', event => {
    frogs.addScore()
    const frogID = $(event.currentTarget).data().id;

    frogs.removeFrogs(frogID);

    frogs.checkIfFinishedLevel()();


    render.renderFrogs(frogs.getFrogs(), frogs.score);
})