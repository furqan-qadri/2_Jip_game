
// let dice= Math.trunc(Math.random()*6+1);
// console.log(dice);
let currentP1=0;
let currentP2=0
let scorep1=0;
let scorep2=0;
let active=0;

const btnNewGame= document.querySelector('.btnNewGame');
const btnRollDice1= document.querySelector('.btnRollDice');
const btnHold= document.querySelector('.btnHold');
const diceImage= document.querySelector('.diceImage');

diceImage.classList.add('hidden');


btnRollDice1.addEventListener('click',function(event){
diceImage.classList.remove('hidden');
    
    if (active==0){

        dice= Math.trunc(Math.random()*6+1);

    if (dice==1){

        diceImage.src = `./dice-${dice}.png`;
        currentP1=0;
        scorep1=0;
        active=1;
    }
    diceImage.src = `./dice-${dice}.png`;
    currentP1=currentP1+dice;
    document.querySelector('.p1Current').textContent=currentP1;
    document.querySelector('.p1Total').textContent=scorep1;

    }

    else {

        dice= Math.trunc(Math.random()*6+1);

        if (dice==1){
            diceImage.src = `./dice-${dice}.png`;
            currentP2=0;
            scorep2=0;
            active=0;
        }
        diceImage.src = `./dice-${dice}.png`;
        currentP2=currentP2+dice;
        document.querySelector('.p2Current').textContent=currentP2;
        document.querySelector('.p2Total').textContent=scorep2;

    }


    

    })

    



btnHold.addEventListener('click',function(event){
diceImage.classList.remove('hidden');


    if (active==0){
        scorep1=scorep1+currentP1;
        document.querySelector('.p1Total').textContent=scorep1;
        active=1;
    }

    else{
        scorep2=scorep2+currentP2;
        document.querySelector('.p2Total').textContent=scorep2;
        active=0;
    }

  



})

btnNewGame.addEventListener('click', function(event){
diceImage.classList.remove('hidden');

currentP1=0;
currentP2=0
scorep1=0;
scorep2=0;
active=1 ? active=0 : active=1;


document.querySelector('.p2Current').textContent=currentP2;
document.querySelector('.p2Total').textContent=scorep2;
document.querySelector('.p1Current').textContent=currentP1;
document.querySelector('.p1Total').textContent=scorep1;


})






/* btnRollDice1.addEventListener('click',function(event){
    
    
    dice= Math.trunc(Math.random()*6+1);

    if (dice==1){
        currentP1=0;
        scorep1=0;
    }
    currentP1=currentP1+dice;
    document.querySelector('.p1Current').textContent=currentP1;
    document.querySelector('.p1Total').textContent=scorep1;

    }) */