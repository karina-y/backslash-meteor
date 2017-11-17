import React from 'react';
import PropTypes from 'prop-types';

import './AccountPageFooter.less';

const AccountPageFooter = ({ children }) => (
  <div className="AccountPageFooter">
    {children}
  </div>
);

AccountPageFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccountPageFooter;
