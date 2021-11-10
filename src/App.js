// Component 
import './App.css'; // css
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Program from './components/Program/Program';
import ChannelList from './containers/ChannelList/ChannelList';

// Ideal comp for us to have the layout
// js 
function App() {
  // Comp is react js should return JSX
  return (
    <div>
      <Header></Header>
      
      <div className="container mt-5">
        <h2>Program | Props Demo</h2>
        <Program name="T20 CWC" 
          category="Sports" 
          time="7 PM">
          Best cricketing event of the year to be aired in Star Sports
        </Program>

        <Program name="Man Vs Wild" 
          category="Infotainment" 
          time="9 PM">
          Wild Adventure show by Bear Grylls on Discovery Channel  
        </Program>

        <hr />
        <h2>Channel List | Class Comp, 
          States and Events Demo</h2>
        <ChannelList />
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
