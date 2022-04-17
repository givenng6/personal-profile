import Footer from './Footer.jsx';
import Header from './Header.jsx';

const Education = () =>{
    return(
        <div>
            <Header title = 'Education'/>
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


export default Education;