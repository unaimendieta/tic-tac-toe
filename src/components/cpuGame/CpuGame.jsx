import { useState } from "react";
import Game from "../gameTable/GameTable";
import { GameContainer } from "../playerGame/styles";

const CpuGame = () => {
    const [gameState, setGameState] = useState({
		turn: 'x',
        turnNum:1,
        table: [['','',''],
                ['','',''],
                ['','','']],
        x: 'P1',
        xWin: '0',
        o: 'CPU',
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

    const cpuTimer = setTimeout(() =>playCpu(cpuTimer,gameState, setGameState), 1000);

   
}

const playCpu = (cpuTimer,gameState, setGameState) =>{
    clearTimeout(cpuTimer);

    let actualTurn = gameState.turn;
    let actualTurnNum = gameState.turnNum;
    let xWinCant = gameState.xWin;
    let oWinCant = gameState.oWin;
    let tied=false;
    let tiesCant=gameState.ties;
    const gameTable =gameState.table;
    let win= '';
    let playerMark;
    let cpuMark;



    if(gameState.x==='P1'){
        playerMark='x';
        cpuMark='o';
    }else{
        playerMark='o'
        cpuMark='x'
    }
    const pos = getBetterOption(cpuMark,playerMark, gameTable);
    gameTable[pos[0]][pos[1]]=cpuMark;

    if (cpuMark==='x') {
        document.getElementById(pos[0]+"_"+pos[1]).style.backgroundImage= "url('./assets/icon-x.svg')";
        actualTurn='o';
    }else{
        document.getElementById(pos[0]+"_"+pos[1]).style.backgroundImage= "url('./assets/icon-o.svg')";
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


const getBetterOption = (cpuMark,playerMark, gameTable) =>{
    let pos = [];
    let points= [[0,0,0],
                 [0,0,0],
                 [0,0,0]];
    let playerPoints= [[0,0,0],
                       [0,0,0],
                       [0,0,0]];

   
    points = checkBetterOption(cpuMark,playerMark,points,gameTable);
    playerPoints = checkBetterOption(playerMark,cpuMark,playerPoints,gameTable);
    console.log(points);
    console.log(playerPoints);

    

    let bigger=0;
    
    for (let index = 0; index < 3; index++) {
        for (let index2 = 0; index2 < 3; index2++) {
            points[index][index2]+= playerPoints[index][index2];
        }
}
    
    for (let index = 0; index < 3; index++) {
        for (let index2 = 0; index2 < 3; index2++) {
            if(points[index][index2]===bigger){
                pos.push([index,index2])
            }else if (points[index][index2]>bigger) {
                bigger=points[index][index2];
                pos = []
                pos.push([index,index2])
            }
        }
    }
    
    bigger=0;
    let posPlayer = [];
    for (let index = 0; index < 3; index++) {
        for (let index2 = 0; index2 < 3; index2++) {
            if(playerPoints[index][index2]===bigger){
                posPlayer.push([index,index2])
            }else if (playerPoints[index][index2]>bigger) {
                bigger=playerPoints[index][index2];
                posPlayer = []
                posPlayer.push([index,index2])
            }
        }
    }
    console.log(points);
    console.log(playerPoints);
    console.log(pos);
    console.log(posPlayer);
     
    // let tmpGameTable=[...gameTable];
    // console.log(tmpGameTable);
    // let winnerPos=[];
    // for (let index = 0; index < pos.length; index++) {
    //     tmpGameTable=[...gameTable];
    //     tmpGameTable[pos[index][0]][pos[index][1]]=cpuMark;
    //     if (checkWinner(tmpGameTable,cpuMark)) {
    //         winnerPos=[pos[index][0],pos[index][1]];
    //         break;
    //     }
    // }
    // console.log(winnerPos);
    return pos[Math.floor(Math.random() * pos.length)]; 
    
}

const checkBetterOption = (principalMark,secondaryMark,points,gameTable) => {
        // count empty
        for (let index = 0; index < 3; index++) { 
            for (let index2 = 0; index2 < 3; index2++) {
                if (gameTable[index][index2]==='') {
                    points[index][index2]++;
                }
            }
        }
        // check rows
        let cont = 0;
        for (let index = 0; index < 3; index++) {
            for (let index2 = 0; index2 < 3; index2++) {// row
                if (gameTable[index][index2]===principalMark) {
                    cont++;
                }else if(gameTable[index][index2]===secondaryMark){
                    cont=0;
                    break;
                }
            }
            if (cont===2) {
                cont++;
            }
            for (let index2 = 0; index2 < 3; index2++) {
                if (gameTable[index][index2]==='') {
                    points[index][index2]+=cont;
                } 
            }
            cont=0;
        }
        // check columns
        cont = 0;
        for (let index = 0; index < 3; index++) { // column
            for (let index2 = 0; index2 < 3; index2++) {// row
                if (gameTable[index2][index]===principalMark) {
                    cont++;
                }else if(gameTable[index2][index]===secondaryMark){
                    cont=0;
                    break;
                }
            }
            if (cont===2) {
                cont++;
            }
            for (let index2 = 0; index2 < 3; index2++) {
                if (gameTable[index2][index]==='') {
                    points[index2][index]+=cont;
                } 
            }
            cont=0;
        }
    
        
        // check diagonal
        cont=0;
        let row = [0,1,2];
        let column = [0,1,2];
        for (let index = 0; index < 3; index++) {
            if (gameTable[row[index]][column[index]]===principalMark) {
                cont++;
            }else if(gameTable[row[index]][column[index]]===secondaryMark){
                cont=0;
                break;
            }
        }
        if (cont===2) {
            cont++;
        }
        for (let index = 0; index < 3; index++) {
            if (gameTable[row[index]][column[index]]==='') {
                points[row[index]][column[index]]+=cont;
            }
        }
        // check diagonal
        cont=0;
        row = [0,1,2];
        column = [2,1,0];
        for (let index = 0; index < 3; index++) {
            if (gameTable[row[index]][column[index]]===principalMark) {
                cont++;
            }else if(gameTable[row[index]][column[index]]===secondaryMark){
                cont=0;
                break;
            }
        }
        if (cont===2) {
            cont++;
        }
        for (let index = 0; index < 3; index++) {
            if (gameTable[row[index]][column[index]]==='') {
                points[row[index]][column[index]]+=cont;
            }
        }
        return points;
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
export default CpuGame;