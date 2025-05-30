import "../styles/Chips.css";
import languageData from "../languages.js";


export default function Chips({count}) {
    const languageChips = languageData.map((language, index) => {
        return (
            <div key={language.name} className="chip-container" style={{ backgroundColor: language.backgroundColor, color: language.color }}>
                <p className={`language-text ${index<count? "lost" : ""}`}>{language.name}</p>
            </div>
        )
    })
    return (
        <div className="chips-conatiner">
            {languageChips}
        </div>
    )
}