// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Skill from './Skill'
import Introduction from './Introduction'
import Project from './Project'
import Qualification from './Qualification'
import Hobbies from './Hobbies'
import About_us from './About_us'
import Contect from './Contect'
import Defealt from './Defealt'
import Expireance from './Expireance'
import Counters from './Counters'



function App() {

  const obj ={
      skills : {
      des: 'My Skill',
      First:['Html','css','Js','React']

    },
   intro : {
      des: 'Introduction',
      First: [
        "Hi, I'm a Web Developer 👋",
       "My goal is to become a full-stack developer and earn money 💻",
        "I am a passionate web developer with knowledge of HTML, CSS, JavaScript, and React."
             ]
        },
  
         Projects : {
          des : 'My Projects 🚀',
          projname : [" Spotify Responsive Clone"," Google Meet Clone","Google Classroom Clone","Google Drive Clone","Gmail Clone","ChatGPT Clone"," Netflix Clone"," VS Code Clone","Blinkit Clone"]
        },

         Qualifi :{
          dec : "Qualification",
          name : {
           Tenth : "Goverment",
          Twelfth:"Goverment",
          College : "Nthware institued "
          }
        },

         Hobbs :{
          Ho : 'My Hobbies',
          Hobname : ["💻 Codin  I enjoy learning new programming languages and building projects.g","🎮 Gaming I like playing games like Free Fire and exploring new games.","🎵 Music  Listening to music helps me relax and stay focused.","📚 Learning  I love learning new technologies and improving my skills.","🎬 Watching Videos I enjoy watching tech and entertainment videos on YouTube.","✈️ Travelling I like exploring new places and cultures."]
        },


         Abou : {
          dec : "About_us",
          name :"  Hello! My name is [Your Name]. I am a passionate web developer who lovescreating modern and responsive websites.  I have skills in HTML, CSS, JavaScript, and React. I enjoy learning new technologies and improving my coding skills every day. I am currently working on real-world projects like tourism and restaurantwebsites. My goal is to become a full-stack developer and start earningthrough freelancing and online work.  🚀 Always learning | 💻 Coding lover | 🎯 Goal-oriented "
        }
  }



  return (
    
    <BrowserRouter>
    <Defealt/>
    <Routes>

    <Route path='/' element={<Introduction intro ={obj.intro}/>}/>    
    <Route path='/Skill' element={<Skill skills={obj.skills}/>}/>  
    <Route path='/Project' element={<Project Project = {obj.Projects}/>}/>
    <Route path='/Qualification' element={<Qualification Quali={obj.Qualifi}/>}/>
    <Route path='/Hobbies' element={<Hobbies Hobb={obj.Hobbs}/>}/>
    <Route path='/Expireance' element={<Expireance/>}/>
    <Route path='/About_us' element={<About_us abus={obj.Abou}/>}/>
    <Route path='/Contect' element={<Contect/>}/>
    <Route path='/Counters' element = {<Counters/>}/> 

    

ex
    </Routes>
    
    
    </BrowserRouter>
     
    )
}

export default App
