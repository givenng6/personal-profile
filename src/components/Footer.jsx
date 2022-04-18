import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button, Icon, Typography } from '@mui/material';

const Footer = () =>{
    const web = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        <div style = {HomeFotterStyle}>
                <Typography variant="h6" gutterBottom component="div" style = {{color: 'white', alignSelf: 'center'}}>
                    Personal Profile
                </Typography>
                <LinkedInIcon sx = {{color: 'white', margin: 1, cursor: 'pointer'}} onClick={() => {web("http://www.linkedin.com/in/given-ng-mathebula-817b15209/")}} />
                <GitHubIcon sx = {{color: 'white', margin: 1, cursor: 'pointer'}}  onClick={() => {web("http://www.github.com/givenng6")}}/>
                <TwitterIcon sx = {{color: 'white', margin: 1, cursor: 'pointer'}} onClick={() => {web("http://www.twitter.com/givenng6")}}/>
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