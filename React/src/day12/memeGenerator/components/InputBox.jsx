import "../styles/InputBox.css"

export default function InputBox({topText, bottomText, onInputChange, handleImage}) {
    return (
        <>
            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="topText">Top Text</label>
                    <input
                        type="text"
                        id="topText"
                        name="topText"
                        value={topText}
                        placeholder="One does not simply"
                        onChange={onInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="bottomText">Bottom Text</label>
                    <input
                        type="text"
                        id="bottomText"
                        name="bottomText"
                        value={bottomText}
                        placeholder="Walk into Mordor"
                        onChange={onInputChange}
                    />
                </div>
            </div>
            <button className="meme-btn" onClick={handleImage}>
                Get a new meme image <span role="img" aria-label="image">🖼️</span>
            </button>
        </>
    )
}
