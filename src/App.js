import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import RightAddressInfo from './components/RightAddressInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <LeftNav />
      </div>
      <div>
        <RightAddressInfo />
      </div>
    </div>
  );
}

export default App;
