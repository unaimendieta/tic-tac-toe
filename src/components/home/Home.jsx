import { useState } from "react";
import { ButtonText, GameSelecter, Mark, MarkCaption, MarkImage, MarkPicker, MarkPickerContainer, MarkPickerTitle, NewGameContainer, SelectButton } from "./styles";

const Home = () => {
    const [markPicker, setMarkPicker] = useState({
		p1: 'x',
        p2: 'o'
	});
	return (
	<>
		<NewGameContainer>
            <div className="logoContainer">
                <img src="./assets/logo.svg" alt=""/>
            </div>
            <MarkPickerContainer>
                <MarkPickerTitle>PICK PLAYER 1’S MARK</MarkPickerTitle>
                <MarkPicker>
                    <Mark id="x" className={markPicker.p1==='x'&& "selected"} onClick={e => handleClick(e, markPicker,setMarkPicker)}>
                        <MarkImage id="x_img" src="./assets/icon-o.svg" alt="" />
                    </Mark>
                    <Mark id="o" className={markPicker.p1==='o'&& "selected"} onClick={e => handleClick(e, markPicker,setMarkPicker)}>
                        <MarkImage id="o_img" className="selected" src="./assets/icon-x.svg" alt="" />
                    </Mark>
                </MarkPicker>
                <MarkCaption>REMEMBER : X GOES FIRST</MarkCaption>
            </MarkPickerContainer>
            <GameSelecter>
                <SelectButton to="/cpu">
                    <ButtonText >NEW GAME (VS CPU)</ButtonText>
                    </SelectButton>
                <SelectButton to="/players" >
                    <ButtonText>NEW GAME (VS PLAYER)</ButtonText>
                </SelectButton>
            </GameSelecter>
        </NewGameContainer>
	</>
	);
};

const handleClick = (param,markPicker, setMarkPicker) =>{
    let id =param.target.id;
    if (id==="x_img" || id==="o_img") {
       id=id.split("_")[0];
    }
    const newP1 = id;
    let newP2="";
    if (id==="x") {
        newP2='o';
    }else{
        newP2='x';
    }
    
    setMarkPicker({ ...markPicker, 
    
        p1: newP1,
        p2: newP2
    });
}
export default Home;