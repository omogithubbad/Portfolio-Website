import React from 'react';
import Myworld from '../components/Myworld';
import Experience from '../components/Experience';
import Travelling from '../components/Travelling';
import Mydesign from '../components/Mydesign';
// import Contactabout from '../components/Contactabout';
import Navbar from '../components/Navbar';
import Contactus from '../components/Contactus';

const About = () => {
  return (
    <div>
      <Navbar />
      <Myworld />
      <Experience />
      <Travelling />
      <Mydesign />
      <Contactus />
      {/* <Contactabout /> */}
    </div>
  );
};

export default About;
