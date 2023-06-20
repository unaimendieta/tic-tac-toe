import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import CpuGame from "../components/cpuGame/CpuGame";
import PlayerGame from "../components/playerGame/PlayerGame";
const Router = () => {
	return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cpu" element={<CpuGame />} />
            <Route path="/players" element={<PlayerGame />} />
        </Routes>
	);
};

export default Router;
