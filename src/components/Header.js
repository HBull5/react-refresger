import Button from './Button';

const Header = ({title, toggleAddTask, showAddTask}) => {
    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button text={showAddTask ? 'Close' : 'Add'} bgColor={showAddTask ? 'red' : 'green'} onClick={toggleAddTask} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header; 