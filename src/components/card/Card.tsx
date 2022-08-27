import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { CgShapeRhombus } from "react-icons/cg";
import { Property } from "../../constants/property.types";
import "./Card.css";
import { Badge } from "../badge/Badge";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useFavourites } from "../../hooks/useFavourites";
const checkIfPropertyIsInFavousrites = ({ items, id }: { items: Array<Property>, id: string }) => {
    return items.some(item => item.id === id)
}

export const Card = ({ property }: { property: Property }) => {
    const { favouritesData, setFavouritesData } = useFavourites();
    const { id, address, image, description, dimensions, isPopular, name, rent, type } = property;

    const isPropertyAlreadyInFavourites = checkIfPropertyIsInFavousrites({ items: favouritesData.items, id: property.id });
    return (
        <div
            className={`card`}
            key={id}
        >
            <div className="card-image-wrapper pos-rel">
                <img
                    src={
                        image
                    }
                    className="card-image"
                    alt={`name`}

                />
                {isPopular && <Badge
                    property={property}
                />}
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
                        <div className="property-name ">
                            <span className="text-bold text-larger"> {`${name}`}</span>
                            <span className="text-dark-gray ml-sm">
                                {`${type}`}
                            </span>
                        </div>
                        <div className="property-address text-dark-gray">
                            {`${address}`}
                        </div>
                    </div>

                    {!isPropertyAlreadyInFavourites ? <div className="icon-favourites d-flex ai-center jc-center"
                        role={`button`}
                        onClick={() => {
                            setFavouritesData(prevState => ({ ...prevState, items: prevState.items.concat(property) }))
                        }}
                    >

                        <IoMdHeartEmpty
                            size={`1.5rem`}
                            color={`var(--es-primary)`}
                        />

                    </div> : <div className="icon-favourites d-flex ai-center jc-center"
                        role={`button`}
                        onClick={() => {
                            setFavouritesData(prevState => ({...prevState, 
                                items: prevState.items.filter(item => item.id !== id)}))
                        }}
                    >

                        <IoMdHeart
                            size={`1.5rem`}
                            color={`var( --es-exotic-red)`}

                        />

                    </div>}
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
