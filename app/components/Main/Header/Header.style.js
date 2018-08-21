import styled from 'styled-components';
const path = require('path');
const url = path.resolve('images/sprite.png')

console.log(url)

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


  .logo-container {
    margin-right: 12px;
    margin-top: -4px;
    max-width: 100%;
    overflow: hidden;
    position: relative;
  }

  .logo-icon {
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
    background-image: url('/images/sprite.png');
    background-position: -176px 0px;
    background-size: 405px 379px;
    height: 32px;
    width: 175px;
  }


  }
`;

const Search = styled.div`
  min-width: 125px;
  width: 215px;
  height: 28px;
  position: relative;

  .input-search {
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    padding: 3px 10px 3px 26px;
    z-index: 2;
  }

  .input-search:placeholder-shown {
    font-size: 16px;
  }

  .search-span {
    left: 11px;
    position: absolute;
    top: 9px;
    z-index: 2;
  }

  .search-icon {
    background-image: url('/images/sprite.png');
    background-position: -227px -113px;
    background-size: 405px 379px;
    height: 10px;
    width: 10px;
  }

  /* .dialog {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  } */

  .cancel-span {
    position: absolute;
    z-index: 3;
    right: 15px;
    top: 6px;
  }

  .cancel-icon {
    background-image: url('/images/sprite.png');
    background-position: -387px -47px;
    background-size: 405px 379px;
    height: 14px;
    width: 14px;
  }

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

    span {
      display: block;
      overflow: hidden;
      text-indent: 110%;
      white-space: nowrap;
    }

    a {
      color: #003569;
      text-decoration: none;
    }

    .nav-explore {
      .explore-icon {
        background-image: url('/images/sprite.png');
        background-position: -51px -356px;
        background-size: 405px 379px;
        height: 22px;
        width: 22px;
        display: inline-block;
      }
    }

    .nav-activity {
      .activity-icon {
        background-image: url('/images/sprite.png');
        background-position: -126px -332px;
        background-size: 405px 379px;
        height: 22px;
        width: 22px;
        display: inline-block;
      }
    }

    .nav-profile {
      .profile-icon {
        background-image: url('/images/sprite.png');
        background-position: -309px -177px;
        background-size: 405px 379px;
        height: 22px;
        width: 22px;
        display: inline-block;
      }
    }
  }
`;

export { Wrapper, Container, Logo, Search, Nav };
