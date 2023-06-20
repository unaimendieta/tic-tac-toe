import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NewGameContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 40px;

`;
const MarkPickerContainer = styled.div`
    position: relative;
    display: flex;
    width: 490px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #1F3641;
    border-radius: 15px;
    box-shadow: 0px -8px 0px 0px #10212A inset;

`;
const MarkPickerTitle = styled.h2`
    font-family: inherit;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #A8BFC9;
    margin-bottom: 24px;
`;
const MarkPicker = styled.div`
    width: 412px;
    height: 72px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 8px 9px;
    background: #1A2A33;
    border-radius: 10px;
    margin-bottom: 17px;
`;
const Mark = styled.div`
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &.selected{
        background: #A8BFC9;
    }
`;
const MarkImage = styled.img`
    fill:  #A8A8A8;
    height: 32px;
    width: 32px;
    &.selected{
        fill:  #1A2A33;
    }
`;
const MarkCaption = styled.p`
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;

    text-align: center;
    color: #A8BFC9;

    mix-blend-mode: normal;
    opacity: 0.5;
`;
const GameSelecter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const SelectButton = styled(NavLink)`
    height: 67px;
    width: 490px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    text-decoration: none;
    :first-child{
    background: #F2B137;
    box-shadow: inset 0px -8px 0px #CC8B13;

    }
    :last-child{
        background: #31C3BD;
        box-shadow: inset 0px -8px 0px #118C87;
    }
`;
const ButtonText = styled.p`
    font-family: inherit;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #1A2A33;
`;


export {NewGameContainer,MarkPickerContainer,MarkPickerTitle,MarkPicker,Mark,MarkImage,MarkCaption,GameSelecter,SelectButton,ButtonText};