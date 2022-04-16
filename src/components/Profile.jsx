import {Button, Icon, Typography } from '@mui/material';
import photo from './utils/photo2.jpg';
import myProfile from './utils/myprofile.jpg';
import Footer from './Footer.jsx';
import Header from './Header';

const Profile = () => {
    return(
        <div>
        <div style = {HomeStyle}>
            <Header/>
           
            <div style = {MainViewStyle}>
                <div>
                    <img src = {myProfile} width = {280} height = {200} style = {{borderRadius: 150}}/>
                </div>

            <Typography variant="body1" gutterBottom style = {BioStyle}>
                    Given Mathebula is a Third Year Computer Science Student at the University 
                    of Witwatersrand - lol I don't know what to write about myself...
                </Typography>
            </div>

           
            
        </div>
        <Footer/>
        </div>
    )
}

const HomeStyle = {
    display: 'flex',
    height: '100vh',
    background: '#edf4f5',
    flexDirection: 'column',

}


const MainViewStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#220640',
    borderRadius: 12,
    margin: 12,
    padding: 12
}

const BioStyle = {
    alignSelf: 'center', 
    color: '#220640',
    margin: 5
}




export default Profile;