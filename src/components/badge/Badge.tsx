import "./Badge.css";
import { BsStars } from "react-icons/bs";

import { Property } from "../../constants/property.types";
export const Badge = ({ property }: { property: Property }) => {
   
    return <div className="ribbon-pop d-flex gap-10"
       
    >
        <span>
            <BsStars
                size={`1.2rem`}
            />
        </span>
        <span className="text-upper text-large">
            Popular
        </span>
    </div>
}