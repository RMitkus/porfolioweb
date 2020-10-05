import React from 'react';
import styles from './projects.module.scss';
import Leon from './leon/leon';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
  };
  return (
    <div className={styles.projects}>
      <Leon />
    </div>
  );
};

export default Projects;
