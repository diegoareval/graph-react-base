import {Box} from '@mui/material'

const TextSecondary = ({title, styles={ textAlign: 'center', padding: '.5rem' }}) => {
    return (
        <Box sx={styles}>
            {title}
        </Box>
    )
}

export default TextSecondary
