import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet} from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    );
}
 
export default Home;