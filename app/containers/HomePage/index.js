import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Instagram } from 'react-content-loader';
import { FadeIn } from 'animate-components';
import Title from '../../components/Other/title';
import Header from '../../components/Main/Header';
import Posts from '../../components/Main/Posts';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {
    loading: true,
  };
  render() {
    const { loading } = this.state;
    return (
      <div>
        <FadeIn duration="300ms">
          <Title value="Home" />
          <Header />
          <section style={{ width: '70%', margin: '0 auto' }}>
            <Posts />
          </section>
        </FadeIn>
      </div>
    );
  }
}
