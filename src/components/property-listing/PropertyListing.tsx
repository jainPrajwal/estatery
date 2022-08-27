import { Card } from "../card/Card";
import Properties from "../../data/data.json";
import { Property } from "../../constants/property.types";
import "./PropertyListing.css";
export const PropertyListing = () => {
    return <div className="m-0-auto">
        <div className="container-card"> {
            (Properties as Array<Property>).map(property => {
                return <Card property={property} />
            })
        }</div>
    </div>
}