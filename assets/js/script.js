const RockPaperScissors = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //play
    const play = () => {
        const options = document.querySelectorAll('.options button');
        const player = document.querySelector(".player-choice");
        const computer = document. querySelector(".computer-choice");

        const computerOptions = ['rock', 'paper', 'scissors'];
        const computerNumber = Math.floor(Math.random() * 3);
        
        computerOptions[computerNumber]
    };




    startGame();
};

//start
RockPaperScissors();