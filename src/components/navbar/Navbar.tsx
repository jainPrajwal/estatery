import {  NavLink } from "react-router-dom";
import { default as NavbarStyles } from "./Navbar.module.css";

export const Navbar = () => {
    const { navbar, wrapperLogo, wrapperNav, listItem, nav, navList, navListWrapper } = NavbarStyles;
    return <nav className={`${nav}`}>
        <div className={`d-flex ai-center ${navbar}`}>
            <div className={`d-flex  ai-center  ${wrapperNav}`}>
                <div className="d-flex ai-center">
                    <div className={`${wrapperLogo}`}>
                        <img src="https://res.cloudinary.com/dmk11fqw8/image/upload/v1661335403/real-estate_ewpkh9.png" alt="Estatery" />

                    </div>
                    <div className="ml-sm">
                        <h1>Estatery</h1>
                    </div>
                </div>

                <div className={`${navListWrapper}`}>
                    <ul className={`d-flex ${navList}`}>
                        <li className={` px-md py-sm ${listItem}`}>

                            <NavLink

                                to={`/rent`}
                                className={({ isActive }) => {
                                    return `link px-md py-sm ${isActive ? `link-active` : ``} `
                                }}>Rent</NavLink>
                        </li>
                        <li className={` px-md py-sm ${listItem}`}>

                            <NavLink

                                to={`/buy`}
                                className={({ isActive }) => {
                                    return `link px-md py-sm ${isActive ? `link-active` : ``} `
                                }}>Buy</NavLink>

                        </li>
                        <li className={` px-md py-sm ${listItem}`}>

                            <NavLink

                                to={`/sell`}
                                className={({ isActive }) => {
                                    return `link px-md py-sm ${isActive ? `link-active` : ``} `
                                }}>Sell</NavLink>

                        </li>

                        <li className={` px-md py-sm ${listItem}`}>
                            <NavLink

                                to={`/favourites`}
                                className={({ isActive }) => {
                                    return `link px-md py-sm ${isActive ? `link-active` : ``} `
                                }}>Favourites</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="ml-auto d-flex gap-10">
                <button className="btn btn-secondary">Login</button>
                <button className="btn btn-primary">Sign up</button>
            </div>

        </div>
    </nav>
}