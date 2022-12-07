import {Box, Container, List, ListItem} from '@mui/material'
import {  useQuery } from '@apollo/client'
import Title from "../../Atoms/Title";
import {useContext} from "react";
import {FavoritesContext} from "../../../Provider/FavoritesProvider";
import StarRating from "../../Atoms/Star";
import {isExistOnFavorites} from "../../../utils";
import {CONTINENTS} from "../../../utils/queries";
import TextSecondary from "../../Atoms/TextSecondary";


const ContinentTemplate = () => {
    const {favorites} = useContext(FavoritesContext);
    const { loading, error, data } = useQuery(CONTINENTS)
    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const {continents = []} = data
    return (
        <Container>
            <Title title={"Continents"}/>
            <TextSecondary title={`${continents.length} Continents`}/>
            <TextSecondary title={`${favorites.continents.length} Favorites`}/>
            <List>
                {continents.map(continent => (
                       <ListItem key={continent.code}>
                           <StarRating active={isExistOnFavorites(favorites.continents, continent)} item={continent} keyItem={"continents"} />
                            <Box>{continent.code} - {continent.name}</Box>
                       </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default ContinentTemplate
