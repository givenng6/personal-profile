import {Button, Icon, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Header = (props) =>{

    const navigator = useNavigate();

    return(
        <div style = {TopContainer}>
            <Typography variant="h5" gutterBottom component="div" style = {{color: 'white'}}>
                    {props.title}
            </Typography>

            <div style = {OptionsStyle}>
               <Button variant="text" style={{color: 'white'}} onClick = {() => {navigator(props.state1)}}>{props.tab1} </Button>
               <Button variant="text" style={{color: 'white'}} onClick = {() => {navigator(props.state2)}}>{props.tab2}</Button>
               <Button variant="text" style={{color: 'white'}} onClick = {() => {navigator(props.state3)}}>{props.tab3}</Button>
           </div>
            </div>
    )
}

const TopContainer = {
    display: 'flex',
    flexDirection: 'column',
    background: '#220640',
    justifyContent: 'center', 
    alignItems: 'center',
    //padding: 10,
    
}

const OptionsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    //margin: 20,
    //position: 'fixed'
}

export default Header;