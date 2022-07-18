import './App.css';
import ItemCount from './components/componente entrega/ItemCount';

function App() {
  return (<>
  <ItemCount stock={12} initial={0} onAdd={(a, b) => console.log(a-b)} />

  </> 
  );
}

export default App;