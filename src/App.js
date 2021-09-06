import './styles/App.css';
import Categories from './components/common/Categories';
import MenuItems from './components/layout/Header/MenuItems';
import Cantidad from './components/hooks/Cantidad';


function App() {
  return (
    <div>
      <MenuItems></MenuItems>
      <Categories/>
      <Cantidad />
    </div>
  );
}

export default App;
