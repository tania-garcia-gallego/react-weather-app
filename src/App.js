
import './App.css';
import Weather from "./Weather.js";
import Footer from "./Footer.js";


function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather defaultCity="Valencia"/>
        <Footer />

      </div>
    </div >
  );
}

export default App;
