import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { useSpring, animated } from 'react-spring';
import Toggle from '../Toggle/Toggle';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

const App = () => {

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  

  return (
    <animated.div className="App" style={fade}>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>
    </animated.div>
  );

}

export default App;
