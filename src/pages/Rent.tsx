import { Card } from "../components/card/Card";
import { Filters } from "../components/filters/Filters"
import { Container } from "../components/navbar/container/Container"
import { Searchbar } from "../components/navbar/searchbar/Searchbar"
import Properties from "../data/data.json";
export const Rent = () => {

    return <>
        <Container>
            <Searchbar />
            <Filters />

            {
                Properties.map(property => {
                    return <Card />
                })
            }
            {/* <PropertyListing /> */}
        </Container>
    </>
}