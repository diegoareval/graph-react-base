import {useContext, useRef, useState} from 'react'
import {
    Container,
    Box
} from '@mui/material'
import {  useQuery } from '@apollo/client'
import Title from "../../Atoms/Title";
import Modal from "../../Organisms/Modal";
import {FavoritesContext} from "../../../Provider/FavoritesProvider";
import StarRating from "../../Atoms/Star";
import {isExistOnFavorites} from "../../../utils";
import {COUNTRIES} from "../../../utils/queries";



const CountryTemplate = () => {
    const {favorites} = useContext(FavoritesContext);
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
                <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
                    {favorites.countries.length} Favorites
                </Box>
                {countries.map(country => (
                    <>
                        <Box
                             key={country.code}
                             sx={{
                                 padding: '.5rem 0rem',
                                 color: country.states.length > 0 ? 'blue' : '#999'
                             }}
                        >
                          <div style={{display: "flex"}}>
                             <div> <StarRating active={isExistOnFavorites(favorites.countries, country)} item={country} keyItem={"countries"} /></div>
                              <div style={{marginTop: "20px"}} onClick={()=> showCountry(country)}>
                                  <a href='#'>
                                      {country.emoji} {country.name}{' '}
                                      {country.states.length > 0 && country.states.length}{' '}
                                      {country.states.length > 1 && 'States'}
                                      {country.states.length === 1 && 'State'}
                                  </a>
                              </div>
                          </div>
                        </Box>
                    </>
                ))}
            </Box>


           <div ref={modalRef}>
            {open && item &&  <Modal info={item} open={open} toggleModal={setOpen}/>}
           </div>
        </Container>
    )
}

export default CountryTemplate
