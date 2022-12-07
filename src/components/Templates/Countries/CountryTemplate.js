import {useRef, useState} from 'react'
import {
    Typography,
    Container,
    List,
    Box,
    MenuItem,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Dialog, DialogTitle
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import Title from "../../Atoms/Title";
import Modal from "../../Organisms/Modal";

const COUNTRIES = gql`
    query Countries {
        countries {
            code
            name
            phone
            languages {
                code
                name
                native
            }
            currency
            emoji
            emojiU
            states {
                name
                code
            }
        }
    }
`

const COUNTRY = gql`
    query Country($code: String!) {
        country(code: $code) {
            code
            name
            phone
            languages {
                code
                name
                native
            }
            currency
            emoji
            emojiU
            states {
                name
                code
            }
        }
    }
`

const CountryTemplate = () => {
    const { loading, error, data } = useQuery(COUNTRIES)
    const modalRef = useRef()
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState(null)
    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const countries = data.countries
    const countriesWithStates = countries.filter(
        country => country.states.length > 0
    )


    const showCountry = (data)=> {
        setItem(data)
        setOpen(true)
    }





    return (
        <Container>
            <Title title={"Countries"}/>
            <Box>
                <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                    {countries.length} Countries
                </Box>
                <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                    {countriesWithStates.length} Countries with states
                </Box>
                {countries.map(country => (
                    <Box onClick={()=> showCountry(country)}
                        key={country.code}
                        sx={{
                            padding: '.5rem 0rem',
                            color: country.states.length > 0 ? 'blue' : '#999'
                        }}
                    >
                        <a href='#'>
                            {country.emoji} {country.name}{' '}
                            {country.states.length > 0 && country.states.length}{' '}
                            {country.states.length > 1 && 'States'}
                            {country.states.length === 1 && 'State'}
                        </a>
                    </Box>
                ))}
            </Box>


           <div ref={modalRef}>
            {open && item &&  <Modal info={item} open={open} toggleModal={setOpen}/>}
           </div>
        </Container>
    )
}

export default CountryTemplate
