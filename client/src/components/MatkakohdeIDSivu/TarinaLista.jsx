import './TarinaKortti.css';
import React, { useEffect, useState } from 'react';
import TarinaKortti from './TarinaKortti';

import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import formatedDate from '../../utils/formatedDate';
import serverUrl from '../../utils/serverUrl';
import capitalizeString from '../../utils/capitalizeString';

const TarinaLista = ({ id }) => {
  const [tarinat, setTarinat] = useState([]);
  const [etsi, setEtsi] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [matkakohde, setMatkakohde] = useState([]);
  const [loadingMK, setLoadingMK] = useState(true);
  const axios = useAxiosPrivate();

  const getTarinat = async () => {
    try {
      const response = await axios.get('/api/tarina/matkakohteentarinat/' + id);

      setTarinat(response.data.tarinat);
    } catch (error) {
      console.error(error);
    }
  };

  const getMatkakohde = async () => {
    try {
      setLoadingMK(true);
      const responseMatkakohde = await axios.get(
        '/api/matkakohde/matkakohde/' + id
      );

      setMatkakohde(responseMatkakohde.data.matkakohteet);
    } finally {
      setLoadingMK(false);
    }
  };

  useEffect(() => {
    getMatkakohde();
    getTarinat();
  }, []);
  return (
    <>
      {loadingMK ? null : (
        <div className="divmatkakohde">
          <h1>{capitalizeString(matkakohde.kohdenimi)}</h1>
          <h2>
            {capitalizeString(matkakohde.paikkakunta)}
            {`, ${capitalizeString(matkakohde.maa)}`}
          </h2>
          <div className="divkuva">
            <img
              className="kuva"
              src={`${serverUrl}/img/${matkakohde.kuva}`}
              alt={`Matkakohteen ${matkakohde.kohdenimi} kuva`}
            />
            <div className="kuvateksti">
              <h3>{matkakohde.kuvateksti}</h3>
            </div>
          </div>
        </div>
      )}
      <div className="divlista">
        {tarinat.map((tarina, index) => (
          <TarinaKortti
            numero={index}
            id={tarina._id}
            otsikko={tarina.otsikko}
            key={tarina._id}
            matkaaja={tarina.matkaaja.nimimerkki}
            createdAt={formatedDate(tarina.createdAt)}
            teksti={tarina.teksti}
            lukukertoja={tarina.lukukertoja}
          />
        ))}
      </div>
    </>
  );
};

export default TarinaLista;
