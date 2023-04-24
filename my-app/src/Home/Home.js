import './Home.css'
import logo from './image/KU11-3.png';

const Home = () => {

    return (
    <div className='Home'>
        Home
        <h1>Kasetsart University</h1>
        <header>
            <img src={logo} className="KU-logo" alt="logo" />
        </header>
        
    </div>
    );
}

export default Home;