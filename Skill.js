import React from 'react';
import STR from './assets/veera2.jpg'
import Face from './Icone/facebook.png'
import Iace from './Icone/instagram.png'
import Gace from './Icone/social.png'
import Lace from './Icone/linkedin.png'
import Tace from './Icone/twitter.png'
import Yace from './Icone/youtube.png'
import './skill.css'

function Skill(props) {
    return (
        <div>
            <br></br>
             <h1 style={{textAlign : 'center'}}>SKILLS</h1> <br></br><br></br>
             <h1>Key Skills</h1> <br></br>
             <h2 className='h2'>FrontEnd Developemente Kit</h2>
             <div>
            <br></br>
             <ul className='uli'>
                <li>HTML</li><br></br>
                <li>CSS</li><br></br>
                <li>JAVASCRIPT</li><br></br>
                <li>REACT JS</li><br></br>
             </ul>
             </div>
             <div className='str' style={{backgroundImage : `url(${STR})`}}>
             </div>
             <br></br><br></br>
             <div>
               <h1>What Is a Front End Developer?</h1>
               <br></br>
               <p>A front end developer, also known as a front end web developer, is a professional responsible
                 for the design and implementation of the interface. The users require this interface so that they
                  can access the application in question. A web designer is a professional who creates a website’s 
                  appearance and design. And the front end developer makes sure that the design works online by using 
                  coding languages such as CSS, HTML, and JavaScript.</p>
                  <br></br>
                  <p>We should pause for a moment to clarify the differences between a front end developer, 
                    back end developer, and full stack developer. Let’s put this in simple terms: a front end developer
                     is responsible for the parts of an app or website that users see and interact with. 
                     A back end developer takes care of the “behind the scenes” matters such as infrastructure 
                     and databases. The full-stack developer is a mixture of both, a jack of all trades that can handle
                      the whole design process from the beginning to the end.</p><br></br><br></br>
                
                <h1>Front End Developer Roles and Responsibilities</h1><br></br>
                <ul className='uli'>
                    <li>Decide web page design and structure</li><br></br>
                    <li>Develop features to enhance the users’ experience</li><br></br>
                    <li>Striking a balance between functional and aesthetic design.</li><br></br>
                    <li>Make sure the web design is smartphone-capable</li><br></br>
                    <li>Build reusable code for future use</li><br></br>
                    <li>Make sure web pages are optimized for best speed and scalability</li><br></br>
                    <li>Employ a diverse selection of markup languages to design web pages</li><br></br>
                </ul>
                <br></br>
                <h1>how to become front end developer ?</h1><br></br>
                <ul>
                    <li><h2>Step 1: Learn CSS, JavaScript and HTML</h2></li><br></br>
                    <li><h2>Step 2: Get Informed</h2></li><br></br>
                    <li><h2>Step 3: Practice</h2></li><br></br>
                    <li><h2>Step 4: Learn the Command Line</h2></li><br></br>
                    <li><h2>Step 5: Learn Version Control</h2></li><br></br>
                    <li><h2>Step 6: Enhance Your Skills</h2></li>
                </ul>
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

export default Skill;