import Card from "./Card";
import { data } from "./data";
function MainContent() {
    return (
        <main>
            {
                data.map(element => <Card crtCountry={element.country.toUpperCase()} crtLocation={element.location} crtImgUrl={element.imgUrl} crtLink={element.link} crtStartDate={element.startDate} crtEndDate={element.endDate} crtDescription={element.description} />)
            }
        </main>
    )
}

export default MainContent;