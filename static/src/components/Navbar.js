import react from '../images/react-small-icon.jpg'

export default function Navbar(){
    return (
        <nav>
            <img src={react} className="nav-react-img"/>
            <h3>React Facts</h3>
            <h4>React cource - Project 1</h4>
        </nav>
    );
}