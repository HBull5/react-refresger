const Button = ({ text, bgColor }) => {
    return (
        <button className="btn" style={{ backgroundColor:  bgColor }}>{ text }</button>
    )
}

export default Button; 