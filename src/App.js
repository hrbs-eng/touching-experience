import React, { Component } from "react";
import "./App.css";
import KeyCodesDictionary from "./KeyCodesDictionary";
import KeyPressAction from "./KeyPressAction";

class App extends Component {
  constructor(props) {
    super();

    this.keys = [
      {
        code: "Space",
        text: "Good morning herbie! I hope you will have an herbalecious day!"
      },
      { code: "ArrowDown", text: "You are touching Rosemary!" },
      { code: "ArrowUp", text: "You are touching Thyme!" },
      { code: "ArrowRight", text: "You are touching Moroccan Mint!" },
      { code: "ArrowLeft", text: "You are touching Lemon Balm!" }
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
