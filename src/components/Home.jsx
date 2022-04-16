import photo from './utils/photo3.jpg';
import {Button, Icon, Typography } from '@mui/material';
import Footer from './Footer.jsx';

function linkedInOnClick(){
        window.open("http://www.linkedin.com/in/given-ng-mathebula-817b15209/");
}
function gitHubOnClick(){
    window.open("http://www.github.com/givenng6");
}
function twitterOnClick(){
    window.open("http://www.twitter.com/givenng6");
}

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

                <Button variant="outlined" style = {ButtonStyle} >MyProfile</Button>
                <Button variant="outlined" style = {ButtonStyle} >Education</Button>
                <Button variant="outlined" style = {ButtonStyle} >Skills</Button>
                <Button variant="outlined" style = {ButtonStyle} >Projects</Button>
            </div>
            <Footer/>
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
    background: '#220640',
    flexDirection: 'column',
    alignItems: 'center'
}

const ButtonStyle = {
    width: '40%',
    alignSelf: 'center',
    color: 'white',
    marginTop: 30
}

export default Home;