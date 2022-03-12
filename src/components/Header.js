

const Header = (props) =>{

    return (
            <header className="header">{props.title}</header>
    );
}

 // Use to set a default props
 Header.defaultProps = {
     title:"TASK TRACKER APP"
 }

export default Header ;

