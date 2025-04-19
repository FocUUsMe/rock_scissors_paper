    const mainMenu = document.querySelector('.main-menu');
    const startBtn = document.getElementById('start_btn');
    
    const mainGame = document.querySelector('.main-game');
    
    const playerBtns = document.querySelectorAll('#main-player div');

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

    playerBtns.forEach((value) => {
        value.addEventListener('click', ()=>{
            enemyRandom();

            let playerValue = value.getAttribute('data-status');
            
            if(playerValue === 'paper'){
                stats.player_status = 'paper';
            }else if(playerValue === 'scissors'){
                stats.player_status = 'scissors';
            }else if(playerValue === 'rock'){
                stats.player_status = 'rock';
            }

            if(stats.enemy_status == 'paper' && stats.player_status == 'scissors'){
                console.log('You win!');
    
                stats.enemy_status = '';
                stats.player_status = '';
            }else if(stats.enemy_status == 'paper' && stats.player_status == 'paper'){
                console.log('Nobody wins!');
    
                stats.enemy_status = '';
                stats.player_status = '';
            }else if(stats.enemy_status == 'paper' && stats.player_status == 'rock'){
                console.log('You lose!');
    
                stats.enemy_status = '';
                stats.player_status = '';
            }

            if(stats.enemy_status == 'scissors' && stats.player_status == 'scissors'){
                console.log('Nobody wins!');
            }else if(stats.enemy_status == 'scissors' && stats.player_status == 'paper'){
                console.log('You lose!');
            }else if(stats.enemy_status == 'scissors' && stats.player_status == 'rock'){
                console.log('You win!')
            }

            if(stats.enemy_status == 'rock' && stats.player_status == 'scissors'){
                console.log('You lose!');
            }else if(stats.enemy_status == 'rock' && stats.player_status == 'paper'){
                console.log('You win!');
            }else if(stats.enemy_status == 'rock' && stats.player_status == 'rock'){
                console.log('Nobody wins!');
            }

            let timeout = setTimeout(()=>{
                stats.enemy_status = '';
                stats.player_status = '';
            }, 100);
        })
    });

    //События

    startBtn.addEventListener('click', ()=>{
        mainMenu.style.opacity = '0';
        mainMenu.style.display = 'none';
        mainGame.style.opacity = '1';
    });