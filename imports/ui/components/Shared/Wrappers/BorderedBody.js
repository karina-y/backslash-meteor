/*
created by: karina
created date: 11/16/17
*/


import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap'
import "./BorderedBody.less";


class BorderedBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      compensateNav: Meteor.user() ? "compensate-dual-nav" : "compensate-single-nav",
      additionalOuterClasses: props.additionalOuterClasses,
      additionalInnerClasses: props.additionalInnerClasses,
      component: props.component,
      pageTitle: props.pageTitle,
      heroImage: props.heroImage,
      heroCharacter: props.heroCharacter,
      characterPlacement: props.characterPlacement
    }
  }

  render() {
    const additionalOuterClasses = this.props.additionalOuterClasses != null ? this.props.additionalOuterClasses : "";
    const additionalInnerClasses = this.props.additionalInnerClasses != null ? this.props.additionalInnerClasses : "";
    const size = this.props.size != null ? "bordered-body-" + this.props.size : "";

    const outerClassName = "bordered-body " + this.state.compensateNav + " " + additionalOuterClasses;
    const innerClassName = size + " content-container-level-1 " + additionalInnerClasses;

    const backgroundImage = "url('" + this.props.heroImage + "')";

    const component = this.props.component;

    return (
      <div className={outerClassName}>

          <section className="parallax-top">
              <div className="parallax-bg" style={{backgroundImage: backgroundImage}}></div>
              <div className="md-box">
                  <Image src={this.props.heroCharacter} className={this.props.characterPlacement} />
              </div>
          </section>

          <div className={innerClassName}>
              <div className="content-container-level-2">

                  <section className="full-content-section">

                      <div className="page-title"><p>{this.props.pageTitle}</p></div>
                      <div className="content-container-level-3">

                          {React.createElement(component)}

                      </div>
                  </section>

              </div>
          </div>
      </div>
    )
  }
}

BorderedBody.propTypes = {
  additionalOuterClasses: PropTypes.string,
  additionalInnerClasses: PropTypes.string,
  component: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroCharacter: PropTypes.string.isRequired,
  characterPlacement: PropTypes.string.isRequired
};

export default BorderedBody;