import './App.css';
import Login from "./components/Login";
import Profile from "./components/Profile";
import Changecolor from './components/Changecolor';

function App() {
  return (
    <div className="App">
      <Login/>
      <Profile/>
      <Changecolor />
    </div>
  );
}

export default App;
