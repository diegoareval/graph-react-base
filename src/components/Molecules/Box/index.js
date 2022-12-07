import {Box} from "@mui/material";

const BoxElement = ({color = "#999", padding = "", name}) => {
    return (
        <Box
            sx={{
                color, padding
            }}
        >
          {name}
        </Box>
    )
}

export default BoxElement
