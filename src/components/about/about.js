import React from 'react';
import styles from './about.module.scss';
import face from '../../img/rytis.jpg';

const About = ({ contactForm }) => {
  const as = 0;
  return (
    <div className={styles.about}>
      <h3>Who am I?</h3>
      <div className={styles.text}>
        <img src={face} alt="img" />
        <p>
          One can say that I am always looking for new challenges. I did my service at
          Armed Forces, then wanted to learn everything possible about coffee, so I
          worked at one of the best coffee shops around. Then I got tired of corruption
          and joined Law enforcement organization, which fights corruption.
        </p>
        <p>
          One thing led to another and here I am, trying my best to make the world a better
          place creating beautiful websites.
          For the last year I have been diving deep into web development. Started with the PHP,
          but found the biggest interest in frontend development. I found passion in creating
          interactive and responsive websites.
        </p>
        <p>
          Technologies that became my best friends recently are React.js and Sass. Though I choose
          to write custom CSS, but I am also familiar with CSS frameworks such as
          Bootstrap or Ant-Design.
        </p>
        <p>
          If you would like to see me sitting next to you and working with you
          just drop me a
          {' '}

          <button onClick={contactForm}>message!</button>
        </p>
      </div>
    </div>
  );
};

export default About;
