import logo from './logo.svg';
import './App.css';
import Header from './headercomponent';
import Pagination from './paginationcomponent';
import ProductCard from './productcardcomponent';
import ProductListing from './productlistingpage';
import { Router } from 'react-router-dom';
import ThankYouPage from './thankyoupage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
