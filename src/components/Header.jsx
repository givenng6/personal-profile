import {Button, Icon, Typography } from '@mui/material';

const Header = (props) =>{
    return(
        <div style = {TopContainer}>
            <Typography variant="h5" gutterBottom component="div" style = {{color: 'white'}}>
                    {props.title}
            </Typography>

            <div style = {OptionsStyle}>
               <Button variant="text" style={{color: 'white'}} >Education</Button>
               <Button variant="text" style={{color: 'white'}} >Skills</Button>
               <Button variant="text" style={{color: 'white'}}  >Projects</Button>
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