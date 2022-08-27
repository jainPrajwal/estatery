import { Card } from "../components/card/Card";
import { useFavourites } from "../hooks/useFavourites"

const Favourites = () => {
    const { favouritesData } = useFavourites();
    return <div className="m-0-auto">
        <div className="container-card"> {
            favouritesData.items.map(property => {
                return <Card property={property} key={property.id} />
            })
        }</div>
    </div>
}

export { Favourites }