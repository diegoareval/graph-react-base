import {gql} from "@apollo/client";

export const CONTINENTS = gql`
    query Continents {
        continents {
            name
            code
        }
    }
`

export const LANGUAGES = gql`
    query Languages {
        languages {
            code
            name
            native
            rtl
        }
    }
`

export const COUNTRIES = gql`
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

export const COUNTRY = gql`
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
