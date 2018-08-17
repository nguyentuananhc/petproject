import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 77px;
  justify-content: center;
  max-width: 1010px;
  padding: 26px 40px;
  transition: height 0.2s ease-in-out;
  width: 100%;
`;

const Logo = styled.div`
  flex: 1 9999 0%;
  min-width: 40px;
`;

const Search = styled.div`
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 0%;
  justify-content: flex-end;

  .nav-container {
    display: flex;
    flex-direction: row;
    padding-left: 24px;
    white-space: nowrap;

    div:not(:first-child) {
      margin-left: 30px;
    }

    a {
      color: #003569;
      text-decoration: none;
    }

    span {
      display: block;
      overflow: hidden;
      text-indent: 110%;
      white-space: nowrap;
    }

    .nav-explore {
      .explore-icon {
        background-image: url(https://goo.gl/NLUdLH);
        background-position: -408px -156px;
        height: 24px;
        width: 24px;
        display: inline-block;
      }
    }

    .nav-activity {
      .activity-icon {
        background-image: url(https://goo.gl/NLUdLH);
        background-position: -408px -156px;
        height: 24px;
        width: 24px;
        display: inline-block;
      }
    }

    .nav-profile {
      .profile-icon {
        background-image: url(https://goo.gl/NLUdLH);
        background-position: -408px -156px;
        height: 24px;
        width: 24px;
        display: inline-block;
      }
    }
  }
`;

export { Wrapper, Container, Logo, Search, Nav };
