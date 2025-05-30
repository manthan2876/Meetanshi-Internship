import "../styles/FareWellBox.css"

export default function FareWellBox({farewellStr}) {
    return(
        <div className="farewell-container">
            <p className="farewell-text-sub">{farewellStr}</p>
        </div>
    )
}