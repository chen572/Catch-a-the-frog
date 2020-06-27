const CatchAFrog = () => {
    let score = 0;

    const getRandNum = () => Math.floor(Math.random() * 65) + 15;

    const getRandFruit = () => {
        const randIndex = Math.floor(Math.random() * 4);

        const _fruits = [
            '<i class="fas fa-pepper-hot fa-4x fa-spin" style="color: red;"></i>',
            '<i class="fas fa-carrot fa-4x fa-spin" style="color: orange"></i>',
            '<i class="fas fa-lemon fa-4x fa-spin" style="color: yellow"></i>',
            '<i class="fas fa-apple-alt fa-4x fa-spin" style="color: red"></i>'
        ];

        return _fruits[randIndex];
    }

    const top = getRandNum();
    const left = getRandNum();


    const _frogs = [
        { id: 'f1', top: top, left: left, fruit: getRandFruit() }
    ];


    let levelCounter = _frogs.length + 1;

    const getFrogs = () => _frogs;

    const removeFrogs = frogID => {

        for (let frog of _frogs) {
            if (frog.id == frogID) {
                _frogs.splice(_frogs.indexOf(frog), 1);
            }
        }
    };

    const addFrogs = () => {
        for (let numOfFrog = 0; numOfFrog < levelCounter; numOfFrog++) {
            const randTop = getRandNum();
            const randLeft = getRandNum();

            _frogs.push({
                id: `f${numOfFrog + 1}`,
                top: randTop,
                left: randLeft,
                fruit: getRandFruit()
            });
        }

        levelCounter++;
    };

    const addScore = () => frogs.score += 10;

    const continuePlaying = () => true;

    const checkIfFinishedLevel = () => _frogs.length ? continuePlaying : addFrogs;

    return {
        getFrogs,
        removeFrogs,
        addFrogs,
        checkIfFinishedLevel,
        addScore,
        score
    }
};