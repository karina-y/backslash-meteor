import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Bert } from 'meteor/themeteorchef:bert';

import '../../stylesheets/app.less';
import '../../components/Footer/Footer.less';

import Header from '../../components/Navigation/Navigation';
// import SubHeader from '../../components/SubHeader/SubHeader';
import Authenticated from '../../components/Shared/RouteComponents/Authenticated';
import Public from '../../components/Public/Public';
// import { buildSubNavBasedOnUserRole } from '../../components/SubHeader/SubHeaderHelpers';
import BulletProof from '../../components/Shared/RouteComponents/BulletProof';

import Index from '../../pages/Index/Index';
import Login from '../../pages/Login/Login';
import Logout from '../../pages/Logout/Logout';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../../components/Footer/Footer'
import BorderedBody from '../../components/Shared/Wrappers/BorderedBody'
import Inspiration from '../../components/Inspiration/Inspiration'
// import UserEnums from '../../../api/Users/enums';

// const userRoles = UserEnums.USER_ROLE_ENUM;

let navClassNames;  //the class 'sub-navbar-exists' indicates our navbar height will be 100px, instead of 50px;

const App = props => (
  <Router>
    {!props.loading
      ?
      <div className="App">

        {/*should be props.authenticated*/}
        <div className={(false && props.emailVerified) ?
          navClassNames = "sub-navbar-exists nav-down navbar-container" :
          navClassNames = "nav-down navbar-container" }>

          {/*should be props.authenticated*/}
          <Header {...props}
                  authenticated={false}
                  emailVerified={props.emailVerified} />

        </div>


        <Switch>
          <Route exact
                 name="index"
                 path="/"
                 render={() => (
                   <Index />
                 )}/>


          <Route exact
                 name="inspiration"
                 path="/inspiration"
                 render={(props) => (
                   <BorderedBody {...props}
                                 additionalOuterClasses="inspiration"
                                 heroImage="/images/hero/modern_girl.jpg"
                                 heroCharacter="/images/inspiration/anna-lb-text_comic.png"
                                 characterPlacement="right"
                                 pageTitle="Inspiration"
                                 component={Inspiration}
                   /> )} />

          {/*
              <BulletProof exact
                           path="/job-postings"
                           component={JobPostings}
                           rolesAllowed={[userRoles.companyAdmin, userRoles.employee, userRoles.admin]}
                           checkAuthorization={true}
                           checkTargetUserVerification={false}
                           isEditingProfile={false}
                           {...props} />




              <Public path="/login" component={Login} {...props} />

              <Route path="/logout" component={Logout} {...props} />

              <Route exact name="user-signup" path="/user-signup/:id" render={(props) => (<UserSignup {...props} userRole={userRoles.candidate} />)} />

              <Authenticated exact path="/email-verified" component={EmailVerifiedPage} {...props}/>

              <Route component={NotFound} />
              */}
        </Switch>

        <Footer/>
      </div>
      :
      ''
    }
  </Router>
);

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  // userSubscription: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// const getUserName = name => ({
//   string: name,
//   object: `${name.first} ${name.last}`,
// }[typeof name]);

export default createContainer(() => {

  //todo change this
  const loading = false;

  return {
    loading: loading,
    // loggingIn,
    // authenticated: !loggingIn && !!userId,
    // name: name || emailAddress,
    // roles: !loading && Roles.getRolesForUser(userId),
    // userData: userSubscription,
    // user: user,
    // emailVerified: user && user.emails[0].verified,
    // userProfile: userProfile //not the user object, but the user role (i.e. candidate, company and etc.)
  };
}, App);
