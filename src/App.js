
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';



function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="aboutUs"/>
      {/* <Navbar /> */}
      <div className="container">
        {/* <TextForm heading="Enter text to analyze"/> */}
        <About/>

      </div>
    </>
  );
}

export default App;
