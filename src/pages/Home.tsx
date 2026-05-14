import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import Choseme from '../components/Choseme';
import Workflow from '../components/Workflow';
import Projects from '../components/Projects';
import Offers from '../components/Offers';
import Aboutme from '../components/Aboutme';
import Sucessstories from '../components/Sucessstories';
import Contactus from '../components/Contactus';
// @ts-ignore: module has no declaration file



const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Choseme />
      <Projects />
      <Workflow />
      <Offers />
      <Aboutme />
      <Sucessstories />
      <Contactus />
    </div>
  );
};

export default Home;
