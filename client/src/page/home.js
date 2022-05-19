import Navbar from '../components/navbar'
import HomeBody from '../components/home-body';
import { Outlet} from 'react-router-dom'

const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <HomeBody />
            <Outlet/>
        </div>
    );
}
 
export default Home;