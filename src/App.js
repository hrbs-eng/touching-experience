import React, { Component } from "react";
import logo from "./images/logo.svg";
import "./styles/App.css";
import KeyPressAction from "./components/KeyPressAction";
import HerbPage from "./components/HerbPage";
import { speech } from "./functions";

class App extends Component {
  constructor() {
    super();

    this.keys = [
      {
        code: "Space",
        name: "",
        speech: "OUCH! That hurts!!!!!"
      },
      {
        code: "ArrowDown",
        name: "Rosemary",
        speech: "You are touching Rosemary!"
      },
      {
        code: "ArrowUp",
        name: "Thyme",
        speech:
          "You are touching Thyme! Do you know that is really good as a tea? You should try it!"
      },
      {
        code: "ArrowRight",
        name: "Moroccan Mint",
        speech: "You are touching Moroccan Mint!"
      },
      {
        code: "ArrowLeft",
        name: "Lemon Balm",
        speech: "You are touching Lemon Balm!"
      }
    ];

    this.state = {
      selectedHerb: null
    };
  }

  changeHerb = key => {
    speech(key.speech);
    this.setState({ selectedHerb: key });
  };

  addKeyActions = () => {
    return this.keys.map((key, index) => (
      <KeyPressAction
        key={index}
        keyCode={key.code}
        action={() => this.changeHerb(key)}
      />
    ));
  };

  render() {
    const { selectedHerb } = this.state;

    return (
      <div className="App">
        <div className="app-container">
          <img className="rotate-logo" src={logo} alt="HRBS" />
          {selectedHerb ? <HerbPage herb={selectedHerb} /> : ""}
          <h2 className="app-website text-spacing">www.hrbs.com</h2>
        </div>
        {this.addKeyActions()}
      </div>
    );
  }
}

export default App;
