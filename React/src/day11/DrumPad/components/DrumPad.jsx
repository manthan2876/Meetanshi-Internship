import "../styles/DrumPad.css";
import padData from "../padData.js";
import { useState } from "react";
import DrumCard from "./DrumCard.jsx";

function DurmPad() {
    const [pads, setPads] = useState(padData);
    function toggle(id){
        setPads(prevPads => prevPads.map(item => item.id === id ? {...item, isOn: !item.isOn} : item));
    }
    return (
        <div className="drum-pad-bg">
            <div className="drum-pad-grid">
                {pads.map(pad => (
                    <DrumCard key={pad.id} pad ={pad} handleToggle={toggle}/>
                ))}
            </div>
        </div>
    );
}

export default DurmPad;