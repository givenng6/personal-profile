import {Button, Icon, Typography } from '@mui/material';
import photo from './utils/photo2.jpg';
import myProfile from './utils/myprofile.jpg';
import Footer from './Footer.jsx';
import Header from './Header';
import DisplayCard from './utils/DisplayCard.jsx';
import Location from './utils/assets/course-icon/pin.png';
import Work from './utils/assets/course-icon/portfolio.png';

const Profile = () => {
    return(
        <div>
        <div style = {HomeStyle}>
            <Header title = 'MyProfile'
            tab1 = 'Education'
            state1 = '/education'
            tab2 = 'Skills'
            state2 = '/skills'
            tab3 = 'Projects'
            state3 = '/projects'
            />
           
            <div style = {MainViewStyle}>
                <div>
                    <img src = {myProfile} width = {280} height = {200} style = {{borderRadius: 150}}/>
                </div>

            <Typography variant="body1" gutterBottom style = {BioStyle}>
                    Given Mathebula is a Third Year Computer Science Student at the University 
                    of Witwatersrand - lol I don't know what to write about myself... I wanna make the world a 
                    better place but they don't wanna give me the source code
                </Typography>
            </div>

            <div style = {CardContainerStyle}>
            <DisplayCard 
            title = "Location" 
            icon = {Location}
            txt1 = '127.0.0.1'
            txt2 = 'Braamfontein, JHB'
            txt3 = 'Bronkhorstspruit'
            />
            <DisplayCard 
            title = "Work" 
            icon = {Work}
            txt1 = 'WITS MSS'
            txt2 = 'Tech Lab Assistant'
            txt3 = 'Part-time'
            />
            
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

const CardContainerStyle ={
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}




export default Profile;