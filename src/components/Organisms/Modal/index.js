import {Dialog, DialogContent, DialogTitle} from '@mui/material'
import BoxElement from "../../Molecules/Box"
import {useQuery} from "@apollo/client";
import {COUNTRY} from "../../../utils/queries";

const Modal = ({toggleModal, open, info}) => {
    const {code} = info
    const {loading, error, data} = useQuery(COUNTRY, {
        variables: {code}
    });

    const label = loading? "Loading...": error? "Something went wrong": "Country"

    return (
        <Dialog open={open} onClose={() => toggleModal(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{label}</DialogTitle>
            {
                data && data.country && <DialogContent>
                    <BoxElement
                        name={`Name: ${data.country.name}`}
                    />
                    <BoxElement
                        name={`Code: ${data.country.code}`}
                    />

                    <BoxElement
                        name={`Currency: ${data.country.currency}`}
                    />

                    <BoxElement
                        name={`Emoji: ${data.country.emoji}`}
                    />
                    <BoxElement
                        name={`Phone: ${data.country.phone}`}
                    />
                    <BoxElement
                        name={`States: ${data.country.states.length || 0}`}
                    />
                </DialogContent>
            }
        </Dialog>
    )
}

export default Modal
