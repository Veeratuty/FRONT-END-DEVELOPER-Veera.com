import React, { version } from 'react';
import './Abouts.css'
import { useState } from "react";
import ABI from './assets/veera9.jpg'
import MBI from './assets/deve.webp'
import RES from './assets/resume.jpeg'
import Face from './Icone/facebook.png'
import Iace from './Icone/instagram.png'
import Gace from './Icone/social.png'
import Lace from './Icone/linkedin.png'
import Tace from './Icone/twitter.png'
import Yace from './Icone/youtube.png'

function Abouts() {
    
    const [Firstname,setFirstname] = useState('');
    const [Lastname,setLastname] = useState('');
    const [Emil,setEmail] = useState('');
    const [error,setError] = useState('')
    const [error1,setError1] = useState('')
    const [error2,setError2] = useState('')
    const [submitted, setSubmitted] = useState(false);

   
    const handleSubmit = (e)=>{
        e.preventDefault();

        if (Firstname == "" ||
            Lastname == "" ||
            Emil == "" ) {
           

           alert("please fill all fileds")
    
        }
        else if (Firstname.length <=3 || Firstname.length >=10 ) {
            setError("Enter name grterthen 3 word or lessthen 10 word")
            return false;
         }
         else if (Lastname.length <=3 || Lastname.length >=10 ) {
            setError1("Enter name grterthen 3 word or lessthen 10 word ")
            return false;
         }
          else if(!Emil.endsWith('.com')) {
             
              setError2(" Email Must endswith .com")
         }
         
         else{
            alert('HI   '+`${Firstname} ${Lastname}`+'   : contect Number : +91 9384143446')
         }
          setSubmitted(true);
    }


    return (
        <div className='santhiya1' >
            <h1 className='h1'>CONTECT ME :</h1><br></br>
            <div className='valid' style={{backgroundImage: `url(${MBI})`}}>
                <h1>Contect Me Please Fill The From</h1>
            <form onSubmit={handleSubmit}>
               <h2 className='vv1'> First Name:  <input type='text' value={Firstname} onChange={(e)=>setFirstname(e.target.value)}></input></h2>             {error && <div><span>{error}</span></div>}
               <h2 className='vv2'> Last Name:   <input type='text' value={Lastname} onChange={(e)=>setLastname(e.target.value)}></input></h2>
               {error1 && <div><span>{error1}</span></div>}
               <h2 className='vv3'> Enter Mail : <input type='mail'value={Emil} onChange={(e)=>setEmail(e.target.value)}></input></h2>
               {error2 && <div><span>{error2}</span></div>}
               <h2 className='vv4'> Comment :  <textarea></textarea></h2>
               <button type='submit'>Submit</button>
               {submitted && <p>Form submitted!</p>}
              
            </form>
            </div><br></br>
            
            

        <div className='Black' style={{backgroundImage: `url(${ABI})`}}>
            <h2 className='aboutjs'>Our accomplishments are a result of hard work, team spirit and determination</h2>
        </div><br></br><br></br>
           <h1>  MY RESUME :</h1>
           <div className='resume' style={{backgroundImage: `url(${RES})`}}></div> <br></br><br></br>

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

export default Abouts;