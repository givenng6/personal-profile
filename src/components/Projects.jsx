import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Meme from './utils/meme404.jpg';

const Projects = () =>{
    return(
        <div>
        <Header title = 'Projects'/>
         <div style = {HomeStyle}>
            <img src = {Meme} width = {340} height = {200}/>
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
justifyContent: 'center',
alignItems: 'center'

}

export default Projects;