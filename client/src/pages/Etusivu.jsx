import React, { useEffect } from 'react';
import styled from 'styled-components';

import TarinatContainer from '../components/Etusivu/TarinatContainer';
import KayttajatContainer from '../components/Etusivu/KayttajatContainer';
import MatkakohteetContainer from '../components/Etusivu/MatkakohteetContainer';
import PageHero from '../components/Etusivu/PageHero';
import AlaBanneri from '../components/Etusivu/AlaBanneri';

const Etusivu = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <Wrapper>
      <PageHero />
      <MatkakohteetContainer />
      <KayttajatContainer />
      <TarinatContainer />
      <AlaBanneri />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

export default Etusivu;
