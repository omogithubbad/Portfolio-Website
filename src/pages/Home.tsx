import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import Choseme from '../components/Choseme';
import Workflow from '../components/Workflow';
// import Projects from '../components/Projects';
import Offers from '../components/Offers';
import Aboutme from '../components/Aboutme';
// import Sucessstories from '../components/Sucessstories';
import Contactus from '../components/Contactus';
import Overview from '../components/Overview';
import Myprojects from '../components/Myprojects';
import Sucessstories from '../components/Sucessstories';
// @ts-ignore: module has no declaration file

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Choseme />
      <Myprojects />
      {/* <Projects /> */}
      <Workflow />
      <Offers />
      <Aboutme />
      <Overview />
      <Sucessstories />
      <Contactus />
    </div>
  );
};

export default Home;
