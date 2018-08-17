import React from 'react';
import { Wrapper, Container, Logo, Search, Nav } from './Header.style';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo />
          <Search />
          <Nav>
            <div className="nav-container">
              <div className="nav-explore">
                <a href="#" role="button">
                  <span className="explore-icon" />
                </a>
              </div>
              <div className="nav-activity">
                <a href="#" role="button">
                  <span className="activity-icon" />
                </a>
              </div>
              <div className="nav-profile">
                <a href="#" role="button">
                  <span className="profile-icon" />
                </a>
              </div>
            </div>
          </Nav>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
