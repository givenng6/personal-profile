import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button, Icon, Typography } from '@mui/material';


const Footer = () =>{
    return(
        <div style = {HomeFotterStyle}>
                <Typography variant="h6" gutterBottom component="div" style = {{color: 'white', alignSelf: 'center'}}>
                    Personal Profile
                </Typography>
                <LinkedInIcon sx = {{color: 'white', margin: 1, cursor: 'pointer'} } />
                <GitHubIcon sx = {{color: 'white', margin: 1, cursor: 'pointer'}}  />
                <TwitterIcon sx = {{color: 'white', margin: 1, cursor: 'pointer'}} />
                <Typography variant="caption" display="block" gutterBottom style = {{color: 'gray', alignSelf: 'center'}}>
                    OpenSource Project, Developed by Given Mathebula
                </Typography>
                <Typography variant="caption" display="block" gutterBottom style = {{color: 'gray', alignSelf: 'center'}}>
                    South Africa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom style = {{color: 'gray', alignSelf: 'center'}}>
                    2022
                </Typography>
            </div>
    )
}

const HomeFotterStyle = {
    display: 'flex',
    background: '#220640',
    flexDirection: 'column',
    alignItems: 'center'
}

export default Footer;