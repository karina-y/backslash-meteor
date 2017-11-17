import React from 'react';
import { Button, Image } from 'react-bootstrap'

import './Index.less';
import FullWidthBody from '../../components/Shared/Wrappers/FullWidthBody'

const Index = () => (
  <FullWidthBody additionalOuterClasses="index">

    <div className="home-parallax-container">
      <section className="parallax-top">
        <div className="parallax-bg"></div>
        <div className="md-box">
          <Image src="/images/home/lagerfeld-rb_comic.png" className="left-lagerfeld" />
        </div>
      </section>

      <section className="description-container">
        {/*website summary/description here*/}
      </section>

      <section className="parallax-bottom">
        <div className="parallax-bg"></div>
        <div className="md-box">
          <Image src="/images/home/lagerfeld-lb_comic.png" className="right-lagerfeld" />
        </div>
      </section>

    </div>

  </FullWidthBody>
);

export default Index;
