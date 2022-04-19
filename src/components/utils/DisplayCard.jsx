import {Button, Icon, Typography } from '@mui/material';
import ic from './assets/course-icon/pin.png';

const DisplayCard = (props) =>{ 
    return(
        <div style = {DisplayCardStyle}>
            <img src = {props.icon} width = {100} height = {100}/>
           
           <div style = {BodyStyle}>
            {props.title}
            <Typography variant="body1" gutterBottom>
                 {props.txt1}  
            </Typography>
            <Typography variant="body1" gutterBottom>
                {props.txt2}  
            </Typography>
            <Typography variant="body1" gutterBottom>
                {props.txt3}  
            </Typography>
            </div>
        </div>  
    )
}

const DisplayCardStyle ={
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    width: '40%',
    minWidth: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    borderStyle: 'groove',
    borderRadius: 12,
    margin: 10



}

const BodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '99%',
    background: '#edf4f5',
    alignItems: 'center',
    borderStyle: 'groove',
    borderRadius: 10,
    marginTop: 4,
    fontWeight: 'bold'
}

export default DisplayCard;