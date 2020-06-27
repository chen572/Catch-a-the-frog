const CutAFruit = () => {
    let score = 0;

    const getRandNum = () => Math.floor(Math.random() * 65) + 15;

    const getRandFruit = () => {
        const randIndex = Math.floor(Math.random() * 4);

        const _fruitsIcons = [
            '<i class="fas fa-pepper-hot fa-4x fa-spin" style="color: red;"></i>',
            '<i class="fas fa-carrot fa-4x fa-spin" style="color: orange"></i>',
            '<i class="fas fa-lemon fa-4x fa-spin" style="color: yellow"></i>',
            '<i class="fas fa-apple-alt fa-4x fa-spin" style="color: red"></i>'
        ];

        return _fruitsIcons[randIndex];
    }

    const top = getRandNum();
    const left = getRandNum();


    const _fruits = [
        { id: 'f1', top: top, left: left, fruit: getRandFruit() }
    ];


    let levelCounter = _fruits.length;

    const getFruits = () => _fruits;

    const removeFruits = fruitID => {

        for (let fruit in _fruits) {
            if (_fruits[fruit].id == fruitID) {
                _fruits.splice(fruit, 1);
            }
        }
    };

    const addFruits = () => {
        for (let numOfFruit = 0; numOfFruit < levelCounter + 1; numOfFruit++) {
            const randTop = getRandNum();
            const randLeft = getRandNum();

            _fruits.push({
                id: `f${numOfFruit + 1}`,
                top: randTop,
                left: randLeft,
                fruit: getRandFruit()
            });
        }

        levelCounter++;
    };

    const getLevel = () => levelCounter;

    const getScore = () => score;

    const addScore = () => score += 10;

    const continuePlaying = () => true;

    const checkIfFinishedLevel = () => _fruits.length ? continuePlaying : addFruits;

    let time = 30;

    const getTime = () => time;

    const startTimer = (rend1, rend2) => { 
        const rend1func = rend1;
        const rendEndfunc = rend2;
        
        const id = setInterval(() => {
            time--
            rend1func(time);
            
            if (time <= 0) {
                clearInterval(id);
                rendEndfunc(getLevel(), getScore());
            } else if (time <= 5) {
                $('.timer').toggleClass('red-timer');
            }
        }
        , 1000)
        return id;
    }

    const checkTimer = (id) => {
        
        if (time <= 0) {
            clearInterval(id);
        }
    }

    return {
        getFruits,
        removeFruits,
        addFruits,
        checkIfFinishedLevel,
        addScore,
        getScore,
        getLevel,
        startTimer,
        getTime,
        checkTimer
    }
};