import {useContext} from "react"
import {
    Container,
    List,
    ListItem
} from '@mui/material'
import {  useQuery } from '@apollo/client'
import Title from "../../Atoms/Title";
import {FavoritesContext} from "../../../Provider/FavoritesProvider";
import StarRating from "../../Atoms/Star";
import {isExistOnFavorites} from "../../../utils";
import {LANGUAGES} from "../../../utils/queries";
import TextSecondary from "../../Atoms/TextSecondary";

const LanguageTemplate = () => {
    const { loading, error, data } = useQuery(LANGUAGES)
    const {favorites} = useContext(FavoritesContext);

    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const languages = data.languages
    return (
        <Container>
            <Title title={"Languages"}/>
            <TextSecondary title={`${languages.length} Languages`}/>
            <TextSecondary title={`${favorites.languages.length} Favorites`}/>
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
