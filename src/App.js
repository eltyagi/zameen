import './App.css';
import overview from './overview.png';
import assets from './asset_icon.png'
import settings from './settings.png'
import Homepage from './components/homePage/homePage';
import Assets from './components/assets/assets';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className = 'landing-page'>
        <div className = 'nav'>
          <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
            <div className = 'logo'>
              ZN
            </div>
          </Link>
          <div className = 'nav-op'>
            <div className = 'overview'>
              <img className = 'overview-icon' src = {overview}/>           
            </div>
            <Link to = "/assets" style={{ textDecoration: 'none', color: 'black' }}>
            <div className = 'assets'>
                <img className = 'assets-icon' src = {assets}/>          
            </div>
            </Link> 
            <div className = 'settings'>
              <img className = 'settings-icon' src = {settings}/>           
            </div>
            <div className = 'profile'>
              
            </div>
          </div>
        </div>

        <Routes style = {{margin: "0px"}}>
          <Route style = {{margin: "0px"}} path = "/assets" element = {<Assets/>}/>
          <Route style = {{margin: "0px"}} path="/" element={<Homepage/>}/>
        </Routes>

      

      </div>

      

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Nova+Slim&display=swap" rel="stylesheet"/>

    </div>
  );
}

export default App;
