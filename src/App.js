import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import Home from './components/home/home';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import './App.scss';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  const [homeState, homeToggle] = useState(0);
  const [aboutState, aboutToggle] = useState(3000);
  const [worksState, worksToggle] = useState(-3000);
  const [projectSlideState, setProjectSlideState] = useState(true);
  const [aboutSlideState, setAboutSlideState] = useState(false);

  const workProps = useSpring({
    from: { marginLeft: 3000, opacity: 0 },
    to: { marginLeft: worksState, opacity: 1, display: projectSlideState ? 'none' : 'block' },
    config: config.wobbly,
  });

  const aboutProps = useSpring({
    from: { marginLeft: 3000, opacity: 0 },
    to: { marginLeft: aboutState, opacity: 1, display: aboutSlideState ? 'block' : 'none' },
    config: config.wobbly,
  });
  const homeProps = useSpring({
    from: { marginTop: -500, opacity: 0 },
    to: { marginTop: homeState, opacity: 1, display: (homeState === -3000) ? 'none' : 'block' },
    config: config.slow,
  });

  const aboutHandler = () => {
    worksToggle(-3000);
    homeToggle(-3000);
    aboutToggle(0);
    setTimeout(() => {
      setProjectSlideState(true);
    }, 100);
    setTimeout(() => {
      setAboutSlideState(true);
    }, 100);
  };
  const homeHandler = () => {
    homeToggle(0);
    aboutToggle(3000);
    worksToggle(-3000);
    setTimeout(() => {
      setProjectSlideState(true);
    }, 100);
    setTimeout(() => {
      setAboutSlideState(false);
    }, 100);
  };

  const worksHandler = () => {
    homeToggle(-3000);
    aboutToggle(3000);
    worksToggle(0);
    setTimeout(() => {
      setProjectSlideState(false);
    }, 100);
    setTimeout(() => {
      setAboutSlideState(false);
    }, 100);
  };
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    width: '100vw',
    height: '100vh',
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const flip = () => { set((state) => !state); };

  return (

    <div className="App">
      {flipped ? null : (
        <animated.div style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
          <Navbar
            homeHandler={() => homeHandler()}
            aboutHandler={() => aboutHandler()}
            workHandler={() => worksHandler()}
          />

          <animated.div
            style={homeProps}
          >
            <Home />
          </animated.div>

          <animated.div
            style={workProps}
          >
            <Projects />
          </animated.div>

          <animated.div
            style={aboutProps}
          >
            <About contactForm={flip} />
          </animated.div>
        </animated.div>
      )}
      <animated.div style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}>
        {flipped ? <Contact contactForm={flip} /> : null}
      </animated.div>

    </div>

  );
}

export default App;
