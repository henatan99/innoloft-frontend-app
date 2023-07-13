import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <LeftNav />
      </div>
    </div>
  );
}

export default App;
