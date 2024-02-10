import React from "react";
import Veera from "./Veera";
import { useEffect,useState } from "react";
import './App.css'
import Skill from "./Skill";
import Education from "./Education";
import Certificate from "./Certificate";
import Abouts from "./Abouts";

function App() {
  const current_theme = localStorage.getItem('current_theme');

  const [theme ,setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  

  let component
   switch (window.location.pathname) {
    case "/":
      component = <App/>
      break;
      case "/About":
      component = <Abouts/>
      break;
      case "/Skill":
      component = <Skill/>
      break;
      case "/Education":
      component = <Education/>
      break;
   
       case "/Certificate":
        component = <Certificate/>
      break;
   }

     
  return(
     <div className={`App ${theme} `}>
    
    <Veera theme={theme} setTheme={setTheme} />
    {component}
    </div>
    );

   




   
  
}
export default App