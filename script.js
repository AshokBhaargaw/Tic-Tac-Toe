console.log('Wel Come to Tic Tac Toe');
let music = new Audio('/data/music.mp3')
let ting = new Audio('/data/ting.mp3')
let gameover = new Audio('/data/gameover.mp3')
let turn = "X";
let isgameover = false

//funtion to change turn
const changeTurn = ()=>{
     return turn == "X" ? "O" : "X";
}

// function to check for winner
const checkWin = ()=>{
     let boxtext = document.getElementsByClassName('boxtext');
     let wins = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
     ]
     wins.forEach(e =>{
          if((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[2]].innerText == boxtext[e[0]].innerText) && (boxtext[e[1]].innerText !== '')){
               document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
               isgameover = true; 
               document.querySelector('.imgbox').querySelector('img').style.width = "12em" 
          }
     })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
     let boxtext = element.querySelector('.boxtext');
     element.addEventListener('click', ()=>{
          if (boxtext.innerText == '') {
               boxtext.innerText = turn;
               turn = changeTurn();
               ting.play();
               checkWin();
               if (!isgameover) {
                    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
                    
               }
          }
     })
         
})


// Reset logic
// let reset = document.querySelector('#reset');
reset.addEventListener('click',()=>{
     let boxtext = document.querySelectorAll('.boxtext');
     Array.from(boxtext).forEach(element =>{
          element.innerText = ""
     });
     turn = 'X'
     isgameover = false
     document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
     document.querySelector('.imgbox').querySelector('img').style.width = "0" 

})















