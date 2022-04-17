

const SkillCard = (prop) =>{
    return(
        <div style = {CardStyle}>
            <img src = {prop.icon} width = {150} height = {150}/>
        </div>
    )
}

const CardStyle = {
    display: 'flex',
    background: 'white',
    borderStyle: 'groove',
    flexDirection: 'column',
    minWidth: '40%',
    minHeight: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12
}

export default SkillCard;