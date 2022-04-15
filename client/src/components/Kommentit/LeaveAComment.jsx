import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../assets/lataus.png';
import SERVER_URL from '../../utils/serverUrl';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import { useSelector } from 'react-redux';
const LeaveAComment = ({ id, getComments }) => {
  const [text, setText] = useState('');

  const axios = useAxiosPrivate();

  const kuva = useSelector((state) => {
    if (!state.auth.kayttaja.kuva) return img;
    return `${SERVER_URL}/img/${state.auth.kayttaja.kuva}`;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/kommentit/uusi', {
        tarinaID: id,
        teksti: text,
      });
      if (response.status === 201) {
        getComments();
        setText('');
      }
    } catch (error) {}
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className="kuva">
          <img src={kuva} alt="" />
        </div>
        <div className="comment">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name=""
            id="kommentit"
            placeholder="Jätä kommentti"
          />
        </div>
        <button type="submit" style={{ visibility: text ? '' : 'hidden' }}>
          Lähetä
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  border-top: 2px solid #eae8ea;
  margin: 10px auto;

  width: 95%;
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px auto;
    background-color: #eae8ea;
    height: 40px;
    border-radius: 15px;
  }

  .comment {
    flex: 1 0 150px;
    margin: 0 10px;
    height: 30px;
    textarea {
      height: 100%;
      resize: none;
      width: 100%;
      border: none;
      background: inherit;
      padding: 5px;
      font-family: inherit;
      font-size: 14px;
      :focus {
        border: 0 none #fff;
        outline: none;
      }
    }
  }
  .kuva {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      margin: 0 0 0 5px;
      border-radius: 50%;
      height: 30px;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: center;
    }
  }
  button {
    background: inherit;
    border: 2px solid #5281a5;
    color: #5281a5;
    border-radius: 10px;
    font-family: inherit;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
  }
`;

export default LeaveAComment;
