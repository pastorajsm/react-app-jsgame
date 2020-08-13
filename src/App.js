import React from "react";
import eagleLogo from "./assets/images/eagle.jpg";
import bearLogo from "./assets/images/bears.jpg";
import hornetLogo from "./assets/images/hornet.jpg";
import ravenLogo from "./assets/images/raven.jpg";
import Game from "./components/game/Game";
import "./App.css";

function App(props) {
  const eagles = {
    name: "Romulus Eagles",
    logoSrc: eagleLogo,
  };

  const bears = {
    name: "Belleville Bears",
    logoSrc: bearLogo,
  };

  const hornets = {
    name: "Dearborn Hornet",
    logoSrc: hornetLogo,
  };

  const ravens = {
    name: "Detroit Ravens",
    logoSrc: ravenLogo,
  };

  return (
    <div className="App">
      <Game venue="5120 S. Wayne Rd." homeTeam={eagles} visitingTeam={bears} />
      <Game
        venue="Romulus High Arena"
        homeTeam={hornets}
        visitingTeam={ravens}
      />
    </div>
  );
}

export default App;
