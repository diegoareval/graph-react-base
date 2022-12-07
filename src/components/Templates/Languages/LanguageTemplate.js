import {useContext} from "react"
import {
    Box,
    Container,
    Typography,
    List,
    ListItem
} from '@mui/material'
import { gql, useQuery } from '@apollo/client'
import Title from "../../Atoms/Title";
import {FavoritesContext} from "../../../Provider/FavoritesProvider";
import StarRating from "../../Atoms/Star";
import {isExistOnFavorites} from "../../../utils";

const LANGUAGES = gql`
    query Languages {
        languages {
            code
            name
            native
            rtl
        }
    }
`

const LanguageTemplate = () => {
    const { loading, error, data } = useQuery(LANGUAGES)
    const {favorites} = useContext(FavoritesContext);

    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const languages = data.languages
    return (
        <Container>
            <Title title={"Languages"}/>
            <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                {languages.length} Languages
            </Box>
            <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                {favorites.languages.length} Favorites
            </Box>

            <List>
                {languages.map(lang => (
                    <ListItem key={lang.code}>
                        <StarRating active={isExistOnFavorites(favorites.languages, lang)} item={lang} keyItem={"languages"} />   {lang.code} - {lang.name} - {lang.native}
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default LanguageTemplate
