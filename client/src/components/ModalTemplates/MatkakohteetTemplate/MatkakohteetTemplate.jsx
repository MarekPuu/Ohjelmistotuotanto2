import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ResuableComponents/Button';
import LisaaMatkakohde from './LisaaMatkakohde';
import PoistaMatkakohde from './PoistaMatkakohde';
import MuokkaaMatkakohdetta from './MuokkaaMatkakohdetta';

const templates = { Lisaa: 'Lisaa', Poista: 'Poista', Muokkaa: 'Muokka' };

const MatkakohteetTemplate = () => {
  const [template, setTemplate] = useState(templates.Lisaa);

  const getTemplate = () => {
    if (template === templates.Lisaa) return <LisaaMatkakohde />;
    if (template === templates.Poista) return <PoistaMatkakohde />;
    if (template === templates.Muokkaa) return <MuokkaaMatkakohdetta />;
  };

  return (
    <Wrapper>
      <div className="buttons-container">
        <div className="btn">
          <Button
            onClick={() => setTemplate(templates.Lisaa)}
            styles={{ width: '100%', background: '#2a9134', color: 'white' }}
          >
            Lisää matkakohde
          </Button>
        </div>
        <div className="btn">
          <Button
            onClick={() => setTemplate(templates.Poista)}
            styles={{ width: '100%', background: '#ef233c', color: 'white' }}
          >
            Poista matkakohde
          </Button>
        </div>
        <div className="btn">
          <Button
            onClick={() => setTemplate(templates.Muokkaa)}
            styles={{ width: '100%', background: '#3d5a80', color: 'white' }}
          >
            Muokkaa
          </Button>
        </div>
      </div>
      {getTemplate()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px 0;
  }
  .btn {
    flex-grow: 1;
    flex-shrink: 0;
    margin: 5px 10px;
    min-width: 200px;
  }

  @media only screen and (max-width: 600px) {
    .btn {
      min-width: 45%;
    }
  }
`;

export default MatkakohteetTemplate;
