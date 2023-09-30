import logo from './logo.svg';
import './App.css';
import './index.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Pizza from './components/Pizza';

function App() {
  return (
    <div className = "App">
      <Navbar/>
      <HomeScreen/>
    </div>
  )
}

export default App;
