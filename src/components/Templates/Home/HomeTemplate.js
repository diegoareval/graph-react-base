import { Container, Card, Box } from '@mui/material'
import Title from "../../Atoms/Title";
import {useContext} from "react";
import {FavoritesContext} from "../../../Provider/FavoritesProvider";

const HomeTemplate = () => {
    const {favorites} = useContext(FavoritesContext);
    return (
        <Container>
            <Title title={"Home page"}/>
            <Card style={{backgroundColor: "#C2C5CC", padding: "20px", marginTop: "20px"}}>
                <Box>
                    Continents: {favorites.continents.map((item, index) => <span key={index} style={{padding: "10px"}}>{item.name}</span>)}
                </Box>
                <Box>
                    Languages: {favorites.languages.map((item, index) => <span key={index} style={{padding: "10px"}}>{item.name}</span>)}
                </Box>
                <Box>
                    Countries: {favorites.countries.map((item, index) => <span key={index} style={{padding: "10px"}}>{item.name}</span>)}
                </Box>
            </Card>
        </Container>
    )
}

export default HomeTemplate
