import React from 'react';
import { Wrapper, Container, Logo, Search, Nav } from './Header.style';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo>
            <a className="logo-icon" href="/">Instagram</a>
          </Logo>
          <Search>
            <input className="input-search" type="text" autoCapitalize="none" placeholder="Tìm kiếm"/>
            <span className="search-span search-icon"></span>
            {/* <div className="dialog" role="dialog"></div> */}
            <div className="cancel-span cancel-icon" role="button" tabIndex="0"></div>
          </Search>
          <Nav>
            <div className="nav-container">
              <div className="nav-explore">
                <a className="explore-icon" href="#" role="button">
                </a>
              </div>
              <div className="nav-activity">
                <a className="activity-icon" href="#" role="button">
                </a>
              </div>
              <div className="nav-profile">
                <a className="profile-icon" href="#" role="button">
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
