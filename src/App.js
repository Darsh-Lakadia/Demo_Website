import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';    
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";
function App() {
    const [mode, setMode] = useState('light');
    const [mode1, setMode1] = useState({
        color: 'black'
    });
    const [alert, setAlert] = useState(null);

    const handleAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        })
    }

    const toggleTheme = () => {
        if (mode === 'dark') {
            setMode('light');
            setMode1({
                color: 'black'
            });
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            handleAlert("Light mode enable", "success");
            document.title = "Text Analyzer - Light Mode";
        }
        else {
            setMode('dark');
            setMode1({
                color: 'white'
            });
            document.body.style.backgroundColor = "#042743";
            document.body.style.color = "white";
            handleAlert("Dark mode enable", "success");
            document.title = "Text Analyzer - Dark Mode";
        }
    }
  return (
      <>
          {/* <Router> */}
          <Navbar title="Text Analyzer" mode={mode} toggleTheme={toggleTheme} mode1={mode1} />
          <Alert alert={alert} />
          <div className='container my-4'>

              {/* <About /> */}
              {/* <Switch> */}
              {/* <Route exact path="/about"> */}
              {/* <About /> */}
              {/* </Route> */}
              {/* <Route exact path="/"> */}
              <Textform alert={handleAlert} heading="Enter the text to analyse :" mode={mode} />
              {/* </Route> */}
              {/* </Switch> */}
                  </div>
          {/* </Router> */}
      </>
    );    
}

export default App;
