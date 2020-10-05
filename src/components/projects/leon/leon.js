import React from 'react';
import Slider from 'react-slick';
import styles from './leon.module.scss';
import gif from '../../../img/ezgif.com-gif-maker.gif';
import landing from '../../../img/leonlandingas.png';
import mainPage from '../../../img/leonmain.png';
import schedule from '../../../img/leon.png';

const Leon = () => {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    touchMove: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };
  return (

    <div className={styles.leon}>
      <div style={{ padding: '2em' }}>
        <h3>LEON - Learn Online</h3>
      </div>
      <div className={styles.carousel}>
        <Slider className={styles.slider} {...settings}>
          <div>
            <img src={gif} alt="gif" />
          </div>
          <div>
            <img src={landing} alt="landing" />
          </div>
          <div>
            <img src={schedule} alt="schedule" />
          </div>
          <div>
            <img src={mainPage} alt="main" />
          </div>
        </Slider>
        <div className={styles.text}>
          <div className={styles.pBackground}>
            <p>
              LEON is an online platform for schools to help teachers teach online. It was designed to be
              an
              all-in-one place for teachers and students to have the best possible experience while
              learning from
              distance. It includes video-chat, timetable, homework area, reminders and other.
            </p>
            <p>It was developed in a team of 6 developers, where my role was full-stack developer.</p>

            <p>Technologies used: Java, React.js, AntDesign, TypeScript, Sass, GitLab,</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Leon;
