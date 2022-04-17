import Footer from './Footer.jsx';
import Header from './Header.jsx';

const Skills = () =>{
    return(
        <div>
            <Header title = 'Skills'/>
             <div style = {HomeStyle}>

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


export default Skills;