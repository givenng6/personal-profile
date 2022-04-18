import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Meme from './utils/meme404.jpg';

const Projects = () =>{
    return(
        <div>
        <Header title = 'Projects'
        tab1 = 'MyProfile'
        state1 = '/profile'
        tab2 = 'Education'
        state2 = '/education'
        tab3 = 'Skills'
        state3 = '/skills'
        />
         <div style = {HomeStyle}>
            <img src = {Meme} width = {340} height = {200}/>
        </div>
        <Footer/>
    </div>
   
)
}

const HomeStyle = {
display: 'flex',
height: '60vh',
background: '#edf4f5',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center'
}

export default Projects;