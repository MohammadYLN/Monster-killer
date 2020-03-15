const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('stront-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBar(maxlife){
    monsterHealthBar.max = maxlife;
    monsterHealthBar.value = maxlife;
    playerHealthBar.max = maxlife;
    playerHealthBar.value = maxlife;
}

function dealMonsterDamage(damage){
    const dealtDamage = Math.random() * damage;
    monsterHealthBar = +monsterHealthBar - dealtDamage;
    return dealtDamage;
}

function dealtPlayerDamage(damage){
    const dealtDamage = Math.random() * damage;
    playerHealthBar = +playerHealthBar - dealtDamage;
    return dealtDamage;
}

function increasePlayerHealth(healValue){
    playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value){
    monsterHealthBar.value = value;
    playerHealthBar.value = value;
}

function removeBonusLife() {
    bonusLifeEl.parentNode.removeChild(bonusLifeEl);
  }
  
  function setPlayerHealth(health) {
    playerHealthBar.value = health;
  }
  