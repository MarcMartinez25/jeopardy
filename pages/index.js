import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Game from '../components/Game/Game';

const jeopardURL = 'https://jarchive-json.glitch.me/game/01/01/2020';

const getCategories = (list, setter) => {
  const badList = list.map((item) => item.category);
  const goodList = [...new Set(badList)];

  setter(goodList);
};

const Home = () => {
  const [jeopardy, setJeopardy] = useState(null);
  const [jeopardyCategoryList, setJeopardyCategoryList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [doubleJeopardy, setDoubleJeopardy] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [doubleJeopardCategoryList, setDoubleJeopardyCategoryList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [finalJeopardy, setFinalJeopardy] = useState(null);

  useEffect(() => {
    axios.get(jeopardURL).then((res) => {
      setFinalJeopardy(res.data['final jeopardy']);
      setJeopardy(res.data.jeopardy);
      setDoubleJeopardy(res.data['double jeopardy']);

      getCategories(res.data.jeopardy, setJeopardyCategoryList);
      getCategories(res.data['double jeopardy'], setDoubleJeopardyCategoryList);
    });
  }, []);

  return (
    <>
      <Header />
      <Game jeopardyClues={jeopardy} jeopardyCategories={jeopardyCategoryList} />
    </>
  );
};

export default Home;
