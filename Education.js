import React from 'react';
import Sch from './assets/school.JPG'
import Cch from './assets/collage.jpg'
import Tch from './assets/Greens.jpg'
import Atm from './assets/veera7.jpg'
import Btm from './assets/veera10.jpg'
import Face from './Icone/facebook.png'
import Iace from './Icone/instagram.png'
import Gace from './Icone/social.png'
import Lace from './Icone/linkedin.png'
import Tace from './Icone/twitter.png'
import Yace from './Icone/youtube.png'
import'./Education.css'

function Education(props) {
    return (
        <div>
           <h1 id='mmm' style={{textAlign:"center"}}>EDUCATION </h1> <br></br><br></br><br></br>
           <h1>Academic Profile :</h1>
           <div className='School'>
             <div className='block'>
            <h1>School :</h1><br></br>
            
                <h2>I'm Studied For School, Pope Memorial Higher Secondary School, Sawyerpuram in 2016 To 2020.</h2><br></br>
                <h2>I Completed SSLC and HSC As a Same School.</h2><br></br>
                <h2>I Am Completed +1 And +2 Coumputes science Group</h2>
            
            </div>

            <img src={Sch} className='simg'></img>
           </div>

           <div className='Atm' style={{backgroundImage:`url(${Atm})`}}>
                 <h1 className='Quets'>Continuous learning is the minimum requirement for success in any field.</h1>
            </div>
           
           <div className='Collage'>
            <div className='block1'>
            <h1>Collage :</h1><br></br>
             <h2>I'm Studied For Collage, Pope's Collage of Arts And Science, Sawyerpuram in 2020 To 2023.</h2><br></br>
             <h2>I Completed Bachelor of Science in Information Technology in 74.8% and GPA :7.8.</h2><br></br>
             <h2>I Completed Added Courses, Computer Hardware Maintenance </h2>
             </div>
             <img src={Cch} className='cimg'></img>
            </div><br></br>

            <div className='Btm' style={{backgroundImage:`url(${Btm})`}}>
                 <h1 className='Buets'>Education is one thing no one can take away from you.</h1>
            </div>
           

            <div className='Greens'>
            <div className='block2'>
            <h1>Technology :</h1><br></br>
             <h2>I'm Studied For Fullstack FrontEnd Course For Greens Technology ,Porur in Augest 15 To November 20 ,2023</h2><br></br>
             <h2>I Completed FrontEnd Languge For HTML ,CSS , JAVASCRIPT.</h2><br></br>
             <h2>I Completed FrontEnd Framework/Libraries : REACT JS </h2>
             </div>
             <img src={Tch} className='Timg'></img>
            </div>


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

export default Education;