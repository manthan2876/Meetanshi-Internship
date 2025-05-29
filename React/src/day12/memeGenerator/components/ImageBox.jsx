import "../styles/ImageBox.css";

export default function ImageBox({imgUrl, topText, bottomText}) {
    return (
        <div className="meme-image-box">
            <img src={imgUrl} alt="Meme" className="meme-img" />
            <h2 className="meme-text top">{topText}</h2>
            <h2 className="meme-text bottom">{bottomText}</h2>
        </div>
    )
}