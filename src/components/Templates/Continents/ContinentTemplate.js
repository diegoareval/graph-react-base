import {Container, List, ListItem} from '@mui/material'
import { gql, useQuery } from '@apollo/client'
import Title from "../../Atoms/Title";

const CONTINENTS = gql`
    query Continents {
        continents {
            name
            code
        }
    }
`
const ContinentTemplate = () => {

    const { loading, error, data } = useQuery(CONTINENTS)
    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const continents = data.continents
    console.log(continents)


    return (
        <Container>
            <Title title={"Continents"}/>
            <List>
                {continents.map(continent => (
                    <ListItem key={continent.code}>
                        {continent.code} - {continent.name}
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default ContinentTemplate
