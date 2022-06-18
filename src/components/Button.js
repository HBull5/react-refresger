const Button = ({text, bgColor, onClick}) => {
    return (
        <button className="btn" style={{backgroundColor: bgColor}} onClick={onClick}>{text}</button>
    )
}

export default Button; 