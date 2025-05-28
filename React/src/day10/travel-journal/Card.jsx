// import { data } from "./data";
import { FaLocationDot } from "react-icons/fa6";

function Card({ crtCountry, crtLocation, crtImgUrl, crtLink, crtStartDate, crtEndDate, crtDescription}) {
    return (
        <>
            <div className="cardContainer">
                <div className="imageContainer">
                    <img src={crtImgUrl} alt={crtLocation} className="img"/>
                </div>
                <div className="textContainer">
                    <div className="heading">
                        <p><FaLocationDot className="locationIcon"/>{crtCountry}</p>
                        <a href={crtLink}>View on google Map</a>
                    </div>
                    <h1>{crtLocation}</h1>
                    <p className="dateText">{crtStartDate} - {crtEndDate}</p>
                    <p>{crtDescription}</p>
                </div>
            </div>
        </>
    )
}

export default Card;