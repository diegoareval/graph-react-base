import {Box, Container, List, ListItem} from '@mui/material'
import { gql, useQuery } from '@apollo/client'
import Title from "../../Atoms/Title";
import {useContext} from "react";
import {FavoritesContext} from "../../../Provider/FavoritesProvider";
import StarRating from "../../Atoms/Star";
import {isExistOnFavorites} from "../../../utils";

const CONTINENTS = gql`
    query Continents {
        continents {
            name
            code
        }
    }
`
const ContinentTemplate = () => {
    const {favorites} = useContext(FavoritesContext);
    const { loading, error, data } = useQuery(CONTINENTS)
    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const continents = data.continents


    return (
        <Container>
            <Title title={"Continents"}/>
            <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                {continents.length} Countries
            </Box>
            <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                {favorites.continents.length} Favorites
            </Box>
            <List>
                {continents.map(continent => (
                   <>
                       <ListItem key={continent.code}>
                           <StarRating active={isExistOnFavorites(favorites.continents, continent)} item={continent} keyItem={"continents"} />  <Box>{continent.code} - {continent.name}</Box>
                       </ListItem>
                   </>
                ))}
            </List>
        </Container>
    )
}

export default ContinentTemplate
