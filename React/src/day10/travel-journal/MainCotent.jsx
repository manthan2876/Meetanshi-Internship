import Card from "./Card";
import { data } from "./data";
function MainContent() {
    return (
        <main>
            {
                data.map(element => <Card key={element.id} {...element}/>)
            }
        </main>
    )
}

export default MainContent;