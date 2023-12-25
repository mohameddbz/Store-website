import './App.css';
import NavBar from './Components/NavBar';
import Body from './Components/body';
import Selling from './Components/selling';
import Product from './Components/products'

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Body/>
       <Selling/>
       <Product/>
    </div>
  );
}

export default App;
