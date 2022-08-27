import { default as filterStyles } from "./Filters.module.css";
import { IoMdCalendar } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5"
import { useProperty } from "../../hooks/useProperty";
import { FILTER_BY_PROPERTY_TYPE } from "../../constants/action.types";
import { useState } from "react";
export const Filters = () => {
    const { propertyDispatch } = useProperty();
    const [localFilters, setLocalFilters] = useState<{
        filterBy: {
            selectedLocation: string | null,
            selectedDate: string | null,
            selectedPropertyType: string | null,
            selectedPriceRange: string | null,

        },
    }>({
        filterBy: {
            selectedLocation: null,
            selectedDate: null,
            selectedPropertyType: null,
            selectedPriceRange: null,

        },
    })


    const { filters, filter, btnSearch, dropdown, dropdownWrapper, dropdownOption, dropdownArrow } = filterStyles;
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
        <div className={`${filter} d-flex jc-center f-direction-col px-md pos-rel`}>
            <div className="text-gray" style={{ paddingLeft: `0.5rem` }}>Property Type</div>
            <div className={`text-bold text-larger d-flex ai-center  ${dropdownWrapper}`}>

                <select name="types" id="types"
                    className={`${dropdown}`}
                    onChange={(e) => {
                        setLocalFilters(prevState => {
                            return {
                                ...prevState,
                                filterBy: {
                                    ...prevState.filterBy,
                                    selectedPropertyType: e.target.value
                                }
                            }
                        })
                    }}

                >
                    <option value={`null`}
                        className={`${dropdownOption}`}
                    >Please select an option</option>
                    <option
                        className={`${dropdownOption}`}
                        value="houses">Houses</option>
                    <option
                        className={`${dropdownOption}`}
                        value="condos">Condos</option>
                    <option
                        className={`${dropdownOption}`}
                        value="townhomes">Townhomes</option>

                </select>

            </div>
            <span role={`img`} className={`img-icon-wrapper ml-auto d-flex ai-center jc-center ${dropdownArrow}`}
                style={{ width: `28px`, height: `28px` }}
            >
                <IoChevronDown

                />
            </span>
        </div>
        <div className={`${filter} d-flex jc-center f-direction-col px-md`}>
            <button className={`btn btn-primary ${btnSearch} text-large`}
                onClick={() => {
                    if (localFilters.filterBy.selectedPropertyType) {

                        propertyDispatch({
                            type: FILTER_BY_PROPERTY_TYPE,
                            payload: {
                                propertyType: localFilters.filterBy.selectedPropertyType === `null` ? null : localFilters.filterBy.selectedPropertyType
                            }
                        })

                    }
                }}

            >Search</button>
        </div>

    </div>
}