import "../styles/Word.css";

export default function Word({ crtWord , latters}) {
    const words = crtWord.split("").map((word, i) => {
        return (
            <div key={i} className="word-container">
                <p className="word">{latters.includes(word) ? word.toUpperCase() : ""}</p>
            </div>
        )
    })

    return (
        <div className="words-container">
            {words}
        </div>
    )
}