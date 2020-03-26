import React from 'react';
import Nav from './Nav';
import './App.css';

import usrdata from './user.json'
import Landpage from './Landpage'
import Usertype from './Usertype'
import Jobicon from './Jobicon'
import jobic from './icons.json'
import image from './img.json'
import Card from './Card'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Nav />
      <Landpage />

      <div className="usertype">
  {usrdata.map((el)=>{return <Usertype head1={el.head1} head2={el.head2}  />})}
      </div>

      <div className="topjob">
        <div><h4>Top Job Roles</h4></div>
        <div className="topjobs">
        {jobic.map((el,index)=>{return (<Jobicon key={index} elem={el} /> )})}
        {jobic.map((el)=>{console.log(el.icn) })}
        </div>
      </div>
      <div className="middle">
        <div className="banner">
          <img src={require('./assets/people.png')} alt="people" />
          <div className="bannercontent">
            <h4>Welcome On Bord.. </h4>
            <h2>Let's Drive To The Desired</h2><h2>Destination!!</h2>
            <p>As a Job seeker, do you feel your educational qualification is not sufficient for the job you desire?
               The process is simple! Whether you are looking for a job or a career change,
               whatever be your educational qualification, step into The Job Bank.</p>

          </div>
        </div>
        <h4>major service</h4>
        <div className="cardcontainer">
        {image.map((el)=>{return <Card img={el.im} />})}
        </div>

      </div>
      <div className="lbaner">
        <p>We are determined to be a Global Job Player by aligning
           our growth to the needs of industry and job-ready work force. We put the Jobless to Work.</p>
           <img src={require(`./assets/imgx.png`)} alt="image" />
      </div>
      <Footer />
      <div className="footer">
        <p>© Copyright 2019 The Job Bank</p>
      </div>
    </div>
  );
}

export default App;
