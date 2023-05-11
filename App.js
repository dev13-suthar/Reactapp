
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Myforms from './components/Myforms'
import Alert from './components/alert';




function App() {  
  const [mode] = useState("light")
  const [text, settext] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const removebg = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
  }


  const togglebtn = (cls) => {
    removebg();
    console.log(cls);
    document.body.classList.add('bg-' + cls)
    if (cls === "light") {
      document.body.style.color = "black"
      settext("Enable Light Mode")
      showalert("Dark mode enabled", "success")
    } else if(cls==="primary") {
      document.body.style.background = "white"
      document.body.style.color = "black"
      settext("Enable Dark Mode")
      showalert("Primary mode enabled", "success")
    }
    
  }
  return (
   
    <>

      <Navbar title="String_Utils" aboutUSS="About Our App" src="aboutUSS" mode={mode} toggle={togglebtn} changetext={text} />
      <Alert alert={alert} />
      <div className='container my-2'>
          <Myforms showalert={showalert} heading="Enter text here" mode={mode}/>
      </div>
    </>
  );

}



export default App;






