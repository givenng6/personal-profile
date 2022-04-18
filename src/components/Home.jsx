import photo from './utils/photo3.jpg';
import {Button, Icon, Typography } from '@mui/material';
import Footer from './Footer.jsx';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Profile from './Profile.jsx';

const Home = () => {

    const navigator = useNavigate();
    

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

                <Button variant="outlined" style = {ButtonStyle} onClick={() => {navigator("/profile")}}>MyProfile</Button>
                <Button variant="outlined" style = {ButtonStyle} onClick={() => {navigator("/education")}}>Education</Button>
                <Button variant="outlined" style = {ButtonStyle} onClick={() => {navigator("/skills")}}>Skills</Button>
                <Button variant="outlined" style = {ButtonStyle} onClick={() => {navigator("/projects")}}>Projects</Button>
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