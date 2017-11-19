/*
created by: karina
created date: 11/16/17
*/


import React from 'react';
import PropTypes from 'prop-types';
import "./FullWidthBody.less";


class FullWidthBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      compensateNav: Meteor.user() ? "compensate-dual-nav" : "compensate-single-nav",
      additionalOuterClasses: props.additionalOuterClasses
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    Meteor.call('tags.view.all', function(err, response) {
      console.log("err", err);
      console.log("reponse", response);
    });
  }

  render() {
    const additionalOuterClasses = this.props.additionalOuterClasses != null ? this.props.additionalOuterClasses : "";

    const outerClassName = "full-width-page " + this.state.compensateNav + " " + additionalOuterClasses;

    return (
      <div className={outerClassName}>
        {this.props.children}
      </div>
    )
  }
}

FullWidthBody.propTypes = {
  additionalOuterClasses: PropTypes.string
};

export default FullWidthBody;




