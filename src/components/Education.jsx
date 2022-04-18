import Footer from './Footer.jsx';
import Header from './Header.jsx';
import wits from './utils/wits.jpg';
import CourseCard from './utils/CourseCard.jsx';
import Coms from './utils/assets/course-icon/coms.png';
import Maths from './utils/assets/course-icon/math.png';
import Cam from './utils/assets/course-icon/cam.png';
import Econ from './utils/assets/course-icon/economics.png';
import Programming from './utils/assets/course-icon/code.png';
import {Button, Icon, Typography } from '@mui/material';

const Education = () =>{

    let currArray = ["COMS3003 Formal Languages and Automata","COMS3005 Advanced Analysis of Algorithms","COMS3006 Computer Graphics and Visualisation","COMS3007 Machine Learning","COMS3008 Parallel Computing","COMS3009 Software Design","COMS3010 Operating Systems and Systems Programming","COMS3011 Software Design Project"];
    let comsArray = ["COMS2013A Mobile Computing", "COMS2002A Database Fundamentals", "COMS2014A Computer Networks", "COMS2015A Analysis of Algorithms", "COMS1017A Introduction to Data Structures and Algorithms", "COMS1018A Introduction to Algorithms and Programming", "COMS1016A Discrete Computational Structures", "COMS1015A Basic Computer Organisation"];
    let mathArray = ["MATH2001A Basic Analysis","MATH2007A Multivariable Calculus","MATH2015A Abstract Mathematics","MATH2019A Linear Algebra II","MATH2025A Transition to Abstract Mathematics","STAT2012A Introduction to Mathematical Statistics","MATH1034A Algebra","MATH1036A Calculus"];
    let camArray = ["APPM2007 Methods","APPM2007 Numerics","APPM2007 Langrangian Mechanics","APPM2007 Optimisation","APPM2007 Intermidiate Mathematical Modelling","APPM1006 Numerics Analysis","APPM1006 Mechanics","APPM1006 Optimisation","APPM1006 Modelling"];
    let econArray = ["ECON1012A Economics 1A - Microeconomics", "ECON1014A Economics 1B - Macroeconomics"];
    return(
        <div>
            <Header title = 'Education' 
            tab1 = 'MyProfile'
            state1 = '/profile'
            tab2 = 'Skills'
            state2 = '/skills'
            tab3 = 'Projects'
            state3 = '/projects'
            />
             <div style = {HomeStyle}>
                 <img src = {wits} width = {320} height = {200} style = {{alignSelf: 'center', padding: 12, borderRadius: 20}}/>
                 <Typography variant="button" gutterBottom component="div" style = {{color: 'black'}}>
                    BSc Computer Science 
                </Typography>
                 <CourseCard icon = {Programming} title = '2022 Courses' array = {currArray}/>

                 <Typography variant="caption" display="block" gutterBottom>
                    * click icon for details
                </Typography>

                 < div style = {ContainerStyle}>
                 <CourseCard icon = {Coms} title = 'Computer Science' array = {comsArray}/>
                 <CourseCard icon = {Maths} title = 'Mathematics'array = {mathArray}/>
                 <CourseCard icon = {Cam} title = 'Comp and Applied Math'array = {camArray}/>
                 <CourseCard icon = {Econ} title = 'Economics' array = {econArray}/>
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
    alignItems: 'center'

}

const ContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //width: '90%',
    //background: 'yellow',
    alignSelf: 'center',
    //padding: 12
}

export default Education;