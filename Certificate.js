import React from 'react'
import './Certificite.css'
import CER from './assets/cer2.jpeg'
import CERb from './assets/cer3.jpeg'
import CERc from './assets/cer4.jpeg'
import Face from './Icone/facebook.png'
import Iace from './Icone/instagram.png'
import Gace from './Icone/social.png'
import Lace from './Icone/linkedin.png'
import Tace from './Icone/twitter.png'
import Yace from './Icone/youtube.png'

function Certificate(props) {
    return (
        <div>
             <h1 style={{textAlign:"center"}}>CERTIFICTION</h1><br></br><br></br>
             <h1>CERTIFICATE OF EXCELLENCE</h1><br></br>
             <h2>We take immense pleasure in conferring the title,<span> Mr/Ms. Enthusiastic to <span className='spanm'>T.Veera chandru</span> for her 
                outstanding performance in all the activities</span> conducted at Project Punch, the 3-day Spoken English
                 Course by team Beehive Communication Club at Pope's College (Autonomous), Tuticorin from February 07,
                 2023 till February 09, 2023.</h2>
                 <h2>conducted By:</h2>
                 <h2>Rotary Club of SPIC Nagar and Rotary Club of Virudhunagar in association with Pope's College (Autonomous), Tuticorin</h2><br></br><br></br>
             <img src={CER} className='cer'></img><br></br><br></br><br></br>
             <h1>MACHINE LEARNING USING PYTHON</h1><br></br>
             <h2>DEPARTMENT OF COMPUTER SCIENCE Workshop on Machine Learning using Python
               Certificate
               This is to Certify that <span className= 'spanm'>Dr.T.VEERACHANDRU </span> OF POPE'S COLLEGE, SAWYERPURAM..actively participated in the Workshop on "Machine Learning
              using Python" organised by the Department of Computer Science on 22.07.2022</h2>
             <h2>conducted By:</h2>
             <h2>HOLY CROSS HOME SCIENCE COLLEGE
                    Affiliated to Manonmaniam Sundaranar University, Tirunelveli
                 Re-Accredited with 'B' Grade by NAAC</h2><br></br><br></br>
             <img src={CERb} className='cera'></img><br></br><br></br><br></br>
             <h1>WEB APPLICATION DEVELOPMENT</h1><br></br>
             <h2>One Day State Level Seminar on WEB APPLICATION DEVELOPMENT
             This is to certify that<span className= 'spanm'>         T.Veerachandru</span>. Pope's College of Arts & Science Sawyerpusam. has participated in the One Day State Level Seminar on "WEB APPLICATION DEVELOPMENT" Organized by the DEPARTMENT OF COMPUTER SCIENCE & IQAC, Nazareth Margoschis College at Pillaiyanmanai,
            Thoothukudi District, Tamilnadu on 21.03.2023</h2>
            <h2>conducted By:</h2>
            <h2>NAZARETH MARGOSCHIS COLLEGE AT PILLAYANTANAI NAZARETH - 628 617</h2><br></br><br></br>
             <img src={CERc} className='cerb'></img><br></br><br></br><br></br>

             <div className='sociallink'>
            <h1 id='h1'>SOCAL LINKES :</h1>
            <h2>Tell your friends about us</h2>
            <div className='socil'>
                
           <a href='https:\\www.youtube.com' ><img src={Yace} className='social1'></img></a>
           <a href='https:\\www.facebook.com' ><img src={Face} className='social2'></img></a>
           <a href='https:\\www.instagram.com' ><img src={Iace} className='social3'></img></a>
           <a href='https:\\www.linkedin.com' ><img src={Lace} className='social4'></img></a>
           <a href='https:\\www.google.com' ><img src={Gace} className='social5'></img></a>
           <a href='https:\\www.twitter.com' ><img src={Tace} className='social6'></img></a>
           </div>
           <br></br><br></br>
        </div>
             
        </div>
    );
}

export default Certificate;<br></br>