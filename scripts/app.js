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


