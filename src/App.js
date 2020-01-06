import React from 'react';
import s from  './App.module.scss';
import Header from './Header/Header';
import About from './AboutUs/About';
import Service from './Service/Service';
import Projects from './Projects/Projects';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';
import {Element} from 'react-scroll'

const App=()=> {
  return (
    <div className={s.Main}>
      <Header/>
      <Element name='aboutus'>
      <About/>
      </Element>
      <Element name='services'>
      <Service/>
      </Element>
      <Element name='projects'>
      <Projects/>
      </Element>

      <Testimonials/>
      <Element name='footer'>
      <Footer/>
      </Element>
      
    </div>
  );
}

export default App;
