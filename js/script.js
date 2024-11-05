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
    [2,5,8]    
];


function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    btn.classList.remove("active");
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
    boxes.forEach((box,index) => {
        box.innerHTML = "";
        boxes[index].style.pointerEvents="all";
        boxes[index].style.cursor = 'pointer';

        boxes[index].classList.remove("win");
        
    })
    
    
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
    let answer = "";
    winCon.forEach(position=>{
        if(
            (gameGrid[position[0]]!==""||gameGrid[position[1]]!==""||gameGrid[position[2]]!=="") &&
            (gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]===gameGrid[position[2]])
        ){
            if(gameGrid[position[0]]==="X"){
                answer="X";
            }else{
                answer="0";
            }
            boxes.forEach(box=>{
                box.style.pointerEvents="none";
            });

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            
        }

       

        if(answer!==""){
            gameInfo.innerText=`Winner is - ${answer}`;
            btn.classList.add("active");            
            return;
        }

        let fillCount = 0;
        gameGrid.forEach(box=>{
            if(box!==""){
                fillCount++;
            }
        });
        if(fillCount===9){
            gameInfo.innerText = "Game Tied!";
            btn.classList.add("active");

        }
    });
   
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