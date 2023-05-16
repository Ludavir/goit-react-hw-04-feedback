import './App.css';
import React from 'react';
import TittleMain from "./components/Tittle";
import Btns from "./components/Btns";
import Statistics from "./components/Statistics";
import Notificacion from "./components/Notification";

class App extends React.Component {

    state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  manajerClickGood () {
    this.setState(({good}) => ({good: good + 1}))
  };
  manajerClickNeutral () {
    this.setState(({neutral}) => ({neutral: neutral + 1}))
  };
  manajerClickBad () {
    this.setState(({bad}) => ({bad: bad + 1}))
  };

  countTotalFeedback = ()=> {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total
  };

  countPositiveFeedbackPercentage = () => {
    let totalPositiveFeedback = Math.round((this.state.good/this.countTotalFeedback())*100) + "%";
    return totalPositiveFeedback
  };
  
  render () {
    const {good, neutral, bad} = this.state;
    const key = Object.keys(this.state);
    return (
      <div className="App">
        <TittleMain />
        <Btns
        textBtn={key}
        manajerClickGood={this.manajerClickGood.bind(this)}
        manajerClickNeutral={this.manajerClickNeutral.bind(this)}
        manajerClickBad={this.manajerClickBad.bind(this)} />

        {this.countTotalFeedback() === 0 ?
        <Notificacion textNotification="There is no feedback"/> : 
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positiveTotal={this.countPositiveFeedbackPercentage()} />
        }



      </div>
    )
  }
}

// function App()  {
//   const state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
//   const {good, neutral, bad} = state;
//   const key = Object.keys(state);

//   const [numClicksGood, setNumClicksGood] = useState (good);
//   const manajerClickGood = () => {
//     setNumClicksGood(numClicksGood + 1); 
//   }
//   const [numClicksNeutral, setNumClicksNeutral] = useState (neutral);
//   const manajerClickNeutral = () => {
//     setNumClicksNeutral(numClicksNeutral + 1); 
//   }
//   const [numClicksBad, setNumClicksBad] = useState (bad);
//   const manajerClickBad = () => {
//     setNumClicksBad(numClicksBad + 1); 
//   }
//     return (
//       <div className="App">
//         <TittleMain />
//         <Btns
//         textBtn={key}
//         manajerClickGood={manajerClickGood}
//         manajerClickNeutral={manajerClickNeutral}
//         manajerClickBad={manajerClickBad}
//         />
//         <Statistics good={numClicksGood} neutral={numClicksNeutral} bad={numClicksBad}/>

//       </div>
//     )
// }

export default App;
