import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import {
   BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState ('light'); // whether darkmpode is enabled or not
  const [alert, setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>{
      setAlert(null);
      },3000);
    }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      // document.body.style.backgroundColor ="#222121"
      document.body.style.backgroundColor ="#042744"
      showAlert("Dark mode has been enabled.",'success')
      document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="white"
      showAlert("Light mode has been enabled.",'success')
      document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={ <About />}>
           </Route>
          <Route exact path="/"  element={ <TextForm  mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
