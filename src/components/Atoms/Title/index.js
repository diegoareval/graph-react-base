import { Container, Typography } from '@mui/material'

const Title = ({title}) => {
    return (
            <Typography variant='h1' sx={{ textAlign: 'center' }}>
                {title}
            </Typography>
    )
}

export default Title
