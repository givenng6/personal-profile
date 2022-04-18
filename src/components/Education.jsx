import Footer from './Footer.jsx';
import Header from './Header.jsx';
import wits from './utils/wits.jpg';
import CourseCard from './utils/CourseCard.jsx';
import Coms from './utils/assets/course-icon/coms.png';
import Maths from './utils/assets/course-icon/math.png';
import Cam from './utils/assets/course-icon/cam.png';
import Econ from './utils/assets/course-icon/economics.png';
import {Button, Icon, Typography } from '@mui/material';

const Education = () =>{
    return(
        <div>
            <Header title = 'Education'/>
             <div style = {HomeStyle}>
                 <img src = {wits} width = {320} height = {200} style = {{alignSelf: 'center', padding: 12, borderRadius: 20}}/>
                 < div style = {ContainerStyle}>
                 <CourseCard icon = {Coms} title = 'Computer Science'/>
                 <CourseCard icon = {Maths} title = 'Mathematics'/>
                 <CourseCard icon = {Cam} title = 'Comp and Applied Math'/>
                 <CourseCard icon = {Econ} title = 'Economics'/>
                 </div>
            </div>
            <Footer/>
        </div>
    )
}

const HomeStyle = {
    display: 'flex',
    //height: '100vh',
    background: '#edf4f5',
    flexDirection: 'column',

}

const ContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //width: '90%',
    background: 'yellow',
    alignSelf: 'center',
    //padding: 12
}

export default Education;