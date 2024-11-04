const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const btn = document.querySelector(".new-game");


let gameGrid;
let currentPlayer;

const winCon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,5,7]    
];


function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    btn.classList.remove("active");
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
    
    
}

// initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X"
    }
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
}

function checkGameover(){
   
}

function handleClick(index  ){
    if(gameGrid[index]===""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameover();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
})

btn.addEventListener("click",initGame);