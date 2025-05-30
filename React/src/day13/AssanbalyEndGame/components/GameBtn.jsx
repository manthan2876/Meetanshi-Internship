import "../styles/GameBtn.css"
export default function GameBtn({getWord}) {
    return (
            <button className="btn" onClick={getWord}>New Game</button>
    )
}