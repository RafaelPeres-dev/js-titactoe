let symbol='X';
let cells=['','','','','','','','',''];
let winnerBox=document.getElementsByClassName("winnerBox");
let blurBox=document.getElementsByClassName("blurbox");
let span = document.getElementsByClassName("winner");

const setSymbolInCell = (symbol, cell) =>{
    document.getElementsByClassName('cell')[cell].innerHTML = symbol;
}

const checkForWinner = () =>{
    // check vor horizontal
    for(let i = 0; i < cells.length; i+=3){
        if(cells[i]===cells[i+1] && cells[i+1]===cells[i+2] &&cells[i]!==''){
            showWinner(cells[i]);
        }
    }

    // check vor vertical
    for(let i = 0; i < 3; i++){
        if(cells[i]===cells[i+3] && cells[i+3]===cells[i+6] &&cells[i]!==''){
            showWinner(cells[i]);
        }
    }

    //check left diagonal
    if(cells[0] === cells[4] && cells[4]===cells[8] &&cells[4]!==''){
        showWinner(cells[4]);
    }
    if(cells[2] === cells[4] && cells[4]===cells[6] &&cells[4]!==''){
        showWinner(cells[4]);
    }

}

const onChangeSymbol = (index) => {
    if(cells[index]!=='') return;

    cells[index] = symbol;
    setSymbolInCell(symbol, index);

    symbol = symbol ==='X'?'O':'X';

    checkForWinner();
}

const showWinner = (winner) => {
    winnerBox[0].style.display = "flex";
    blurBox[0].style.display = "flex";
    span[0].innerHTML=winner;
}

const resetGame = () => {
    symbol='X';
    cells=['','','','','','','','',''];
    for(let i = 0; i < cells.length; i++){
        setSymbolInCell("", i)
    }
    winnerBox[0].style.display = "none";
    blurBox[0].style.display = "none";
    span[0].innerHTML="";
}