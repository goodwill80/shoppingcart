import { Fragment } from 'react';
import NavBar from './NavBar.component';
import CartContainer from './CartContainer.component';
import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <CartContainer />
    </Fragment>
  );
}

export default App;
