import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(0 0 0 / 94%)'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'

    }
  }
  return (
    <>
      <Navbar title="TextUtils2" aboutText="aboutUs" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading="Enter text to analyze" mode={mode}/>
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
