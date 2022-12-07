/* eslint-disable jsx-a11y/anchor-is-valid */
import {useContext, useState} from 'react'
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
import TextSecondary from "../../Atoms/TextSecondary";

const CountryTemplate = () => {
    const {favorites} = useContext(FavoritesContext);
    const { loading, error, data } = useQuery(COUNTRIES)
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
                <TextSecondary title={`${countries.length} Countries`}/>
                <TextSecondary title={`${countriesWithStates.length}  Countries with states`}/>
                <TextSecondary title={`${favorites.countries.length}  Favorites`}/>
                {countries.map(country => (
                    <div key={country.code}>
                        <Box
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
                    </div>
                ))}
            </Box>
            {open && item &&  <Modal info={item} open={open} toggleModal={setOpen}/>}
        </Container>
    )
}

export default CountryTemplate
