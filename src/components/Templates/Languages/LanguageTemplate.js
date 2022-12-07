import {
    Box,
    Container,
    Typography,
    List,
    ListItem
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import Title from "../../Atoms/Title";

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

    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const languages = data.languages

    return (
        <Container>
            <Title title={"Languages"}/>
            <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                {languages.length} Languages
            </Box>

            <List>
                {languages.map(lang => (
                    <ListItem key={lang.code}>
                        {lang.code} - {lang.name} - {lang.native}
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default LanguageTemplate
