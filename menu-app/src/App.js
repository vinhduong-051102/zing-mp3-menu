import ItemComponent from './components/itemComponent'
import DB from './database/db'
import './App.css';

function App() {
  const db = DB()
  return (
    <div className="App">
      {db.map((data, index) => {
        return (
          <ItemComponent 
            props = { data }
            key = { index }
          />
        )
      })}
      
    </div>
  );
}

export default App;
