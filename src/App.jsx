import './App.css';
import React from 'react';
import TittleMain from "./components/Tittle";
import Btns from "./components/Btns";
import Statistics from "./components/Statistics";
import Notificacion from "./components/Notification";

const App = () => {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const {good, neutral, bad} = state;
  const key = Object.keys(state);

  const [numClicksGood, setNumClicksGood] = useState (good);
  const manajerClickGood = () => {
    setNumClicksGood(numClicksGood + 1); 
  }
  const [numClicksNeutral, setNumClicksNeutral] = useState (neutral);
  const manajerClickNeutral = () => {
    setNumClicksNeutral(numClicksNeutral + 1); 
  }
  const [numClicksBad, setNumClicksBad] = useState (bad);
  const manajerClickBad = () => {
    setNumClicksBad(numClicksBad + 1); 
  }

  const countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total
  };

  const countPositiveFeedbackPercentage = () => {
    let totalPositiveFeedback = Math.round((this.state.good/this.countTotalFeedback())*100) + "%";
    return totalPositiveFeedback
  };

  return(
    <div className="App">
    <TittleMain textTittle="Please leave feeback" />
    <Btns
    textBtn={key}
    manajerClickGood={manajerClickGood.bind(this)}
    manajerClickNeutral={manajerClickNeutral.bind(this)}
    manajerClickBad={manajerClickBad.bind(this)} />

    {this.countTotalFeedback() === 0 ?
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
