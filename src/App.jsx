import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx'
import TextForm from './Components/TextForm.jsx'
import Alert from './Components/Alert.jsx';

function App() {

  const [mode , setMode] = useState('light')

  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    } , 1500)
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "black"
      document.body.style.color = "white"
      setmyText("ડાર્ક મોડ ચાલુ છે.");
      showAlert("Dark mode has been Enable" , "success");
      setInterval(() => {
        document.title = "SIT - Admission"
      }, 150)
      setInterval(() => {
        document.title = "SIT - B.sc.IT"
      }, 200)
    } else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.color = "black"
      setmyText("લાઇટ મોડ ચાલુ છે.");
      showAlert("Light mode has been Enable" , "success")
    }
  }

  const [myText , setmyText] = useState ('લાઇટ મોડ ચાલુ છે.');

  return (
  <>
  <Navbar title = "SIT" aboutText="Abour Us" mode={mode} toogleMode={toogleMode} myText={myText}/>
  <Alert alert={alert}/>
  <TextForm heading="Enter your text" mode={mode} toogleMode={toogleMode} showAlert={showAlert}/>

  </>
  );
}

export default App;
    