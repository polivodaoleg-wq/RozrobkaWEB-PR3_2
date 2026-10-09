
const $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

    renderHP() {
        this.renderHPText();
        this.renderProgressbarHP();
    },

    renderHPText() {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    },

    renderProgressbarHP() {
        this.elProgressbar.style.width = this.damageHP + '%';
    },

    changeHP(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert('Бідний ' + this.name + ' програв бій!');
            $btn.disabled = true;
        } 
        else { this.damageHP -= count; }
        this.renderHP();
    }
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),

    renderHP() {
        this.renderHPText();
        this.renderProgressbarHP();
    },

    renderHPText() {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    },

    renderProgressbarHP() {
        this.elProgressbar.style.width = this.damageHP + '%';
    },

    changeHP(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert('Бідний ' + this.name + ' програв бій!');
            $btn.disabled = true;
        } 
        else { this.damageHP -= count; }
        this.renderHP();
    }
};

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function random(num) { return Math.ceil(Math.random() * num); }

$btn.addEventListener('click', function () {
console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

init();
