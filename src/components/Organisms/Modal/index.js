import {Dialog, DialogContent, DialogTitle} from '@mui/material'
import BoxElement from "../../Molecules/Box"

const Modal = ({toggleModal, open, info}) => {
    const {name, code, currency, emoji, phone, states = []} = info
    console.log(info)

    return (
        <Dialog open={open} onClose={() => toggleModal(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Country</DialogTitle>
            <DialogContent>
                <BoxElement
                    name={`Name: ${name}`}
                />
                <BoxElement
                    name={`Code: ${code}`}
                />

                <BoxElement
                    name={`Currency: ${currency}`}
                />

                <BoxElement
                    name={`Emoji: ${emoji}`}
                />
                <BoxElement
                    name={`Phone: ${phone}`}
                />
                <BoxElement
                    name={`States: ${states.length || 0}`}
                />


            </DialogContent>
        </Dialog>
    )
}

export default Modal
