import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import MainNavBar from './components/MainNavBar';
import RightAddressInfo from './components/RightAddressInfo';
import MainCompNav from './components/MainCompNav';

function App() {
  const mainNavBarList = [
    "Offers",
    "Intelligent Finite Elements in Structural Mechanics"
  ]
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <LeftNav />
      </div>
      <div>
        <MainNavBar leftComp={"Offer Title"} btnText={"Edit"} />
      </div>
      <div className='my-1'>
        <MainNavBar leftComp={<MainCompNav list={mainNavBarList}/>} btnText={"View Offer"} />
      </div>
      <div>
        <RightAddressInfo />
      </div>
    </div>
  );
}

export default App;
