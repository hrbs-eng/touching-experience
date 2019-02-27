import React, { Component } from "react";
import "./App.css";
import KeyCodesDictionary from "./KeyCodesDictionary";
import KeyPressAction from "./KeyPressAction";

class App extends Component {
  constructor(props) {
    super();

    this.keys = [
      {
        code: 32,
        text: "Good morning herbie! I hope you will have an herbalecious day!"
      },
      { code: 84, text: "You are touching rosemary!" }
    ];
  }

  speech = text => {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Key Press Actions</h2>
          <KeyCodesDictionary />
        </header>
        {this.keys.map((key, index) => (
          <KeyPressAction
            key={index}
            keyCode={key.code}
            action={() => this.speech(key.text)}
          />
        ))}
      </div>
    );
  }
}

export default App;
