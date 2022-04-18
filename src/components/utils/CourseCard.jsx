import ViewDialog from './Dialog.jsx';
import {useState} from 'react';

const CourseCard = (prop) =>{
    const [open, setOpen] = useState(false);
    const openDialog = () =>{
      setOpen(true);
    }

    return(
        <div style = {CardStyle}>
            <img src = {prop.icon} width = {150} height = {150} onClick = {openDialog}/>
            {prop.title}

            <ViewDialog open = {open} setOpen = {setOpen} title = {prop.title} array = {prop.array}/>
        </div>
    )
}

const CardStyle = {
    display: 'flex',
    background: 'white',
    borderStyle: 'groove',
    flexDirection: 'column',
    minWidth: '45%',
    width: '45%',
    minHeight: '45%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 11,
    marginTop: 10,
    marginBottom: 10,
    color: 'purple',
    fontWeight: 'bold'
}

export default CourseCard;