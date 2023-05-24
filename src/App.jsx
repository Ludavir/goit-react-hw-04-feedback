import './App.css';
import React from 'react';
import TittleMain from "./components/Tittle";
import Btns from "./components/Btns";
import Statistics from "./components/Statistics";
import Notificacion from "./components/Notification";
import { useState } from 'react';

const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const {good, neutral, bad} = state;
  const key = Object.keys(state);

  const [numClicksGood, setNumClicksGood] = useState (good);
  const manajerClickGood = () => {
    setNumClicksGood(numClicksGood + 1); 
  };
  const [numClicksNeutral, setNumClicksNeutral] = useState (neutral);
  const manajerClickNeutral = () => {
    setNumClicksNeutral(numClicksNeutral + 1); 
  };
  const [numClicksBad, setNumClicksBad] = useState (bad);
  const manajerClickBad = () => {
    setNumClicksBad(numClicksBad + 1); 
  };

  const countTotalFeedback = () => {
    let total = state.good + state.neutral + state.bad;
    return total
  };

  const countPositiveFeedbackPercentage = () => {
    let totalPositiveFeedback = Math.round((state.good/countTotalFeedback)*100) + "%";
    return totalPositiveFeedback
  };

  return(
    <div className="App">
      <TittleMain textTittle="Please leave feeback" />
      <Btns
      textBtn={key}
      manajerClickGood={manajerClickGood}
      manajerClickNeutral={manajerClickNeutral}
      manajerClickBad={manajerClickBad} />
      {countTotalFeedback === 0 ?
      <Notificacion textNotification="There is no feedback"/> : 
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback}
      positiveTotal={countPositiveFeedbackPercentage} />
      }
  </div>
  )
}

export default App;
