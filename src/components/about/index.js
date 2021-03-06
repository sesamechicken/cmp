/* eslint-disable max-len */
import React from 'react';
import { Grid } from '@mui/material';
import './about.css';
import headshot from './headshot.jpg';

const About = () => {
  return (
    <div className="about-container">
      <Grid container>
        <Grid item xs={12} md={12}>
          <img alt="headshot" src={headshot} align="left" style={{ marginTop: '1em', marginBottom: '2em', maxWidth: '100%' }} />
          <p>
            My name is Caleb Parks, I’m a junior at Columbia College Chicago. I’m in the fashion photography
            program and hope to one day get a job for a publication as a lead photographer or creative director.
            I currently am collaborating with a European advertising agency called The Modern Society which introduced me to working with Prada. Even before attending Columbia College Chicago, I worked freelance as a photographer in my early teens.
            I have advanced experience working on location as well as in a photography studio. I specialize in fashion editorials, portraiture, and commercial images. I have been trained professionally in retouching, project management and lighting.
            People that I’ve worked with professionally include Photographer Verser Engelhard, Photographer Peter Maloy, The Modern Society advertising agency, COMPLEX Strategist Christian Anderson-Blakely.
          </p>
          <p>
            <a href="https://www.dropbox.com/s/5d4pjql452ihs2h/Parks_Caleb_Resume.pdf?dl=1" rel="noreferrer" target="_blank" className="resume-link">View resume</a>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
