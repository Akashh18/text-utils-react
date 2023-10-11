
import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import NavBar from './components/Navbar';
import Textform from './components/Textform';
import Alertmsg from './components/Alert';

import { BrowserRouter as HashRouter , Routes, Route } from "react-router-dom";


function App() {
  
  setInterval(() => {
    document.title = "TextUtils Home";
  },500);
  setInterval(() => {
    document.title = "TextUtils✏️";
  }, 1000);

  const [mode, newmode] = useState('light')

  const [alert,setAlert] = useState(null);

  const showAlert = (msg,type) => {
      setAlert({
        msg : msg,
        type :type       
      }) 
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  // const togglemode = () =>{
  //   if (mode === 'light'){
  //       newmode('dark')
  //       document.body.style.backgroundColor = "#152739";
  //       showAlert('DarkMode Enabled..','success')
  //   }else{
  //       newmode('light')
  //       document.body.style.backgroundColor = "white";
  //       showAlert("DarkMode Disabled..", "success");
  //   }
  // }

  const togglemodeblack = () => {
       document.body.style.backgroundColor ='black';
       newmode("dark");
  }
  const togglemodegrey = () => {
    document.body.style.backgroundColor = "grey";
    newmode("dark");
  };
  const togglemodeblue = () => {
    document.body.style.backgroundColor = "blue";
    newmode("dark");
  };
  const togglemodewhite = () => {
    document.body.style.backgroundColor = "white";
    newmode('light')

  };


  return (
    <>
      <HashRouter>
        <NavBar
          title="TextUtils✏️"
          mode={mode}
          /*togglemode={togglemode}*/ togglemodeblack={togglemodeblack}
          togglemodegrey={togglemodegrey}
          togglemodeblue={togglemodeblue}
          togglemodewhite={togglemodewhite}
        />

        <Alertmsg alert={alert} />

        <Routes>
          <Route path="/about" element={<AboutUs />} />

          <Route
            path="/"
            element={
              <Textform
                heading="Enter the Text to Analyze.."
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </HashRouter>

      <hr />

      {/* <div className="container my-3"> <AboutUs/> </div> */}
    </>
  );
}

export default App;


