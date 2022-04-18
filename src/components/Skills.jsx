import Footer from './Footer.jsx';
import Header from './Header.jsx';
import SkillCard from './utils/SkillCard.jsx';
import java from './utils/assets/java.svg';
import android from './utils/assets/androidstudio.svg';
import cplusplus from './utils/assets/cplusplus.svg';
import figma from './utils/assets/figma.svg';
import python from './utils/assets/python.svg';
import react from './utils/assets/react.svg';
import css from './utils/assets/css.svg';
import anaconda from './utils/assets/anaconda.svg';
import javascript from './utils/assets/javascript.svg';
import jupyter from './utils/assets/jupyter.svg';
import latex from './utils/assets/latex.svg';
import mysql from './utils/assets/mysql.svg';
import php from './utils/assets/php.svg';

const Skills = () =>{
    return(
        <div>
            <Header title = 'Skills'/>
             <div style = {HomeStyle}>
                <SkillCard icon = {java}/>
                <SkillCard icon = {android}/>
                <SkillCard icon = {cplusplus}/>
                <SkillCard icon = {figma}/>
                <SkillCard icon = {python}/>
                <SkillCard icon = {react}/>
                <SkillCard icon = {css}/>
                <SkillCard icon = {anaconda}/>
                <SkillCard icon = {javascript}/>
                <SkillCard icon = {jupyter}/>
                <SkillCard icon = {latex}/>
                <SkillCard icon = {mysql}/>
                <SkillCard icon = {php}/>
            </div>
            <Footer/>
        </div>
       
    )
}

const HomeStyle = {
    display: 'flex',
    background: '#edf4f5',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
}




export default Skills;