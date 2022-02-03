import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Link to='/comments'>Comments</Link>
        <Link to='/products'>Products</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
