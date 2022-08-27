import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { CgShapeRhombus } from "react-icons/cg";
import { Property } from "../../constants/property.types";
import "./Card.css";
import { Badge } from "../badge/Badge";
import { IoMdHeartEmpty } from "react-icons/io";
export const Card = ({ property }: { property: Property }) => {
    const { address, image, description, dimensions, isPopular, name, rent } = property;
    return (
        <div
            className={`card`}
        >
            <div className="card-image-wrapper pos-rel">
                <img
                    src={
                        image
                    }
                    className="card-image"
                    alt={`name`}

                />
                {isPopular && <Badge />}
            </div>
            <div className="card-content">
               <div className="pos-rel">
               <div className="card-title header header-tertiary d-flex ai-center">
                    <span className="text-primary text-bold text-larger">
                        <span>{`$${rent.amount}`}</span>

                    </span>
                    <span className="text-dark-gray text-small" style={{ marginLeft: `2px` }}>/month</span>


                </div>

                <div className="py-sm property-details">
                    <div className="property-name text-bold text-larger">
                        {`${name}`}
                    </div>
                    <div className="property-address text-dark-gray">
                        {`${address}`}
                    </div>
                </div>

                <div className="icon-favourites d-flex ai-center jc-center">
                   
                        <IoMdHeartEmpty
                        size={`1.5rem`}
                        color={`var(--es-primary)`}
                        />
                   
                </div>
               </div>
                <div className="property-dimenstions text-dark-gray d-flex ai-center p-sm jc-space-around">

                    <div className="d-flex ai-center">
                        <span className="text-primary d-flex ai-center ">                <MdOutlineBed
                            size={`2rem`}

                        />
                        </span>
                        <span className="h-100 ml-sm">{`${description.beds} beds`}</span>
                    </div>

                    <div className="d-flex ai-center">
                        <span className="text-primary d-flex ai-center">                <TbBath
                            size={`1.8rem`}

                        />
                        </span>
                        <span className="h-100 ml-sm">{`${description.bathrooms} bathrooms`}</span>
                    </div>
                    <div className="d-flex ai-center">
                        <span className="text-primary d-flex ai-center">                <CgShapeRhombus
                            size={`1.8rem`}

                        />
                        </span>
                        <span className="h-100 ml-sm">
                            {`${dimensions.length}`} x {`${dimensions.breadth}`} m<sup>2</sup>
                        </span>
                    </div>


                </div>
            </div>


        </div>
    );
};
