import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import TarinaLista from '../components/MatkakohdeIDSivu/TarinaLista';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const MatkakohdeIDSivu = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div>
      <TarinaLista id={id} />
    </div>
  );
};

const Wrapper = styled.div``;

export default MatkakohdeIDSivu;
