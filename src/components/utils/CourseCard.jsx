
const CourseCard = (prop) =>{
    return(
        <div style = {CardStyle}>
            <img src = {prop.icon} width = {150} height = {150}/>
            {prop.title}
        </div>
    )
}

const CardStyle = {
    display: 'flex',
    background: 'white',
    borderStyle: 'groove',
    flexDirection: 'column',
    minWidth: '45%',
    width: '45%',
    minHeight: '45%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    color: 'purple',
    fontWeight: 'bold'
}

export default CourseCard;