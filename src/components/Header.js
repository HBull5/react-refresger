import Button from './Button';

const Header = ({title}) => {
    function onClick() {
        console.log('on click');
    }

    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" bgColor="green" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header; 