import { useState } from "react";
import Game from "../gameTable/GameTable";
import { GameContainer } from "./styles";

const PlayerGame = () => {
    const [gameState, setGameState] = useState({
		turn: 'x',
        turnNum:1,
        table: [['','',''],
                ['','',''],
                ['','','']],
        x: 'P1',
        xWin: '0',
        o: 'P2',
        oWin: '0',
        ties: '0',
        winner:'',
        tie:false
	});

	return (
        <>
        <GameContainer>
            <Game gameState={gameState} setGameState={setGameState} handleClick={handleClick} restartGame={restartGame}></Game>
        </GameContainer>
        </>
	);
};

const handleClick = (param,gameState, setGameState) =>{
    let actualTurn = gameState.turn;
    let actualTurnNum = gameState.turnNum;
    let xWinCant = gameState.xWin;
    let oWinCant = gameState.oWin;
    let tied=false;
    let tiesCant=gameState.ties;
    const gameTable =gameState.table;
    const row =param.id.split("_")[0];
    const column =param.id.split("_")[1];
    let win= '';
    
    gameTable[row][column]=actualTurn;

    if (actualTurn==='x') {
        document.getElementById(param.id).style.backgroundImage= "url('./assets/icon-x.svg')";
        actualTurn='o';
    }else{
        document.getElementById(param.id).style.backgroundImage= "url('./assets/icon-o.svg')";
        actualTurn='x';
    }
    if (actualTurnNum>4 && actualTurnNum!==9) {
        if (checkWinner(gameTable,gameState.turn)) {
            win=gameState.turn;
            if (win==='x') {
                xWinCant++;
            }else{
                oWinCant++;
            }
        }
    }else if (actualTurnNum===9) {
        tied=true;
        tiesCant++;
    }
    actualTurnNum++;
    
    setGameState({ ...gameState, 
    
        turn: actualTurn,
        turnNum: actualTurnNum,
		table: gameTable,
        winner:win,
        xWin:xWinCant,
        oWin:oWinCant,
        tie:tied,
        ties:tiesCant
    });
}

const checkWinner = (gameTable,turn) =>{
    let cont=0;
    let winner=checkRows(gameTable,turn,cont);
    if (!winner) {
        cont=0;
        winner=checkColumn(gameTable,turn,cont);
    }
    if (!winner) {
        cont=0;
        winner=checkDiagonal(gameTable,turn,cont, [0,1,2],[0,1,2]);
    }
    if (!winner) {
        cont=0;
        winner=checkDiagonal(gameTable,turn,cont, [0,1,2],[2,1,0]);
    }
    return winner;
}
const checkRows = (gameTable,turn,cont) =>{
    for (let index = 0; index < 3; index++) {
        gameTable[index].forEach(element => {
            if (element===turn) {
                cont++;
            }
        });
        if (cont===3) {
            break;
        }else{
            cont=0;
        }
    }
    
    return cont===3;
}
const checkColumn = (gameTable,turn,cont) =>{
    for (let index = 0; index < 3; index++) { // column
        for (let index2 = 0; index2 < 3; index2++) {// row
            if (gameTable[index2][index]===turn) {
                cont++;
            }
        }
        if (cont===3) {
            break;
        }else{
            cont=0;
        }
    }
    
    return cont===3;
}
const checkDiagonal = (gameTable,turn,cont,rows,columns) =>{

    for (let index = 0; index < 3; index++) {
        if (gameTable[rows[index]][columns[index]]===turn) {
            cont++;
        }
    }
    
    return cont===3;
}
const restartGame = (gameState, setGameState) =>{
    const xWinCant = gameState.xWin;
    const oWinCant = gameState.oWin;
    const tiesCant=gameState.ties;
    const marks = document.getElementsByClassName("markContainer");
    for (let index = 0; index < marks.length; index++) {
        
        marks[index].style.backgroundImage= "url('')";
    }
    setGameState({ ...gameState, 
    
        turn: 'x',
        turnNum:1,
        table: [['','',''],
                ['','',''],
                ['','','']],
        x: 'P1',
        xWin: xWinCant,
        o: 'P2',
        oWin: oWinCant,
        ties: tiesCant,
        winner:'',
        tie:false
    });
}

export default PlayerGame;