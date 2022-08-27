import { Card } from "../card/Card";
import Properties from "../../data/data.json";
import { Property } from "../../constants/property.types";
import "./PropertyListing.css";
import { useProperty } from "../../hooks/useProperty";
export const PropertyListing = () => {
    const { propertyState } = useProperty();
    const filteredProperties = (Properties as Array<Property>).filter(property => {
        if (propertyState.filterBy.selectedPropertyType) {

            if (property.type === propertyState.filterBy.selectedPropertyType) {
                return true;
            } else {
                return false;
            }
        } else {

            return true;
        }
    })



    return <div className="m-0-auto">
        <div className="container-card"> {
            filteredProperties.map(property => {
                return <Card property={property} key={property.id} />
            })
        }</div>
    </div>
}