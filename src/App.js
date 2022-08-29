import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
  // Router,
} from "react-router-dom";
import About from './Components/About';



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0 0 0 / 94%)'
      showAlert("dark mode has been enabled", "success");
      document.title = "Text Utils Dark mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
      // document.title="Text Utils Light mode"

    }
  }
  return (
    <>
      <BrowserRouter>

          <Navbar title="TextUtils2" aboutText="aboutUs" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          {/* <Navbar /> */}
          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
              </Route>
            </Routes>
          </div>


      </BrowserRouter>
    </>
  );
}

export default App;
