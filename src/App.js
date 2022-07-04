import { Fragment, useContext } from 'react';
import NavBar from './NavBar.component';
import CartContainer from './CartContainer.component';
import { AppContext } from './Context';
import './App.css';

function App() {
  const { isLoading } = useContext(AppContext);
  if(isLoading) {
    return (
      <div className="loading flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold animate-ping">Loading....</h1>
      </div>
    )
  }
  return (
    <Fragment>
      <NavBar />
      <CartContainer />
    </Fragment>
  );
}

export default App;
