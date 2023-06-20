import { NavLink } from "react-router-dom";
import styled from "styled-components";

const WinnerContainerSection = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    display: ${props=>(props.displayed ? 'flex':'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgb(0 0 0 / 50%);
`;
const WinnerContainer = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 266px;
    background: #1F3641;
    padding: 45px 0;
`;
const Winner = styled.p`
color: #A8BFC9;
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    font-size: ${props=>(props.displayed ? '0px':'16px')};
`;
const TakeRoundContainer = styled.div`
    display: ${props=>(props.displayed ? 'none':'flex')};

    flex-direction: row;
    align-items: center;
    gap: 24px;
`;
const TakeRoundText = styled.h2`

    font-family: inherit;
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;

    // color: #31C3BD;
    color: ${props=>(props.color )};
`;
const TieText = styled.h2`
    font-size: ${props=>(props.displayed ? '40px':'0px')};

    font-family: inherit;
    font-weight: 700;
    //font-size: 40px;
    text-transform: uppercase;

    // color: #31C3BD;
    color: #A8BFC9;
`;
const ButtonContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;
const WinnerButton = styled(NavLink)`
    text-decoration: none;
    padding: 16px;
    font-family: inherit;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #1A2A33;
    border-radius: 10px;
    cursor: pointer;
    :first-child{
        background: #A8BFC9;
        box-shadow: inset 0px -4px 0px #6B8997;
    }
    :last-child{
        background: #F2B137;
        box-shadow: inset 0px -4px 0px #CC8B13; 
    }
`;


// ---------Game----------

const GameTableContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 19px;

`;
const TableHeader = styled.div`
    width: 457px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TurnSpecifierContainer = styled.div`
    width: 140px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    background: #1F3641;
    box-shadow: inset 0px -4px 0px #10212A;
    border-radius: 10px;
`;
const TurnMark = styled.img`
    width: 20px;
    height: 20px;
`;
const TurnText = styled.p`
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    color: #A8BFC9;
`;
const RestartButton = styled.div`
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #A8BFC9;
    box-shadow: inset 0px -4px 0px #6B8997;
    border-radius: 10px;
`;
const GameTable = styled.div`
    width: 460px;
    height: 461px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 20px;
`;
const MarkContainer = styled.button`  
    border  : none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1F3641;
    box-shadow: inset 0px -8px 0px #10212A;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-position: center;
    :hover{
        background-image: url(${props=>(props.OutlineMark )});
    }
`;

const ScoreBoard = styled.div`  
    width: 460px; 
    height: 72px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`;
const Score = styled.div` 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #A8BFC9;
    border-radius: 15px;
    :first-child{
        background: #31C3BD;
    }
    :last-child{
        background: #F2B137;
    }
`;
const ScoreTitle = styled.p` 
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    color: #1A2A33;
`;
const ScoreValue = styled.p` 
    font-family: inherit;
    font-weight: 700;
    font-size: 24px;
    color: #1A2A33;
`;


export {GameTableContainer,TableHeader,TurnSpecifierContainer,TurnMark,TurnText,RestartButton,GameTable,MarkContainer,ScoreBoard,Score,ScoreTitle,ScoreValue, WinnerContainerSection,WinnerContainer,TakeRoundContainer,TakeRoundText,Winner,ButtonContainer,WinnerButton,TieText};