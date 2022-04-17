import Footer from './Footer.jsx';
import Header from './Header.jsx';
import wits from './utils/wits.jpg';
import {Button, Icon, Typography } from '@mui/material';

const Education = () =>{
    return(
        <div>
            <Header title = 'Education'/>
             <div style = {HomeStyle}>
                 <img src = {wits} width = {320} height = {200} style = {{alignSelf: 'center', padding: 12, borderRadius: 20}}/>
                 <div style = {CourseCards}>
                <Typography variant="body1" gutterBottom >
                    Machine Learning
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Computer Graphics and Vis
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Software Design
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Formal Languages and Automata 
                </Typography>
                </div>

                <div style = {CourseCards}>
                <Typography variant="body1" gutterBottom >
                    Operating Systems and Programming
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Parallel Computing
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Analysis of Advance Algorithms
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Software Design Project
                </Typography>
                </div>
                
                <div style = {CourseCards}>
                <Typography variant="body1" gutterBottom >
                    Mobile Computing 
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Computer Networking 
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Analysis of Algorithms
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Database Fundementals 
                </Typography>
                </div>

                <div style = {CourseCards}>
                <Typography variant="body1" gutterBottom >
                    Intro Algorithms and Programming
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Basic Computer Organisation 
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Intro Data Structures and Algorithms
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Descrete Computational Structures 
                </Typography>
                </div>

                <div style = {CourseCards}>
                <Typography variant="body1" gutterBottom >
                    Algebra 
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Calculus
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Multivariable Calculus
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Linear Algebra 
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Transition to Abstract Mathematics 
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Abstract Mathematics 
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Statistics
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Basic Analysis
                </Typography>
                </div>

                <div style = {CourseCards}>
                <Typography variant="body1" gutterBottom >
                    Microeconomic 1A None Theory
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Macroeconomic 1B None Theory
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

const CourseCards ={
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'groove',
    alignSelf: 'center',
    background: 'white'
}


export default Education;