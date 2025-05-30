import "../styles/KeyBoard.css";
import {clsx} from "clsx";

export default function KeyBoard({handleKeys, latters, crtWord, isWin, wrongCount}) {
    const keysData = "abcdefghijklmnopqrstuvwxyz";
    
    const keys = keysData.split("").map(key => {
        const isGuessed = latters.includes(key);
        const isCorrect = isGuessed && crtWord.includes(key);
        const isWrong = isGuessed && !crtWord.includes(key);
        const classes = clsx({
            correct: isCorrect,
            wrong: isWrong,
        })
        return (
            <button key={key} className={`key-container ${classes}`} onClick={() => handleKeys(key)} disabled={wrongCount===8 || isWin}>
                {key.toUpperCase()}
            </button>
        )
    })
    return (
        <div className="keys-container">
            {keys}
        </div>
    )
}