import './App.css';
import Explore from './components/Explore';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import NewRelease from './components/NewRelease';
import aoashi from './Assets/images/aoashi_card 1.png'
import onepiece from './Assets/images/One-piece 1.png'
import boruto from './Assets/images/boruto-naruto-next-generations 1.png'
import spyxfamily from './Assets/images/spy_card 1.png'
import shingeki from './Assets/images/attackontitan 1.png'
import tsubasa from './Assets/images/captsu_card 1.png'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Explore/>
      <Carousel/>
      <div className='NewRelease-section'>
      <h3>New Release</h3>
      <div className='NewRelease'>
      <NewRelease episode="Episode 1018" name="One piece" imgURL={onepiece}></NewRelease>
      <NewRelease episode="Episode 250" name="Boruto Naruto Next Generations" imgURL={boruto}></NewRelease>
      <NewRelease episode="Episode 07" name="Spy X Family" imgURL={spyxfamily}></NewRelease>
      <NewRelease episode="Episode 28" name="Shingeki no kyoujin" imgURL={shingeki}></NewRelease>
      <NewRelease episode="Episode 28" name="Captain Tsubasa" imgURL={tsubasa}></NewRelease>
      <NewRelease episode="Episode 28" name="Aoashi" imgURL={aoashi}></NewRelease>
      </div>
      </div>

    </div>
  );
}

export default App;
