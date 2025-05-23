    const mainMenu = document.querySelector('.main-menu');
    const startBtn = document.getElementById('start_btn');
    
    const mainGame = document.querySelector('.main-game');
    
    const playerBtns = document.querySelectorAll('#main-player div');

    const enemyCard = document.getElementById('bot');
    const enemyCard1 = document.getElementById('bot1');
    const enemyCard2 = document.getElementById('bot2');

    const playerCount = document.getElementById('player_count');
    const enemyCount = document.getElementById('enemy_count');

    const pulse = document.getElementById('pulse');

    const gameFinal = document.querySelector('.game-end');
    const finalText = document.getElementById('final-text');
    const restartBtn = document.getElementById('restart_btn');

    playerPoints = 0;
    enemyPoints = 0;

    const stats = {
        enemy_status: '',
        player_status: ''
    }

    //Функции

    function enemyRandom(){
        let random = Math.floor(Math.random() * 3 + 1);
        
        if(random === 1){
            stats.enemy_status = 'paper';
        }else if(random === 2){
            stats.enemy_status = 'scissors';
        }else if(random === 3){
            stats.enemy_status = 'rock';
        }
    }

    function checkAnimation(){
        if(stats.enemy_status === 'rock'){
            enemyCard.classList.add('selected');
        }else if(stats.enemy_status === 'paper'){
            enemyCard1.classList.add('selected');
        }else if(stats.enemy_status === 'scissors'){
            enemyCard2.classList.add('selected');
        }
    }

    function gameEnd(){
        mainGame.style.opacity = '0';
        mainGame.style.display = 'none';
        gameFinal.style.display = 'flex';
    }

    playerBtns.forEach((value) => {
        value.addEventListener('click', ()=>{
            enemyRandom();

            enemyCard.classList.remove('selected');
            enemyCard1.classList.remove('selected');
            enemyCard2.classList.remove('selected');

            let playerValue = value.getAttribute('data-status');
            
            if(playerValue === 'paper'){
                stats.player_status = 'paper';
            }else if(playerValue === 'scissors'){
                stats.player_status = 'scissors';
            }else if(playerValue === 'rock'){
                stats.player_status = 'rock';
            }

            if(stats.enemy_status == 'paper' && stats.player_status == 'scissors'){
                checkAnimation();
                playerPoints++;
                playerCount.innerHTML = playerPoints;

                pulse.textContent = 'You win!';
                pulse.style.color = 'darkgreen';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }else if(stats.enemy_status == 'paper' && stats.player_status == 'paper'){
                checkAnimation();

                pulse.textContent = 'Nobody wins!';
                pulse.style.color = 'yellow';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }else if(stats.enemy_status == 'paper' && stats.player_status == 'rock'){
                checkAnimation();
                enemyPoints++;
                enemyCount.innerHTML = enemyPoints;

                pulse.textContent = 'You lose!';
                pulse.style.color = 'orangered';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }

            if(stats.enemy_status == 'scissors' && stats.player_status == 'scissors'){
                checkAnimation();

                pulse.textContent = 'Nobody wins!';
                pulse.style.color = 'yellow';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }else if(stats.enemy_status == 'scissors' && stats.player_status == 'paper'){
                checkAnimation();
                enemyPoints++;
                enemyCount.innerHTML = enemyPoints;

                pulse.textContent = 'You lose!';
                pulse.style.color = 'orangered';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }else if(stats.enemy_status == 'scissors' && stats.player_status == 'rock'){
                checkAnimation();
                playerPoints++;
                playerCount.innerHTML = playerPoints; 

                pulse.textContent = 'You win!';
                pulse.style.color = 'darkgreen';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }

            if(stats.enemy_status == 'rock' && stats.player_status == 'scissors'){
                checkAnimation();
                enemyPoints++;
                enemyCount.innerHTML = enemyPoints;

                pulse.textContent = 'You lose!';
                pulse.style.color = 'orangered';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }else if(stats.enemy_status == 'rock' && stats.player_status == 'paper'){
                checkAnimation();
                playerPoints++;
                playerCount.innerHTML = playerPoints;

                pulse.textContent = 'You win!';
                pulse.style.color = 'darkgreen';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }else if(stats.enemy_status == 'rock' && stats.player_status == 'rock'){
                checkAnimation();

                pulse.textContent = 'Nobody wins!';
                pulse.style.color = 'yellow';
                pulse.style.animation = 'pulse 1s 1 forwards'
                let pulsetimeout = setTimeout(()=>{
                    pulse.style.animation = '';
                    clearTimeout(pulsetimeout);
                }, 500);
            }
            

            if(playerPoints >= 10){
                finalText.textContent = "You are a winner!"
                finalText.style.color = 'rgb(114, 36, 160)';
                gameEnd();
            }else if(enemyPoints >= 10){
                finalText.textContent = "This time you loose, try again!"
                finalText.style.color = 'rgb(167, 8, 8)';
                gameEnd();
            }else{
                console.log('So far nobody won!');
            }

            let timeout = setTimeout(()=>{
                stats.enemy_status = '';
                stats.player_status = '';

                clearTimeout(timeout);
            }, 100);

            let clearClasses = setTimeout(()=>{
                enemyCard.classList.remove('selected');
                enemyCard1.classList.remove('selected');
                enemyCard2.classList.remove('selected');

                clearTimeout(clearClasses);
            }, 500);
        })
    });

    //События

    startBtn.addEventListener('click', ()=>{
        mainMenu.style.opacity = '0';
        mainMenu.style.display = 'none';
        mainGame.style.opacity = '1';
    });

    restartBtn.addEventListener('click', ()=>{
        location.reload();
    });