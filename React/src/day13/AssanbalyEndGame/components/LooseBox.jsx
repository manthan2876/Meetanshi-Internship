import "../styles/LooseBox.css"

export default function LooseBox({crtWord}) {
    return(
        <div className="loose-container">
            <p className="loose-text-main">Game over !</p>
            <p className="loose-text-sub">You loose! batter start learning Assambaly!<br></br> Actual word: {crtWord}</p>
        </div>
    )
}