import {Button, Icon, Typography, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';

const ViewDialog = (props) =>{

    const onClose = () =>{
        props.setOpen(false);
    }

    return(
        <div>
            <Dialog open = {props.open} onClose = {onClose} scroll = 'paper' >
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent >
                        {props.array.map((item, index) => <li key={index} >{item}</li>)}
                </DialogContent>
                <DialogActions>
                    <Button variant = 'text' onClick = {onClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ViewDialog;