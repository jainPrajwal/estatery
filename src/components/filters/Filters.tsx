import { default as filterStyles } from "./Filters.module.css";
import { IoMdCalendar } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5"
export const Filters = () => {
    const { filters, filter, btnSearch } = filterStyles;
    return <div className={`${filters} d-flex ai-center f-wrap pos-rel`}>
        <div className={`${filter} d-flex jc-center f-direction-col px-md`}>
            <div className="text-gray">Location</div>
            <div className="text-bold text-larger">New York, USA</div>
        </div>
        <div className={`${filter} d-flex jc-center f-direction-col px-md`}>
            <div className="text-gray">When</div>

            <div className="text-bold text-larger d-flex ai-center">
                <label htmlFor="move-in-date">
                    Select Move-in Date
                </label>
                <span role={`img`} className={`img-icon-wrapper ml-auto`} style={{ width: `32px`, height: `32px` }}>
                    <IoMdCalendar />
                </span>
            </div>
        </div>
        <div className={`${filter} d-flex jc-center f-direction-col px-md`}>
            <div className="text-gray">Price</div>
            <div className="text-bold text-larger d-flex ai-center">
                <label htmlFor="move-in-date">
                    $500 - $2,500
                </label>
                <span role={`img`} className={`img-icon-wrapper ml-auto d-flex ai-center jc-center`}
                    style={{ width: `28px`, height: `28px` }}
                >
                    <IoChevronDown
                        
                    />
                </span>
            </div>
        </div>
        <div className={`${filter} d-flex jc-center f-direction-col px-md`}>
            <div className="text-gray">Property Type</div>
            <div className="text-bold text-larger d-flex ai-center">
                <label htmlFor="move-in-date">
                    Houses
                </label>
                <span role={`img`} className={`img-icon-wrapper ml-auto d-flex ai-center jc-center`}
                    style={{ width: `28px`, height: `28px` }}
                >
                    <IoChevronDown
                        
                    />
                </span>
            </div>
        </div>
        <div className={`${filter} d-flex jc-center f-direction-col px-md`}>
            <button className={`btn btn-primary ${btnSearch} text-large`} >Search</button>
        </div>

    </div>
}