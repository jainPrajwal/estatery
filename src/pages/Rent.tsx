import { Filters } from "../components/filters/Filters"
import { Container } from "../components/navbar/container/Container"
import { Searchbar } from "../components/navbar/searchbar/Searchbar"

export const Rent = () => {
    
    return <>
        <Container>
            <Searchbar />
            <Filters />
            {/* <PropertyListing /> */}
        </Container>
    </>
}