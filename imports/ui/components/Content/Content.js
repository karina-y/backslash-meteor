/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

import './Content.less';

const Content = ({ content }) => (
  <div className="Content" dangerouslySetInnerHTML={{ __html: content }} />
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
