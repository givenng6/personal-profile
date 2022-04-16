import photo from './utils/photo3.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button, Icon, Typography } from '@mui/material';

const Home = () => {
    return(
        <div>
            <div style = {HomeStyle}>
            <Typography variant="h3" gutterBottom component="div" style = {{color: 'white', marginLeft: '20%'}}>
                    GIVEN
                </Typography>
                <Typography variant="h3" gutterBottom component="div" style = {{color: 'white', marginLeft: '20%'}}>
                    NG
                </Typography>
                <Typography variant="h3" gutterBottom component="div" style = {{color: 'white', marginLeft: '20%'}}>
                    MATHEBULA
                </Typography>

                <Button variant="outlined" style = {ButtonStyle}>View My Profile</Button>
            </div>
            <div style = {HomeFotterStyle}>
                <Typography variant="h6" gutterBottom component="div" style = {{color: 'white', alignSelf: 'center'}}>
                    Personal Profile
                </Typography>
                <LinkedInIcon sx = {{color: 'white', margin: 1}}/>
                <GitHubIcon sx = {{color: 'white', margin: 1}}/>
                <TwitterIcon sx = {{color: 'white', margin: 1}}/>
                <Typography variant="caption" display="block" gutterBottom style = {{color: 'gray', alignSelf: 'center'}}>
                    OpenSource Project, Developed by Given Mathebula - 2022
                </Typography>
            </div>
        </div>
       
    );
}

const HomeStyle = {
    display: 'flex',
    height: '100vh',
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    flexDirection: 'column',
    justifyContent: 'center'

}

const HomeFotterStyle = {
    display: 'flex',
    height: '25vh',
    background: '#220640',
    flexDirection: 'column',
    alignItems: 'center'
}

const ButtonStyle = {
    width: '40%',
    alignSelf: 'center',
    color: 'white',
    marginTop: 50
}

export default Home;