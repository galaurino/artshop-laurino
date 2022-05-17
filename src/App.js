import './App.css';
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer  />
    </div>
  );
}

export default App;
