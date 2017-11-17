import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { year } from '../../../modules/dates';

import './Footer.less';

const copyrightYear = () => {
  const currentYear = year();
  return currentYear === '2017' ? '2017' : `2017-${currentYear}`;
};

const Footer = () => (
  <div className="Footer">
    <div className="social-links">
      <a href="http://github.com/karina-y" target="_blank"><i className="fa fa-github fa-3x"></i></a>
      <a href="http://linkedin.com/in/karinayeznaian" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
    </div>
    <br />
    <p className="text-center">This application is purely for demo purposes. All art belongs to original owners.</p>
  </div>
);

Footer.propTypes = {};

export default Footer;
