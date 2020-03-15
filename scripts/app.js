const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const enteredValue = prompt('Maximum life for you and the monster.', '100');
let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100 ;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealtPlayerDamage(ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if(currentPlayerHealth <=0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }
    if(currentPlayerHealth > 0 && currentMonsterHealth <=0 ){
        alert("You Won!");
    }else if(currentMonsterHealth > 0 && currentPlayerHealth <=0){
        alert('Sorry,You are dead!');
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('You have draw!');
    }
    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
        Game();
    }
}
