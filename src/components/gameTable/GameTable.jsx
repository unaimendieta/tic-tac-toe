import { ButtonContainer, GameTable, GameTableContainer, MarkContainer, RestartButton, Score, ScoreBoard, ScoreTitle, ScoreValue, TableHeader, TakeRoundContainer, TakeRoundText, TieText, TurnMark, TurnSpecifierContainer, TurnText, Winner, WinnerButton, WinnerContainer, WinnerContainerSection } from "./styles";

const Game = ({gameState,setGameState,handleClick,restartGame}) => {
    const { turn, table, x, xWin, o, oWin, ties,winner,tie } = gameState;
	return (
        <>
            <WinnerContainerSection displayed={winner||tie} >
                <WinnerContainer>
                    <Winner displayed={tie}>{winner ==='x'? x : o} WINS!</Winner>
                    <TakeRoundContainer  displayed={tie}>
                            <img src={winner ==='x'? "./assets/icon-x.svg" : "./assets/icon-o.svg"} alt="" />
                            <TakeRoundText color={winner ==='x'?  "#31C3BD" : "#F2B137"}>TAKES THE ROUND</TakeRoundText>
                    </TakeRoundContainer> 
                    <TieText displayed={tie}>ROUND TIED</TieText>
                    
                    <ButtonContainer>
                        <WinnerButton to="/">QUIT</WinnerButton>
                        <WinnerButton onClick={()=>restartGame(gameState,setGameState)}>NEXT ROUND</WinnerButton>
                    </ButtonContainer>
                </WinnerContainer>
            </WinnerContainerSection>
            <GameTableContainer>
                <TableHeader>
                    <div className="logoContainer">
                        <img src="./assets/logo.svg" alt=""/>
                    </div>
                    <TurnSpecifierContainer>
                        <TurnMark src={turn ==='x'? "./assets/icon-x.svg" : "./assets/icon-o.svg"} alt="">
                        </TurnMark>
                        <TurnText>TURN</TurnText>
                    </TurnSpecifierContainer>
                    <RestartButton onClick={()=>restartGame(gameState,setGameState)}>
                        <img src="./assets/icon-restart.svg" alt=""/>
                    </RestartButton>
                </TableHeader>
                <GameTable>
                    <MarkContainer id="0_0" className="markContainer" disabled={table[0][0] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="0_1" className="markContainer" disabled={table[0][1] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="0_2" className="markContainer" disabled={table[0][2] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="1_0" className="markContainer" disabled={table[1][0] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="1_1" className="markContainer" disabled={table[1][1] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="1_2" className="markContainer" disabled={table[1][2] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="2_0" className="markContainer" disabled={table[2][0] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="2_1" className="markContainer" disabled={table[2][1] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                    <MarkContainer id="2_2" className="markContainer" disabled={table[2][2] !==''} onClick={e=>handleClick(e.target, gameState,setGameState)} OutlineMark={turn ==='x'? "./assets/icon-x-outline.svg" : "./assets/icon-o-outline.svg"}></MarkContainer>
                </GameTable>
                <ScoreBoard>
                    <Score>
                        <ScoreTitle>X ({x})</ScoreTitle>
                        <ScoreValue>{xWin}</ScoreValue>
                    </Score>
                    <Score>
                        <ScoreTitle>TIES</ScoreTitle>
                        <ScoreValue>{ties}</ScoreValue>
                    </Score>
                    <Score>
                        <ScoreTitle>O ({o})</ScoreTitle>
                        <ScoreValue>{oWin}</ScoreValue>
                    </Score>
                </ScoreBoard>
            </GameTableContainer>
        </>
	);
};



export default Game;