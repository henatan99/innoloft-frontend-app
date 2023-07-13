import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import MainNavBar from './components/MainNavBar';
import RightAddressInfo from './components/RightAddressInfo';
import MainCompNav from './components/MainCompNav';
import MainContentComp from './components/MainContentComp';
import VideoSection from './components/videoSection';

function App() {
  const mainNavBarList = [
    "Offers",
    "Intelligent Finite Elements in Structural Mechanics"
  ]

  const mainContent = {
    "title": "Intelligent Finite Elements in Structural Mechanics",
    "description": `In structural Mechanics, the Finite Element method is used 
      to simulate structural deformations and laods, e.g. for the design of components 
      in mechanical or civil engineering. The more complex the stuructural deformations
      are, the longer simulation times associated with convergence problems can last.
      This is where the present invention comes in, by combining the classical Finite
      Element Method with artificial intelligence. This is the first method in the 
      literature that significantly improves simulation times and convergence properties
      in this way.
    `
  }

  return (
    <div className="App  bg-custom-light-gray">
      <Header />
      <main className='flex flex-row px-[2%] max-w-[1200px] mx-auto'>
        <div className='hidden md:block'>
          <LeftNav />
        </div>
        <div className='flex flex-col flex-grow'>
          {/* <div>
            <MainNavBar leftComp={"Offer Title"} btnText={"Edit"} />
          </div> */}
          <div>
            <div className='my-1'>
              <MainNavBar leftComp={<MainCompNav list={mainNavBarList}/>} btnText={"View Offer"} />
            </div>
            <div className='flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden'>
              <MainContentComp type={"edit"} content={mainContent} />
              <div>
                <RightAddressInfo />
              </div>
            </div>
            <div className='my-3 bg-white rounded-lg p-4'>
              <VideoSection type="edit"/>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
