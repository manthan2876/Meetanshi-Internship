import { FaLocationDot } from "react-icons/fa6";

function Card({ country, location, imgUrl, link, startDate, endDate, description }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imgUrl} alt={location} />
      </div>
      <div className="text-container">
        <div className="heading">
          <span><FaLocationDot className="location-icon" />{country}</span>
          <a href={link} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <h1>{location}</h1>
        <p className="date-text">{startDate} - {endDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;