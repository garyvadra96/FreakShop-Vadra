import logo from './logo.svg';
import './App.css';
// import NavBar from './components/NavBar';
// import ItemListContainer from './components/itemListContainer'; 
// import Title from './components/Title';
// import ClickTracker from './components/ClickTracker';
import ItemCount from './components/componente entrega/ItemCount';

function App() {
  return (<>
  {/* <NavBar />
  <ItemListContainer greeting="Bienvenidos"/> */}
  {/* <Title /> */}
  {/* <ClickTracker /> */}
  <ItemCount stock="12" initial="0"/>

  </> 
  );
}

export default App;
