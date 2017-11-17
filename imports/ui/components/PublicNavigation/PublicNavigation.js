import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Image, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap'

const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="/home/about">
      <NavItem eventKey={1}>
        <div className="button-icon-container">
          <Image src="/images/navbar/about_comic.png" />
        </div>
      </NavItem>
    </LinkContainer>

    <LinkContainer to="/profile/home">
      <NavItem eventKey={2}>
        <div className="button-icon-container">
          <Image src="/images/navbar/home_comic.png" />
        </div>
      </NavItem>
    </LinkContainer>

    <LinkContainer to="/inspiration">
      <NavItem eventKey={3}>
        <div className="button-icon-container">
          <Image src="/images/navbar/search_comic.png" />
        </div>
      </NavItem>
    </LinkContainer>

    {/*
    <NavDropdown title="Account" eventKey={4} id="dropdown">
      <Image src="/images/navbar/account_comic.png" />

      <LinkContainer to="/manage/index">
        <NavItem eventKey={4.1}>
          <div className="button-icon-container">
            <Image src="/images/navbar/manage_comic.png" />
          </div>
        </NavItem>
      </LinkContainer>

      <MenuItem divider />

      <LinkContainer to="/manage/index">
        <NavItem eventKey={4.1}>
          <div className="button-icon-container">
            <Image src="/images/navbar/manage_comic.png" />
          </div>
        </NavItem>
      </LinkContainer>

      <MenuItem divider />

      <LinkContainer to="/">
        <NavItem eventKey={4.2} onClick={() => history.push('/logout')}>
          <div className="button-icon-container">
            <Image src="/images/navbar/logoff_comic.png" />
          </div>
        </NavItem>
      </LinkContainer>

      <MenuItem divider />

      <LinkContainer to="/account/register">
        <NavItem eventKey={4.3}>
          <div className="button-icon-container">
            <Image src="/images/navbar/signup_comic.png" />
          </div>
        </NavItem>
      </LinkContainer>

      <MenuItem divider />

      <LinkContainer to="/account/login">
        <NavItem eventKey={4.4}>
          <div className="button-icon-container">
            <Image src="/images/navbar/login_comic.png" />
          </div>
        </NavItem>
      </LinkContainer>

    </NavDropdown>
    */}


  </Nav>
);

export default PublicNavigation;
