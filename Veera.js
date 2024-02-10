import Image from './assets/profile1.jpeg'
import DAY from './assets/day.png'
import Night from './assets/night.png'
import IMGVE from './assets/veera.png'
import IMAGEVE from './assets/veerase.png'

import { useState } from "react";
import './veera.css'
function Veera({theme, setTheme}) {
    const Moonicone = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }
         const [visited, setVisited] = useState(false);
         const handleClick = () => {
           setVisited(!visited);
         };
       
   
    
    return (
        <div>
           <div className='Navbar'>
            <img src={theme == 'light' ? IMGVE : IMAGEVE} alt='' className='logoname'></img>
             <ul className='ul'>
                
                <li className='li'>
                <a href='/About' id='about' onClick={handleClick}  className={visited ? "white" : "black"} >HOME</a>
                </li>
                <li className='li'>
                <a href='/Education' id='education' onClick={handleClick} className={visited ? "white" : "black"} >EDUCATION</a>
                </li>
                <li className='li'><a href='/Skill' id='skill'>SKILLS</a></li>
                <li className='li'><a href='/Certificate' id='certificate'>CERTIFICATES</a></li>
            
             </ul>

            
            
            
            <img onClick={()=>{Moonicone()}} src={theme == 'light' ? Night : DAY} className='moonicone'></img>
             </div>
        
             <div id='ve'>
            <div id='one2'>
            <img src={Image} alt='veera'id='ar'></img>
            </div>
            <div id='one1'>
            <h3><span>HI I'M</span></h3>
            <br></br>
            <h1>VEERA<span> CHANDRU.T</span></h1>
            <br></br>
            <h3><span>I'm Professional FrontEnd Web developer</span>,Our Main Goal To Help & Satisficed the local & Global clients by FrontEnd Web Development Solutions. </h3>

            </div>
           
        </div>
        </div>
    );
}

export default Veera;