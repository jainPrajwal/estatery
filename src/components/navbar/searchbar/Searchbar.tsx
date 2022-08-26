import { IoChevronDown } from "react-icons/io5"
import { default as searchBarStyles } from "./Searchbar.module.css";
export const Searchbar = () => {
    const {searchBox} = searchBarStyles;
    return <>
        <div className={`d-flex jc-space-between ai-center`}>
            <div className="header-primary">Search properties to rent </div>
            <div className={`d-flex ai-center ${searchBox}`}>
                <p>Search with search bar</p>
                <div className="img-icon-wrapper ml-auto d-flex ai-center jc-center">
                <span role={`img`} className={`img-icon-wrapper ml-auto d-flex ai-center jc-center`}
                   
                >
                    <IoChevronDown
                        width={`24px`} height={`24px`}
                    />
                </span>
                </div>
            </div>
        </div>
    </>
}