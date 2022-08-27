import { Card } from "../card/Card";
import Properties from "../../data/data.json";
import { Property } from "../../constants/property.types";
import "./PropertyListing.css";
import { useProperty } from "../../hooks/useProperty";
export const PropertyListing = () => {
    const { propertyState } = useProperty();
    const filteredPropertiesAccordingToType = (Properties as Array<Property>).filter(property => {

        return propertyState.filterBy.selectedPropertyType ? property.type === propertyState.filterBy.selectedPropertyType : true
    });

    const filteredPropertiesAccordingToPrice = filteredPropertiesAccordingToType.filter(property => {
        const price = +property.rent.amount;
        const selectedPrice = propertyState.filterBy.selectedPriceRange;
        console.log(`selectedPrice `, selectedPrice)
        if (selectedPrice) {
            if (selectedPrice.includes(`>`)) {

                if (price >= +selectedPrice.slice(1)) {
                    return true;
                } return false;

            } else if (selectedPrice.includes(`<`)) {
                console.log(price)
                if (price < +selectedPrice.slice(1)) {
                    return true;
                } return false;

            } else {

                const [greaterThan, lessThan] = selectedPrice.split(`-`);

                if (price >= +greaterThan && price < +lessThan) {
                    return true;
                }
                return false;

            }
        }
        return true;

    })



    return <div className="m-0-auto">
        <div className="container-card"> {
            filteredPropertiesAccordingToPrice.length > 0 ? filteredPropertiesAccordingToPrice.map(property => {
                return <Card property={property} key={property.id} />
            }) : <>No results found..!</>
        }</div>
    </div>
}